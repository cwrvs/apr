// Initialize roll counts for each possible total value
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
    const die1Element = document.getElementById('die1');
    const die2Element = document.getElementById('die2');

    // Roll two six-sided dice
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const rolledValue = die1 + die2;

    // Clear existing dots
    die1Element.innerHTML = '';
    die2Element.innerHTML = '';

    // Update and display the dots for die 1
    for (let i = 0; i < die1; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        die1Element.appendChild(dot);
    }

    // Update and display the dots for die 2
    for (let i = 0; i < die2; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        die2Element.appendChild(dot);
    }

    // Update roll counts
    rollCounts[rolledValue]++;

    // Display the updated roll counts for the total value
    updateRollCounts(rolledValue);

    return rolledValue;
}

// Function to update and display the roll counts for the total value
function updateRollCounts(totalValue) {
    const countElement = document.getElementById(`rollCount${totalValue}`);
    countElement.textContent = rollCounts[totalValue];
}

// Attach a click event listener to the button to roll the dice
document.getElementById('rollButton').addEventListener('click', rollDice);
