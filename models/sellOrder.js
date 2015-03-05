StockApp.sellOrder = DS.Model.extend({
    company: DS.attr('company'),
    numOfShares: DS.attr('number'),
    price: DS.attr('number')
});