function calculateTotal() {
    var gallonsRequested = document.getElementById('gallonsRequested').value;
    var pricePerGallon = document.getElementById('suggestedPrice').value;
    var totalAmountDue = gallonsRequested * pricePerGallon;
    document.getElementById('totalAmountDue').value = totalAmountDue.toFixed(2);
}
