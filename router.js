/**
 * Created by Adam on 2015-03-01.
 */
StockApp.Router.map(function() {
    this.resource('application', {path: '/'}, function() {

        this.resource('stockStateSummary', {path: '/'}, function() {

            this.resource('placeBidOrder', {path: '/placeBidOrder/:id'});

            this.resource('placeSaleOrder', {path: '/placeSellOrder/:id'});

            this.resource('marketByOrder', {path: ':id'}, function(){
                this.resource('marketByPrice', {path: '/'});
            });
        });
    });
});