/**
 * Created by Adam on 2015-03-07.
 */
Ember.Handlebars.helper('marketByOrderBuilder', function(buyOrders, sellOrders) {
    var htmlString = '';
    for (var a = 0; a < buyOrders.length; a++) {
        console.log(buyOrders.objectAt(a).get('numOfShares') + '' + buyOrders.objectAt(a).get('price'));
    }
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
                htmlString += '<td>' + buyOrders.objectAt(i).get('numOfShares') + '</td><td>' + buyOrders.objectAt(i).get('price') + '</td>';
            }
            else {
                htmlString += '<td></td><td></td>'
            }
            if (i < sellOrders.length) {
                htmlString += '<td>' + sellOrders.objectAt(i).get('numOfShares') + '</td><td>' + sellOrders.objectAt(i).get('price') + '</td>';
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
    console.log(buyOrders.length);
    console.log(sellOrders.length);
    return new Ember.Handlebars.SafeString(htmlString);
});