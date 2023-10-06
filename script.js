// Function to simulate rolling a 6-sided die and return the result.
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to roll two dice, update the simulated dice, and display the result.
function rollDice() {
    const die1Element = document.getElementById('die1');
    const die2Element = document.getElementById('die2');

    // Roll two dice
    const roll1 = rollDie();
    const roll2 = rollDie();

    // Update the simulated dice
    updateSimulatedDie(die1Element, roll1);
    updateSimulatedDie(die2Element, roll2);

    // Calculate the total roll
    const totalRoll = roll1 + roll2;

    // Display the result message
    displayResult(totalRoll);
}

// Function to update the simulated die with dots based on the roll.
function updateSimulatedDie(dieElement, roll) {
    // Clear the die
    dieElement.innerHTML = '';

    // Define dot positions for each face of a 6-sided die
    const dotPositions = [
        [],
        [0, 2, 6],
        [0, 2, 6, 8],
        [0, 1, 3, 5, 7],
        [0, 1, 3, 5, 6, 7],
        [0, 1, 2, 4, 5, 6, 7],
    ];

    // Create dots based on the roll
    dotPositions[roll].forEach((position) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dieElement.appendChild(dot);
    });
}

// Function to display the result message
function displayResult(totalRoll) {
    const outcomeMessageElement = document.getElementById('outcomeMessage');
    outcomeMessageElement.textContent = `You rolled a total of ${totalRoll}`;
}

// Attach a click event listener to the button to roll the dice
document.getElementById('rollButton').addEventListener('click', rollDice);
