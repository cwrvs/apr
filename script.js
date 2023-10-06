// Define an array to represent the faces of a standard 6-sided die.
const diceFaces = [1, 2, 3, 4, 5, 6];

// Function to simulate rolling the dice and display the result.
function rollDice() {
    const randomIndex = Math.floor(Math.random() * diceFaces.length);
    const result = diceFaces[randomIndex];
    return result;
}

// Attach a click event listener to the button.
document.getElementById('rollButton').addEventListener('click', function() {
    const rolledValue = rollDice();
    document.getElementById('result').textContent = `You rolled a ${rolledValue}`;
});