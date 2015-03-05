/**
 * Created by Adam on 2015-03-01.
 */
StockApp = Ember.Application.create({
    LOG_TRANSITIONS: true
});

StockApp.ApplicationSerializer = DS.LSSerializer.extend();
StockApp.ApplicationAdapter = DS.LSAdapter.extend({ namespace: 'StockMarket' });
