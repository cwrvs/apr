// Function to simulate rolling a 12-sided die and display the result with animation.
function rollDice() {
    const resultElement = document.getElementById('result');
    const rolledValue = Math.floor(Math.random() * 12) + 1;

    // Remove the existing result content and classes
    resultElement.innerHTML = '';

    // Create and append new span elements for each digit
    const digits = rolledValue.toString().split('');
    digits.forEach((digit) => {
        const span = document.createElement('span');
        span.className = 'number';
        span.textContent = digit;
        resultElement.appendChild(span);
    });

    return rolledValue;
}

// Attach a click event listener to the button.
document.getElementById('rollButton').addEventListener('click', function() {
    const rolledValue = rollDice();
    setTimeout(() => {
        document.getElementById('result').textContent = `You rolled a ${rolledValue}`;
    }, 1000); // Adjust the delay to match the animation duration
});
