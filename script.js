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
    var month = 0;
    while (currentBalance > 0) {
        var interestForThisMonth = currentBalance * monthlyInterestRate;
        var principalForThisMonth = Math.min(standardPayment - interestForThisMonth + extraPayment, currentBalance);
        currentBalance -= principalForThisMonth;
        totalInterestPaidWithExtra += interestForThisMonth;
        month++;
        if (month >= loanTerm) break;
    }

    var effectiveInterestRate = (extraPayment > 0) ? (totalInterestPaidWithExtra / amount) / (month / 12) * 100 : interestRate;
    var interestSaved = totalInterestWithoutExtra - totalInterestPaidWithExtra;

    var adjacentTerms = [84, 96, 120, 144, 180, 204, 240];
    var currentTermIndex = adjacentTerms.indexOf(loanTerm);
    var nextTerm = adjacentTerms[currentTermIndex + 1] || loanTerm;
    var prevTerm = adjacentTerms[currentTermIndex - 1] || loanTerm;

    var nextTermPayment = calculatePayment(nextTerm);
    var prevTermPayment = calculatePayment(prevTerm);
 
