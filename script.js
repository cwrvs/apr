function calculateLoan() {
    var amount = parseFloat(document.getElementById('amount').value) || 0;
    var interestRate = parseFloat(document.getElementById('interestRate').value) || 0;
    var loanTerm = parseInt(document.getElementById('loanTerm').value, 10) || 0;
    var extraPayment = parseFloat(document.getElementById('extraPayment').value) || 0;

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

    var currentBalance = amount;
    var totalInterestPaid = 0;
    var month = 0;
    var totalInterestForOriginalSchedule = currentTermDetails.standardPayment * loanTerm - amount;
    var interestSaved = 0;

    while (currentBalance > 0) {
        var interestForThisMonth = currentBalance * monthlyInterestRate;
        var principalForThisMonth = Math.min(currentTermDetails.standardPayment - interestForThisMonth + extraPayment, currentBalance);
        currentBalance -= principalForThisMonth;
        totalInterestPaid += interestForThisMonth;
        month++;
        if (month >= loanTerm) break; // Avoid infinite loop if balance never reaches 0
    }

    var effectiveInterestRate = interestRate; // Default to nominal interest rate
    if (extraPayment > 0) {
        effectiveInterestRate = (totalInterestPaid / amount) / (month / 12) * 100;
        interestSaved = totalInterestForOriginalSchedule - totalInterestPaid;
    }

    // Display current term results
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Current Term (' + loanTerm + ' months):<br/>' +
                           'Monthly Payment: ' + currentTermDetails.standardPayment.toFixed(2) + '<br/>' +
                           'Total Interest: ' + currentTermDetails.totalInterest.toFixed(2) + '<br/>' +
                           'Total Interest Paid with Extra Payments: ' + totalInterestPaid.toFixed(2) + '<br/>' +
                           'Interest Saved by Extra Payments: ' + interestSaved.toFixed(2) + '<br/>' +
                           'Total Months to Pay Off: ' + month + '<br/>' +
                           'Effective Interest Rate with Extra Payments: ' + effectiveInterestRate.toFixed(2) + '%';

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
}

window.onload = function() {
    var select = document.getElementById('loanTerm');
    for (var i = 84; i <= 240; i+=12) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i + ' months';
        select.appendChild(opt);
    }
    // Optionally preselect a loan term
    // document.getElementById('loanTerm').value = 120;
};
