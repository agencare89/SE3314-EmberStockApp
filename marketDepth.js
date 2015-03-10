/**
 * Created by Adam on 2015-03-07.
 */
Ember.Handlebars.helper('marketByOrderBuilder', function(buyOrders, sellOrders) {
    console.log(buyOrders);
    console.log(sellOrders);
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
    console.log(buyOrders);
    console.log(sellOrders);
    var arrayOfPrices = new Array();
    var display = false;

    if (buyOrders.content.length > 0 || sellOrders.content.length > 0) {

        for (var i = 0; i < 10; i++) {
            display = true; // assume its going to be displayed
            if (buyOrders.content.length > sellOrders.content.length) {
                if (i == buyOrders.content.length) break;
            }
            else if (sellOrders.content.length > buyOrders.content.length) {
                if (i == sellOrders.content.length) break;
            }
            else if (sellOrders.content.length == buyOrders.content.length) {
                if (i == sellOrders.content.length) break;
            }

            for (var j = 0; j < arrayOfPrices.length; j++) {
                if (buyOrders.content[i].get('price') == arrayOfPrices[j]) display = false;
            }

            if (display) {
                arrayOfPrices.push(buyOrders.content[i].get('price'));

                htmlString += '<tr>';
                if (i < buyOrders.content.length) {
                    htmlString += '<td>' + buyOrders.content[i].get('groupCount') + '</td><td>' + buyOrders.content[i].get('groupVolume') + '</td><td>' + buyOrders.content[i].get('price') + '</td>';
                }
                else {
                    htmlString += '<td></td><td></td><td></td>'
                }
                if (i < sellOrders.content.length) {
                    htmlString += '<td>' + sellOrders.content[i].get('groupCount') + '</td><td>' + sellOrders.content[i].get('groupVolume') + '</td><td>' + sellOrders.content[i].get('price') + '</td>';
                }
                else {
                    htmlString += '<td></td><td></td><td></td>'
                }
                htmlString += '</tr>';
            }

        }
    }
    return new Ember.Handlebars.SafeString(htmlString);
});