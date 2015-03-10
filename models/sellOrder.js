StockApp.SellOrder = DS.Model.extend({
    companyID: DS.attr('number'),
    numOfShares: DS.attr('number'),
    price: DS.attr('number'),
    groupCount: DS.attr('number'),
    groupVolume: DS.attr('number'),
    comp: DS.belongsTo('company')
});