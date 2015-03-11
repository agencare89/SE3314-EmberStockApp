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
    var htmlString = '';                        // we are building an html string that will be returned into the template to display the table
    var arrayOfBuyPrices = new Array();         // keep track of what has been displayed on the marketByPrice (buys)
    var arrayOfSellPrices = new Array();        // keep track of what has been displayed on the marketByPrice (sells)
    var printBuysArray = new Array();           // push all the buys in this
    var printSellsArray = new Array();          // push all the sells in this
    var displayBuy = false;                     // if we are going to display a buy
    var displaySell = false;                    // if we are going to display the sell

    if (buyOrders.length > 0 || sellOrders.length > 0) {

        // for loop that will break after 10 entries have been displayed
        for (var i = 0; i < 10; i++) {
            displayBuy = true;
            displaySell = true;
            if (!buyOrders[i]) displayBuy = false;
            if (!sellOrders[i]) displaySell = false;

            // for loop that checks the price of the current bid order and compares it with the ones currently being displayed
            for (var j = 0; j < arrayOfBuyPrices.length; j++) {
                if (buyOrders[i]) {
                    if (buyOrders[i].get('price') == arrayOfBuyPrices[j]) {
                        displayBuy = false;
                        break;
                    }
                }
            }
            // for loop that checks the price of the current sell order and compares it with the ones currently being displayed
            for (var k = 0; k < arrayOfSellPrices.length; k++) {
                if (sellOrders[i]) {
                    if (sellOrders[i].get('price') == arrayOfSellPrices[k]) {
                        displaySell = false;
                        break;
                    }
                }
            }

            if ((buyOrders.length > sellOrders.length) && (i == buyOrders.length)) break;
            else if ((sellOrders.length > buyOrders.length) && (i == sellOrders.length)) break;
            else if ((sellOrders.length == buyOrders.length) && (i == sellOrders.length)) break;

            if (displayBuy && !displaySell) {
                arrayOfBuyPrices.push(buyOrders[i].get('price'));
                printBuysArray.push(buyOrders[i]);
            }
            else if (!displayBuy && displaySell) {
                arrayOfSellPrices.push(sellOrders[i].get('price'));
                printSellsArray.push(sellOrders[i]);
            }
            else if (displayBuy && displaySell) {
                arrayOfBuyPrices.push(buyOrders[i].get('price'));
                arrayOfSellPrices.push(sellOrders[i].get('price'));
                printBuysArray.push(buyOrders[i]);
                printSellsArray.push(sellOrders[i]);
            }
        }
        for (var x = 0; x < 10; x++) {
            htmlString += '<tr>';
            if (x >= printSellsArray.length && x >= printBuysArray.length) break;
            else if (x >= printBuysArray.length) {
                htmlString += '<td></td><td></td><td></td>';
                htmlString += '<td>' + printSellsArray[x].get('groupCount') + '</td><td>' + printSellsArray[x].get('groupVolume') + '</td><td>' + printSellsArray[x].get('price') + '</td>';
            }
            else if (x >= printSellsArray.length) {
                htmlString += '<td>' + printBuysArray[x].get('groupCount') + '</td><td>' + printBuysArray[x].get('groupVolume') + '</td><td>' + printBuysArray[x].get('price') + '</td>';
                htmlString += '<td></td><td></td><td></td>';
            }
            else {
                htmlString += '<td>' + printBuysArray[x].get('groupCount') + '</td><td>' + printBuysArray[x].get('groupVolume') + '</td><td>' + printBuysArray[x].get('price') + '</td>';
                htmlString += '<td>' + printSellsArray[x].get('groupCount') + '</td><td>' + printSellsArray[x].get('groupVolume') + '</td><td>' + printSellsArray[x].get('price') + '</td>';
            }
            htmlString += '</tr>';
        }
    }
    // now return the html string we built to the template
    return new Ember.Handlebars.SafeString(htmlString);
});