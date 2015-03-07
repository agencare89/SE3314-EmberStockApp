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
                    numOfShares: this.get('numOfShares'),
                    price: this.get('price'),
                    comp: params
                });
                newBid.save();
            }
            // Set the sale to show in stockStateSummary if there was a sale made
            if (numSold > 0) {
                params.set('volume', parseInt(params.get('volume')+numSold));
                params.set('lastSale', this.get('price'));
                var netChange = (params.get('lastSale') - params.get('openPrice')).toFixed(2);
                var percentChange = (((params.get('lastSale') - params.get('openPrice')) / params.get('openPrice')) * 100).toFixed(2);
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