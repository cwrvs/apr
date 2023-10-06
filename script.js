<<<<<<< HEAD
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
=======
// Initialize an object to store roll counts
const rollCounts = {};

// Function to simulate rolling two 6-sided dice and determine the game outcome.
function rollDice() {
    const resultElement = document.getElementById('result');
    const rollValueElement = document.getElementById('rollValue'); // Get the element for displaying the roll value
    const rolledValue1 = Math.floor(Math.random() * 6) + 1;
    const rolledValue2 = Math.floor(Math.random() * 6) + 1;
    const total = rolledValue1 + rolledValue2;
>>>>>>> 3a26403046b855ef502f423b9eff3c3ec8e930b8

    // Create and append new span elements for each rolled die
    resultElement.innerHTML = ''; // Clear previous results

<<<<<<< HEAD
    // Calculate the translateY value for animation
    const translateY = -(rolledValue - 2) * 40; // Adjust the multiplier for desired spacing
=======
    const dice1 = document.createElement('span');
    dice1.className = 'number'; // Use 'number' class for styling
    dice1.textContent = rolledValue1;
    resultElement.appendChild(dice1);
>>>>>>> 3a26403046b855ef502f423b9eff3c3ec8e930b8

    const dice2 = document.createElement('span');
    dice2.className = 'number'; // Use 'number' class for styling
    dice2.textContent = rolledValue2;
    resultElement.appendChild(dice2);

<<<<<<< HEAD
        // Trigger the animation by reading the computed style (force reflow)
        setTimeout(() => {
            span.style.transform = 'translateY(0)';
        }, 10);
    });

    // Update roll counts
    rollCounts[rolledValue]++;

    // Display the updated roll counts
    updateRollCounts();
=======
    // Update roll counts
    if (rollCounts[total]) {
        rollCounts[total]++;
    } else {
        rollCounts[total] = 1;
    }

    // Display the roll result
    rollValueElement.textContent = `You rolled: ${total}`;
>>>>>>> 3a26403046b855ef502f423b9eff3c3ec8e930b8

    // Display roll counts
    const rollCountsElement = document.getElementById('rollCounts');
    rollCountsElement.textContent = 'Roll Counts: ' + JSON.stringify(rollCounts);

    // Rest of the game logic...
}

<<<<<<< HEAD
// Function to update and display the roll counts
function updateRollCounts() {
    for (const value in rollCounts) {
        const countElement = document.getElementById(`rollCount${value}`);
        countElement.textContent = rollCounts[value];
    }
}

// Attach a click event listener to the button to roll the dice
document.getElementById('rollButton').addEventListener('click', rollDice);
=======
// Attach a click event listener to the button.
document.getElementById('rollButton').addEventListener('click', function() {
    rollDice();
});
>>>>>>> 3a26403046b855ef502f423b9eff3c3ec8e930b8
