StockApp.StockStateSummaryController = Ember.ArrayController.extend({
    filter: '=',
    sortProperties: [ 'volume:desc', 'name:asc'],
    sortedCompanies: Ember.computed.sort('filteredCompanies', 'sortProperties'),
    actions: {
        sortBy: function (params) {
            switch (params) {
                case 'mostVolume':
                    this.set('filter', '=');
                    this.set('sortProperties', ['volume:desc', 'name:asc']);
                    break;
                case 'gainers':
                    this.set('filter', '>');
                    this.set('sortProperties', ['netChange:desc', 'name:asc']);
                    break;
                case 'losers':
                    this.set('filter', '<');
                    this.set('sortProperties', ['netChange:asc', 'name:asc']);
                    break;
            }
        }
    },
    filteredCompanies: function() {
        console.log(this.get('sortProperties'));
        switch (this.get('filter')) {
            case '=':
                console.log('volume');
                return this.get('model').filter(function(company) {
                    return company.get('id');
                });
                break;
            case '>':
                console.log('gainers');
                return this.get('model').filter(function(company){
                    return company.get('netChange') > 0;
                });
                break;
            case '<':
                console.log('losers');
                return this.get('model').filter(function(company){
                    return company.get('netChange') < 0;
                });
                break;
            case 'default':
                break;
        }
    }.property('model', 'filter', '@this', 'sortProperties')
});

/*
StockApp.StockStateSummaryController = Ember.Object.extend({
    volume1: Ember.computed.alias('volume'),
    netChange1: Ember.computed.alias('netChange'),
    name1: Ember.computed.alias('name')
}); */
