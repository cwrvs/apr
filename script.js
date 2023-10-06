// Initialize an object to store roll counts
const rollCounts = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
};

// Function to simulate rolling a 12-sided die and update counts.
function rollDice() {
    const resultElement = document.getElementById('result');
    const rolledValue = Math.floor(Math.random() * 12) + 1;

    // Create and append new span elements for each digit of the rolled value
    resultElement.innerHTML = ''; // Clear previous results
    const digits = rolledValue.toString().split('');
    digits.forEach((digit, index) => {
        const span = document.createElement('span');
        span.className = 'number';
        span.textContent = digit;
        resultElement.appendChild(span);

        // Trigger the animation by reading the computed style (force reflow)
        setTimeout(() => {
            span.classList.add('animate');
        }, 10);
    });

    // Update roll count
    rollCounts[rolledValue] += 1;
    updateRollCounts();
    
    return rolledValue;
}

// Function to update the roll counts in the table
function updateRollCounts() {
    for (let i = 2; i <= 7; i++) {
        const countElement = document.getElementById(`rollCount${i}`);
        countElement.textContent = rollCounts[i];
    }
}

// Attach a click event listener to the button.
document.getElementById('rollButton').addEventListener('click', function() {
    rollDice();
});