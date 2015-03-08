/**
 * Created by Adam on 2015-03-04.
 */
StockApp.CompanyRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('company') ;
    }
});