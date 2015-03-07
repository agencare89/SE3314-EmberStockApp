StockApp.PlaceSaleOrderController = Ember.Controller.extend({
    actions:{
        newSale: function(params) {
            var newSale = this.store.createRecord('sellOrder', {
                companyID: params.id,
                numOfShares: this.get('numOfShares'),
                price: this.get('price'),
                comp: params
            });
            newSale.save();
            params.set('volume', this.get('numOfShares'));
            params.set('lastSale', this.get('price'));
            this.set('numOfShares', '');
            this.set('price', '');
            this.transitionToRoute('marketByOrder', params);
        },


        cancelSale: function() {
            this.set('numOfShares', '');
            this.set('price', '');
            this.transitionToRoute('stockStateSummary');
        }
    }
});