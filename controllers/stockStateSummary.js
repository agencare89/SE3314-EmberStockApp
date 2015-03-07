StockApp.StockStateSummaryController = Ember.ArrayController.extend({
    filter: '=',
    sortProperties: [ 'volume:desc', 'name'],
    sortedCompanies: Ember.computed.sort('filteredCompanies', 'sortProperties'),
    actions: {
        sortBy: function (params) {
            switch (params) {
                case 'mostVolume':
                    this.set('filter', '=');
                    this.set('sortProperties', ['volume:desc']);
                    break;
                case 'gainers':
                    this.set('filter', '>');
                    this.set('sortProperties', ['netChange:desc']);
                    break;
                case 'losers':
                    this.set('filter', '<');
                    this.set('sortProperties', ['netChange']);
                    break;
            }
        }
    },
    filteredCompanies: function() {
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
                console.log('david is dust');
                break;
        }
    }.property('model', 'filter')
});
