StockApp.PlaceBidOrderController = Ember.Controller.extend({
    actions: {
        newBid: function(params) {
            var newBid = this.store.createRecord('buyOrder', {
                companyID: params,
                numOfShares: this.get('numOfShares'),
                price: this.get('price')
            });

            newBid.save();
            this.transitionToRoute('stockStateSummary');
        }
    }
});