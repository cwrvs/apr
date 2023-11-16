function calculateLoan() {
    var amount = document.getElementById('amount').value;
    var interestRate = document.getElementById('interestRate').value;
    var loanTerm = document.getElementById('loanTerm').value;
    var payoffMonths = document.getElementById('payoffMonths').value;
    var extraPayment = document.getElementById('extraPayment').value;

    // Convert annual interest rate to monthly and decimal form
    var monthlyInterestRate = (interestRate / 100) / 12;
    
    // Calculate standard monthly payment without extra payment
    var standardPayment = amount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) / (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);

    // Initialize variables for calculation with extra payment
    var currentBalance = amount;
    var totalInterestPaid = 0;
    var month = 0;

    // Calculate loan payoff with extra payments
    while (currentBalance > 0 && month < payoffMonths) {
        var interestForThisMonth = currentBalance * monthlyInterestRate;
        var principalForThisMonth = standardPayment - interestForThisMonth + parseFloat(extraPayment);
        if (principalForThisMonth > currentBalance) {
            principalForThisMonth = currentBalance; // Prevent overpayment
        }
        currentBalance -= principalForThisMonth;
        totalInterestPaid += interestForThisMonth;
        month++;
    }

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Total Interest Paid: ' + totalInterestPaid.toFixed(2) + '<br/>' + 
                           'Total Months: ' + month;
}

// Populate Payoff Months dropdown
window.onload = function() {
    var select = document.getElementById('payoffMonths');
    for (var i = 12; i <= 239; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i + ' months';
        select.appendChild(opt);
    }
};