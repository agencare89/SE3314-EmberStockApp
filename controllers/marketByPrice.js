/**
 * Created by Adam on 2015-03-08.
 */
StockApp.MarketByPriceController = Ember.ArrayController.extend({
    sortBuysProperties: ['price:desc', 'numOfShares:desc'],
    sortedBuyOrders: Ember.computed.sort('model.listOfBuys', 'sortBuysProperties'),

    sortSellProperties: ['price:asc', 'numOfShares:desc'],
    sortedSaleOrders: Ember.computed.sort('model.listOfSells', 'sortSellProperties')
});