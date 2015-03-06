StockApp.PlaceSaleOrderController = Ember.Controller.extend({
    actions:{
        newSale: function(params) {
            var newSale = this.store.createRecord('sellOrder', {
                companyID: params,
                numOfShares: this.get('numOfShares'),
                price: this.get('price')
            });
            newSale.save();
            this.set('numOfShares', '');
            this.set('price', '');
            this.transitionToRoute('marketByOrder', params);
        },
        cancelSale: function() {
            this.transitionToRoute('stockStateSummary');
        }
    }
});