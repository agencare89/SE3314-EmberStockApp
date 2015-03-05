/**
 * Created by Adam on 2015-03-01.
 */
StockApp.Router.map(function() {
    this.resource('application', {path: '/'}, function() {
        this.resource('stockStateSummary', {path: '/'}, function() {
            this.resource('marketByOrder');
            this.resource('marketByPrice');
            this.resource('placeBidOrder');
            this.resource('placeSaleOrder');
        });
    });
});