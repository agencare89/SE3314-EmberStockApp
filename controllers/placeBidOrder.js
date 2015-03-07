StockApp.PlaceBidOrderController = Ember.Controller.extend({
    actions: {
        newBid: function(params) {
            // Create a new bid order and store it
            var newBid = this.store.createRecord('buyOrder', {
                companyID: params.id,
                numOfShares: this.get('numOfShares'),
                price: this.get('price'),
                comp: params
            });
            newBid.save();
            // Set the new changes into the 
            params.set('volume', this.get('numOfShares'));
            params.set('lastSale', this.get('price'));
            var netChange = (params.get('lastSale')-params.get('openPrice')).toFixed(2);
            var percentChange = (((params.get('lastSale')-params.get('openPrice'))/params.get('openPrice'))*100).toFixed(2);
            params.set('netChange', netChange);
            params.set('percentChange', percentChange);

            if (netChange > 0) {
                params.set('changePic', './img/up.png');
            }
            else if(netChange < 0) {
                params.set('changePic', './img/down.png');
            }
            else {
                params.set('changePic', './img/noChange.png');
            }

            this.set('numOfShares', '');
            this.set('price', '');
            this.transitionToRoute('marketByOrder', params);
        },


        cancelBid: function() {
            this.set('numOfShares', '');
            this.set('price', '');
            this.transitionToRoute('stockStateSummary');
        }
    }
});