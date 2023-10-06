// Function to simulate rolling a 12-sided die and display the result with animation.
function rollDice() {
    const resultElement = document.getElementById('result');
    const resultNumbers = resultElement.querySelectorAll('.number');
    const rolledValue = Math.floor(Math.random() * 12) + 1;

    // Calculate the translateY value for animation
    const translateY = -(rolledValue - 1) * 40; // Adjust the multiplier for desired spacing

    // Animate the numbers
    resultNumbers.forEach((number, index) => {
        const animationDelay = index * 100; // Adjust the delay for desired animation speed
        setTimeout(() => {
            number.style.transform = `translateY(${translateY}px)`;
        }, animationDelay);
    });

    return rolledValue;
}

// Attach a click event listener to the button.
document.getElementById('rollButton').addEventListener('click', function() {
    const rolledValue = rollDice();
    setTimeout(() => {
        document.getElementById('result').textContent = `You rolled a ${rolledValue}`;
    }, 1000); // Adjust the delay to match the animation duration
});
