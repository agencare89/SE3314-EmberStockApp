StockApp.BuyOrder = DS.Model.extend({
    companyID: DS.attr('number'),
    numOfShares: DS.attr('number'),
    price: DS.attr('number'),
    comp: DS.belongsTo('company')
});