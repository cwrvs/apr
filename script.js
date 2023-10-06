// Initialize game variables
let isPointEstablished = false;
let point = 0;

// Function to simulate rolling two 6-sided dice and determine the game outcome.
function rollDice() {
    const resultElement = document.getElementById('result');
    const rolledValue1 = Math.floor(Math.random() * 6) + 1;
    const rolledValue2 = Math.floor(Math.random() * 6) + 1;
    const total = rolledValue1 + rolledValue2;

    // Create and append new span elements for each rolled die
    resultElement.innerHTML = ''; // Clear previous results

    const dice1 = document.createElement('span');
    dice1.className = 'die';
    dice1.textContent = rolledValue1;
    resultElement.appendChild(dice1);

    const dice2 = document.createElement('span');
    dice2.className = 'die';
    dice2.textContent = rolledValue2;
    resultElement.appendChild(dice2);

    // Check the game outcome based on the rules
    if (!isPointEstablished) {
        if (total === 7 || total === 11) {
            resultElement.textContent = 'Winner! Natural!';
        } else if (total === 2 || total === 3 || total === 12) {
            resultElement.textContent = 'Loser! Craps!';
        } else {
            isPointEstablished = true;
            point = total;
            resultElement.textContent = `Point is ${point}. Keep rolling!`;
        }
    } else {
        if (total === 7) {
            resultElement.textContent = 'Loser! Point lost.';
            isPointEstablished = false;
        } else if (total === point) {
            resultElement.textContent = 'Winner! Point matched!';
            isPointEstablished = false;
        } else {
            resultElement.textContent = `Roll again for point ${point}.`;
        }
    }
}

// Attach a click event listener to the button.
document.getElementById('rollButton').addEventListener('click', function() {
    rollDice();
});