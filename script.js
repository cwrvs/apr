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

let totalSpins = 0;

// Function to update and display the roll counts
function updateRollCounts(rolledValue) {
    // Increment the count for the rolled value
    rollCounts[rolledValue]++;
    
    // Display the updated counts
    for (let i = 1; i <= 12; i++) {
        const rollCountElement = document.getElementById(`rollCount${i}`);
        if (rollCountElement) {
            rollCountElement.textContent = rollCounts[i];
        }
    }
}

// Function to add a result to the roll history
function addToRollHistory(rolledValue) {
    totalSpins++;
    const historyList = document.getElementById('historyList');
    const li = document.createElement('li');
    li.textContent = `Spin ${totalSpins}: ${rolledValue}`;
    historyList.appendChild(li);
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

    // Update and display the roll counts
    updateRollCounts(rolledValue);

    // Add the result to the roll history
    addToRollHistory(rolledValue);

    return rolledValue;
}

// Attach a click event listener to the button.
document.getElementById('rollButton').addEventListener('click', function() {
    const rolledValue = rollDice();
    setTimeout(() => {
        document.getElementById('result').textContent = `You rolled a ${rolledValue}`;
    }, 1000); // Adjust the delay to match the animation duration
});
