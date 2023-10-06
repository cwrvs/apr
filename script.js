// Initialize roll counts for each number
const rollCounts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
};

// Function to handle the outcome of a roll
function handleRollOutcome(rolledValue) {
    // Increment the count for the rolled value
    rollCounts[rolledValue]++;

    // Check for craps (2, 3, or 12)
    if (rolledValue === 2 || rolledValue === 3 || rolledValue === 12) {
        return 'craps';
    }

    // Check for natural (7 or 11)
    if (rolledValue === 7 || rolledValue === 11) {
        return 'natural';
    }

    // Establish the point number (4, 5, 6, 8, 9, or 10)
    return 'point';
}

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

    // Determine the outcome of the roll
    const rollOutcome = handleRollOutcome(rolledValue);

    if (rollOutcome === 'craps') {
        setTimeout(() => {
            document.getElementById('result').textContent = 'Craps! You lose.';
        }, 1000); // Adjust the delay to match the animation duration
    } else if (rollOutcome === 'natural') {
        setTimeout(() => {
            document.getElementById('result').textContent = 'Natural! You win.';
        }, 1000); // Adjust the delay to match the animation duration
    } else {
        setTimeout(() => {
            document.getElementById('result').textContent = `Point established: ${rolledValue}`;
        }, 1000); // Adjust the delay to match the animation duration
    }

    return rolledValue;
}

// Attach a click event listener to the button.
document.getElementById('rollButton').addEventListener('click', function() {
    const rolledValue = rollDice();
    // Optionally, you can update and display the roll counts here if needed.
});
