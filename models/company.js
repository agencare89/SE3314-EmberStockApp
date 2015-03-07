StockApp.Company = DS.Model.extend({
    //id: DS.attr('number'),
    name: DS.attr('string'),
    openPrice: DS.attr('number'),
    logo: DS.attr('string'),
    lastSale: DS.attr('number'),
    netChange: DS.attr('number'),
    changePic: DS.attr('string'),
    percentChange: DS.attr('number'),
    volume: DS.attr('number'),

    listOfBuys: DS.hasMany('buyOrder'),
    listOfSells: DS.hasMany('sellOrder')
});