// Function to simulate rolling a six-sided die
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice display
function updateDice() {
    const die1 = document.getElementById('die1');
    const die2 = document.getElementById('die2');
    
    const roll1 = rollDie();
    const roll2 = rollDie();
    
    die1.textContent = roll1;
    die2.textContent = roll2;
    
    return roll1 + roll2;
}

// Function to update the total and tally
function updateTotal(total, tally) {
    const totalElement = document.getElementById('total');
    totalElement.textContent = total;

    tally[total] = (tally[total] || 0) + 1;
}

const rollButton = document.getElementById('rollButton');
const tally = {};

rollButton.addEventListener('click', () => {
    const total = updateDice();
    updateTotal(total, tally);
});

// Initial roll
updateDice();
