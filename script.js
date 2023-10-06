// Function to simulate rolling a 12-sided die and display the result.
function rollDice() {
    const result = Math.floor(Math.random() * 12) + 1; // Generates a random number from 1 to 12
    return result;
}

// Attach a click event listener to the button.
document.getElementById('rollButton').addEventListener('click', function() {
    const rolledValue = rollDice();
    const resultElement = document.getElementById('result');
    
    if (rolledValue === 7 || rolledValue === 11) {
        resultElement.textContent = `Unlucky craps! You rolled a ${rolledValue}`;
    } else {
        resultElement.textContent = `You rolled a ${rolledValue}`;
    }
});
