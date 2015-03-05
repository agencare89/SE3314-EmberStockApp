/**
 * Created by Adam on 2015-03-01.
 */
StockApp.Router.map(function() {
    this.resource('application', {path: '/'});
    this.resource('marketByOrder');
    this.resource('marketByPrice');
    this.resource('placeBidOrder');
    this.resource('placeSaleOrder');
    this.resource('stockStateSummary');
});