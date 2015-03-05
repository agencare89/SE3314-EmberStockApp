/**
 * Created by Adam on 2015-03-01.
 */
StockApp = Ember.Application.create({
    LOG_TRANSITIONS: true
});

StockApp.ApplicationAdapter = DS.FixtureAdapter;
//StockApp.ApplicationSerializer = DS.LSSerializer.extend();
//StockApp.ApplicationAdapter = DS.LSAdapter.extend({ namespace: 'StockApp' });
