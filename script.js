// Function to simulate rolling a 12-sided die and display the result with animation.
function rollDice() {
    const resultElement = document.getElementById('result');
    const resultNumbers = resultElement.querySelectorAll('.number');
    const rolledValue = Math.floor(Math.random() * 12) + 1;

    // Remove the existing result content
    resultElement.innerHTML = '';

    // Calculate the translateY value for animation
    const translateY = -(rolledValue - 1) * 40; // Adjust the multiplier for desired spacing

    // Create and append new span elements for each digit
    const digits = rolledValue.toString().split('');
    digits.forEach((digit, index) => {
        const span = document.createElement('span');
        span.className = 'number';
        span.textContent = digit;
        span.style.transform = `translateY(${translateY}px)`;
        span.style.transition = `transform ${(index + 1) * 0.2}s ease-out`; // Adjust the delay for desired animation speed
        resultElement.appendChild(span);

        // Trigger the animation by reading the computed style (force reflow)
        setTimeout(() => {
            span.style.transform = 'translateY(0)';
        }, 10);
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
