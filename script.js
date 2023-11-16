function calculateLoan() {
    var amount = parseFloat(document.getElementById('amount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanTerm = parseInt(document.getElementById('loanTerm').value, 10);
    var extraPayment = parseFloat(document.getElementById('extraPayment').value);

    var monthlyInterestRate = (interestRate / 100) / 12;
    var standardPayment = amount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
    
    var currentBalance = amount;
    var totalInterestPaid = 0;
    var month = 0;
    var totalInterestForOriginalSchedule = standardPayment * loanTerm - amount;
    var interestSaved = 0;

    while (currentBalance > 0) {
        var interestForThisMonth = currentBalance * monthlyInterestRate;
        var principalForThisMonth = Math.min(standardPayment - interestForThisMonth + extraPayment, currentBalance);
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

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Standard Monthly Payment: ' + standardPayment.toFixed(2) + '<br/>' +
                           'Total Interest Paid with Extra Payments: ' + totalInterestPaid.toFixed(2) + '<br/>' +
                           'Total Interest Without Extra Payments: ' + totalInterestForOriginalSchedule.toFixed(2) + '<br/>' +
                           'Interest Saved by Extra Payments: ' + interestSaved.toFixed(2) + '<br/>' +
                           'Total Months to Pay Off: ' + month + '<br/>' +
                           'Effective Interest Rate with Extra Payments: ' + effectiveInterestRate.toFixed(2) + '%';
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