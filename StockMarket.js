/**
 * Created by Adam on 2015-03-01.
 */
window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ApplicationSerializer = DS.LSSerializer.extend();
App.ApplicationAdapter = DS.LSAdapter.extend({ namespace: 'StockMarket' });

App.Router.map(function() {

    this.resource('application', function() {

        this.resource('stockStateSummary', function() {

            this.resource('placeBidOrder');
            this.resource('placeSaleOrder');
            this.resource('marketByOrder');
            this.resource('marketByPrice');

        });
    });
});