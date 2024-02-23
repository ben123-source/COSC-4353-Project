// storing quote history
var fuelquoteHistory = JSON.parse(localStorage.getItem('fuelquoteHistory')) || [];

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

    localStorage.setItem('fuelquoteHistory', JSON.stringify(fuelquoteHistory));

    updateQuoteHistory();
}

function updateQuoteHistory() {
    var historyTable = document.getElementById('quoteHistory');
    // Clear  table
    historyTable.innerHTML = '<tr><th>Gallons Requested</th><th>Price Per Gallon</th><th>Total Amount Due</th></tr>'; 
    for (var i = 0; i < fuelquoteHistory.length; i++) {
        var quote = fuelquoteHistory[i];
        historyTable.innerHTML += '<tr><td>' + quote.gallonsRequested + '</td><td>' + quote.pricePerGallon + '</td><td>' + quote.totalAmountDue + '</td></tr>';
    } 
}


