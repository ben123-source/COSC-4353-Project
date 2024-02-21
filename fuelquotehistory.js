// storing quote history
var fuelquoteHistory = [];

function calculateTotal() {
    
    var gallonsRequested = document.getElementById('gallonsRequested').value;
    var pricePerGallon = document.getElementById('suggestedPrice').value;
    var totalAmountDue = gallonsRequested * pricePerGallon;
    document.getElementById('totalAmountDue').value = totalAmountDue.toFixed(2);
   
    fuelquoteHistory.push({
        gallonsRequested: gallonsRequested,
        pricePerGallon: pricePerGallon,
        totalAmountDue: totalAmountDue.toFixed(2)
    });

    updateQuoteHistory();
}
function updateQuoteHistory() {
    var historyDiv = document.getElementById('quoteHistory');
    historyDiv.innerHTML = ''; 
    for (var i = 0; i < fuelquoteHistory.length; i++) {
        var quote = quoteHistory[i];
        historyDiv.innerHTML += '<p>Gallons Requested: ' + quote.gallonsRequested + ', Price Per Gallon: ' + quote.pricePerGallon + ', Total Amount Due: ' + quote.totalAmountDue + '</p>';
    } 
}

