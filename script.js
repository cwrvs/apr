function calculateLoan() {
    var amount = parseFloat(document.getElementById('amount').value) || 0;
    var interestRate = parseFloat(document.getElementById('interestRate').value) || 0;
    var loanTerm = parseInt(document.getElementById('loanTerm').value, 10);
    var extraPayment = parseFloat(document.getElementById('extraPayment').value) || 0;
    var monthlyInterestRate = (interestRate / 100) / 12;

    function calculatePayment(term) {
        return amount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -term));
    }

    var standardPayment = calculatePayment(loanTerm);
    var totalInterestWithoutExtra = standardPayment * loanTerm - amount;

    var currentBalance = amount;
    var totalInterestPaidWithExtra = 0;
    var monthsWithExtra = 0;
    while (currentBalance > 0) {
        var interestForThisMonth = currentBalance * monthlyInterestRate;
        var principalForThisMonth = Math.min(standardPayment - interestForThisMonth + extraPayment, currentBalance);
        currentBalance -= principalForThisMonth;
        totalInterestPaidWithExtra += interestForThisMonth;
        monthsWithExtra++;
        if (monthsWithExtra >= loanTerm) break;
    }

    var effectiveInterestRate = (extraPayment > 0) ? (totalInterestPaidWithExtra / amount) / (monthsWithExtra / 12) * 100 : interestRate;
    var interestSaved = totalInterestWithoutExtra - totalInterestPaidWithExtra;
    var monthsReduced = loanTerm - monthsWithExtra;

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class='result-highlight'>
            <h3>Extra Payment and Effective Interest Rate:</h3>
            <p>Extra Monthly Payment: ${extraPayment.toFixed(2)}</p>
            <p>Effective Interest Rate: ${effectiveInterestRate.toFixed(2)}%</p>
            <p>Interest Saved: ${interestSaved.toFixed(2)}</p>
            <p>Loan will be paid off in ${monthsWithExtra} months, ${monthsReduced} months sooner than the original term.</p>
        </div>
        <!-- ... code for displaying other loan terms ... -->
    `;

    // ... rest of your code for displaying selected term, next term, and previous term ...
}

window.onload = function() {
    var select = document.getElementById('loanTerm');
    var terms = [84, 96, 120, 144, 180, 204, 240];
    terms.forEach(term => {
        var opt = document.createElement('option');
        opt.value = term;
        opt.innerHTML = term + ' months';
        select.appendChild(opt);
    });
};