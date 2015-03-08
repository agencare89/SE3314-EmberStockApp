StockApp.MarketByOrderController = Ember.Controller.extend({
    groupedBuys: Ember.computable.group('model.listOfBuys', 'price'),
    groupedSells: Ember.computable.group('model.listOfSells', 'price')
});