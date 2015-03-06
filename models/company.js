StockApp.Company = DS.Model.extend({
    name: DS.attr('string'),
    openPrice: DS.attr('number'),
    logo: DS.attr('string')
});