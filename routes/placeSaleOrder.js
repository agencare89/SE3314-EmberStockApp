StockApp.PlaceSaleOrderRoute = Ember.Route.extend({
    model: function(params) {
        return  this.store.find('company', params.id) ;
    }
});