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
    var interestSaved = 0;

    while (currentBalance > 0) {
        var interestForThisMonth = currentBalance * monthlyInterestRate;
        var principalForThisMonth = Math.min(standardPayment - interestForThisMonth + extraPayment, currentBalance);
        currentBalance -= principalForThisMonth;
        totalInterestPaid += interestForThisMonth;
        month++;
        if (month >= loanTerm) break; // Avoid infinite loop if balance never reaches 0
    }

    var effectiveInterestRate = (totalInterestPaid / amount) / (month / 12) * 100;

    // Calculate interest saved
    var totalInterestWithoutExtra = amount * monthlyInterestRate * loanTerm;
    interestSaved = totalInterestWithoutExtra - totalInterestPaid;

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Standard Monthly Payment: ' + standardPayment.toFixed(2) + '<br/>' +
                           'Total Interest Paid: ' + totalInterestPaid.toFixed(2) + '<br/>' +
                           'Interest Saved: ' + interestSaved.toFixed(2) + '<br/>' +
                           'Total Months: ' + month + '<br/>' +
                           'Effective Interest Rate: ' + effectiveInterestRate.toFixed(2) + '%';
}

window.onload = function() {
    var select = document.getElementById('loanTerm');
    for (var i = 84; i <= 240; i+=12) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i + ' months';
        select.appendChild(opt);
    }
};