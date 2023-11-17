function calculateLoan() {
    // ... existing code ...

    // Function to calculate payment and total interest for a given term
    function calculateForTerm(term) {
        var monthlyInterestRate = (interestRate / 100) / 12;
        var standardPayment = amount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -term));
        var totalInterest = standardPayment * term - amount;
        return { standardPayment, totalInterest };
    }

    // Calculate for current, shorter, and longer terms
    var currentTermDetails = calculateForTerm(loanTerm);
    var shorterTermDetails = loanTerm > 12 ? calculateForTerm(loanTerm - 12) : null; // Check if shorter term is valid
    var longerTermDetails = calculateForTerm(loanTerm + 12); // Longer term

    // Display current term results
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Current Term (' + loanTerm + ' months):<br/>' +
                           'Monthly Payment: ' + currentTermDetails.standardPayment.toFixed(2) + '<br/>' +
                           'Total Interest: ' + currentTermDetails.totalInterest.toFixed(2) + '<br/>';

    // Display shorter term results if applicable
    if (shorterTermDetails) {
        resultsDiv.innerHTML += '<br/>Shorter Term (' + (loanTerm - 12) + ' months):<br/>' +
                                'Monthly Payment: ' + shorterTermDetails.standardPayment.toFixed(2) + '<br/>' +
                                'Total Interest: ' + shorterTermDetails.totalInterest.toFixed(2) + '<br/>';
    }

    // Display longer term results
    resultsDiv.innerHTML += '<br/>Longer Term (' + (loanTerm + 12) + ' months):<br/>' +
                            'Monthly Payment: ' + longerTermDetails.standardPayment.toFixed(2) + '<br/>' +
                            'Total Interest: ' + longerTermDetails.totalInterest.toFixed(2);

    // ... existing code to handle effective interest rate and other calculations ...
}

window.onload = function() {
    var select = document.getElementById('loanTerm');
    for (var i = 84; i <= 240; i+=12) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i + ' months';
        select.appendChild(opt);
    }
    // Preselect a loan term, if needed
    // document.getElementById('loanTerm').value = 120;
};
