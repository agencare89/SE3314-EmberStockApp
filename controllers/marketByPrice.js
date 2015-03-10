StockApp.MarketByPriceController = Ember.Controller.extend({
    sortBuysProperties: ['price:desc', 'numOfShares:desc'],
    sortedGroupedBidOrders: Ember.computed.sort('model.listOfBuys', 'sortBuysProperties'),

    sortSellProperties: ['price:asc', 'numOfShares:desc'],
    sortedGroupedSellOrders: Ember.computed.sort('model.listOfSells', 'sortSellProperties')
});
