/**
 * Created by Adam on 2015-03-08.
 */
StockApp.MarketByOrderController = Ember.Controller.extend({
    sortBuysProperties: ['price:desc', 'numOfShares:desc'],
    sortedBidOrders: Ember.computed.sort('model.listOfBuys', 'sortBuysProperties'),

    sortSellProperties: ['price:asc', 'numOfShares:desc'],
    sortedSellOrders: Ember.computed.sort('model.listOfSells', 'sortSellProperties')
});

