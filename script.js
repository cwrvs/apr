// Function to simulate rolling two 6-sided dice and determine the game outcome.
function rollDice() {
    const resultElement = document.getElementById('result');
    const rollValueElement = document.getElementById('rollValue'); // Get the element for displaying the roll value
    const rolledValue1 = Math.floor(Math.random() * 6) + 1;
    const rolledValue2 = Math.floor(Math.random() * 6) + 1;
    const total = rolledValue1 + rolledValue2;

    // Create and append new span elements for each rolled die
    resultElement.innerHTML = ''; // Clear previous results

    const dice1 = document.createElement('span');
    dice1.className = 'number'; // Use 'number' class for styling
    dice1.textContent = rolledValue1;
    resultElement.appendChild(dice1);

    const dice2 = document.createElement('span');
    dice2.className = 'number'; // Use 'number' class for styling
    dice2.textContent = rolledValue2;
    resultElement.appendChild(dice2);

    // Display the roll result
    rollValueElement.textContent = `You rolled: ${total}`;

    // Rest of the game logic...
}

// Attach a click event listener to the button.
document.getElementById('rollButton').addEventListener('click', function() {
    rollDice();
});
