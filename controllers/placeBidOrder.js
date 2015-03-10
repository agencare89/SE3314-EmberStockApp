StockApp.PlaceBidOrderController = Ember.Controller.extend({
    actions: {
        newBid: function(params) {
            // Search through the sales to find if the bid can be met
            var numSold = 0;
            for (var i = 0; i < params.get('listOfSells').get('length'); i++) {
                if (params.get('listOfSells').objectAt(i).get('price') <= this.get('price')) {
                    if (parseInt(params.get('listOfSells').objectAt(i).get('numOfShares')) < parseInt(this.get('numOfShares'))) {
                        numSold = parseInt(numSold + params.get('listOfSells').objectAt(i).get('numOfShares'));
                        this.set('numOfShares', parseInt(this.get('numOfShares')) - parseInt(params.get('listOfSells').objectAt(i).get('numOfShares')));
                        params.get('listOfSells').removeAt(i);
                        i--;
                    }
                    else if (parseInt(params.get('listOfSells').objectAt(i).get('numOfShares')) == parseInt(this.get('numOfShares'))) {
                        numSold = parseInt(numSold + params.get('listOfSells').objectAt(i).get('numOfShares'));
                        this.set('numOfShares', 0);
                        params.get('listOfSells').removeAt(i);
                        break;
                    }
                    else if (parseInt(params.get('listOfSells').objectAt(i).get('numOfShares')) > parseInt(this.get('numOfShares'))){
                        numSold = parseInt(numSold + this.get('numOfShares'));
                        params.get('listOfSells').objectAt(i).set('numOfShares', parseInt(params.get('listOfSells').objectAt(i).get('numOfShares')) - parseInt(this.get('numOfShares')));
                        this.set('numOfShares', 0);
                        break;
                    }
                }
            }
            if(parseInt(this.get('numOfShares')) != 0) {
                // Create a new bid order and store it
                var newBid = this.store.createRecord('buyOrder', {
                    companyID: params.id,
                    numOfShares: parseInt(this.get('numOfShares')),
                    price: parseFloat(this.get('price')),
                    groupCount: 0,
                    groupVolume: 0,
                    comp: params
                });
                //newBid.save();
            }
            // Set the sale to show in stockStateSummary if there was a sale made
            if (numSold > 0) {
                params.set('volume', parseInt(params.get('volume')+numSold));
                params.set('lastSale', parseFloat(this.get('price')));
                var netChange = parseFloat((params.get('lastSale') - params.get('openPrice')).toFixed(2));
                var percentChange = (parseFloat(((params.get('lastSale') - params.get('openPrice')) / params.get('openPrice')) * 100).toFixed(2));
                params.set('netChange', netChange);
                params.set('percentChange', percentChange);
                if (netChange > 0) {
                    params.set('changePic', './img/up.png');
                }
                else if (netChange < 0) {
                    params.set('changePic', './img/down.png');
                }
                else {
                    params.set('changePic', './img/noChange.png');
                }
            }

            // here we have to GROUP the bids and sells lists..
            var buyOrders = params.get('listOfBuys');
            var groupedCount = 0;
            var groupedVolume = 0;

            for (var a = 0; a < buyOrders.get('length'); a++) {

                for (var b = 0; b < buyOrders.get('length'); b++) {
                    if (buyOrders.objectAt(a).get('price') === buyOrders.objectAt(b).get('price')) {
                        groupedCount = groupedCount + 1;
                        groupedVolume = groupedVolume + parseInt(buyOrders.objectAt(b).get('numOfShares'));
                    }
                }

                buyOrders.objectAt(a).set('groupCount', groupedCount);
                buyOrders.objectAt(a).set('groupVolume', parseInt(groupedVolume));
                groupedCount = 0;
                groupedVolume = 0;
            }

            var sellOrders = params.get('listOfSells');
            groupedCount = 0;
            groupedVolume = 0;

            for (var c = 0; c < sellOrders.get('length'); c++) {

                for (var d = 0; d < sellOrders.get('length'); d++) {
                    if (sellOrders.objectAt(c).get('price') === sellOrders.objectAt(d).get('price'))  {
                        groupedCount = groupedCount + 1;
                        groupedVolume = groupedVolume + parseInt(sellOrders.objectAt(d).get('numOfShares'));
                    }
                }

                sellOrders.objectAt(c).set('groupCount', groupedCount);
                sellOrders.objectAt(c).set('groupVolume', parseInt(groupedVolume));
                groupedCount = 0;
                groupedVolume = 0;
            }
            // Clear the order form and transition back to marketBy Order
            this.set('numOfShares', '');
            this.set('price', '');
            this.transitionToRoute('marketByOrder', params);
        },

        cancelBid: function() {
            // Reset the page and transition back to view stockStateSummary
            this.set('numOfShares', '');
            this.set('price', '');
            this.transitionToRoute('stockStateSummary');
        }
    }
});