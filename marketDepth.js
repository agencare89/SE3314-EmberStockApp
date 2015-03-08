/**
 * Created by Adam on 2015-03-07.
 */
Ember.Handlebars.helper('marketByOrderBuilder', function(buyOrders, sellOrders) {
    var htmlString = '';
    if (buyOrders.length > 0 || sellOrders.length > 0) {
        for (var i = 0; i < 10; i++) {
            if (buyOrders.length > sellOrders.length) {
                if (i == buyOrders.length) break;
            }
            else if (sellOrders.length > buyOrders.length) {
                if (i == sellOrders.length) break;
            }
            else if (sellOrders.length == buyOrders.length) {
                if (i == sellOrders.length) break;
            }

            htmlString += '<tr>';
            if (i < buyOrders.length) {
                htmlString += '<td>' + buyOrders[i].get('numOfShares') + '</td><td>' + buyOrders[i].get('price') + '</td>';
            }
            else {
                htmlString += '<td></td><td></td>'
            }
            if (i < sellOrders.length) {
                htmlString += '<td>' + sellOrders[i].get('numOfShares') + '</td><td>' + sellOrders[i].get('price') + '</td>';
            }
            else {
                htmlString += '<td></td><td></td>'
            }
            htmlString += '</tr>';
        }
    }
    return new Ember.Handlebars.SafeString(htmlString);
});

Ember.Handlebars.helper('marketByPriceBuilder', function(buyOrders, sellOrders){
    var htmlString = '';
    // when we get the buyOrders and sellOrders here they should already be sorted... we need to group them?
    return new Ember.Handlebars.SafeString(htmlString);
});