// Initialize roll counts for each number
const rollCounts = {
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

// Function to simulate rolling a pair of dice and display the result with animation.
function rollDice() {
    const resultElement = document.getElementById('result');
    const resultNumbers = resultElement.querySelectorAll('.number');

    // Roll two six-sided dice
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const rolledValue = die1 + die2;

    // Remove the existing result content
    resultElement.innerHTML = '';

    // Calculate the translateY value for animation
    const translateY = -(rolledValue - 2) * 40; // Adjust the multiplier for desired spacing

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

// Function to determine the outcome of a roll based on craps rules
function determineRollOutcome(rolledValue) {
    if (rolledValue === 2 || rolledValue === 3 || rolledValue === 12) {
        return 'craps';
    } else if (rolledValue === 7 || rolledValue === 11) {
        return 'natural';
    } else {
        return 'point';
    }
}

// Function to display the outcome message
function displayOutcomeMessage(outcome) {
    const messageElement = document.getElementById('outcomeMessage');
    if (outcome === 'craps') {
        messageElement.textContent = 'Craps! You lose.';
    } else if (outcome === 'natural') {
        messageElement.textContent = 'Natural! You win.';
    } else {
        messageElement.textContent = `Point established: ${rolledValue}`;
    }
}

// Function to simulate a craps game
function playCraps() {
    const rolledValue = rollDice();
    const rollOutcome = determineRollOutcome(rolledValue);

    // Update and display the roll counts
    rollCounts[rolledValue]++;

    // Display the outcome message
    displayOutcomeMessage(rollOutcome);
}

// Attach a click event listener to the button to play the craps game
document.getElementById('rollButton').addEventListener('click', playCraps);
