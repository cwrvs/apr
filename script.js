// Function to simulate rolling a 12-sided die and display the result with animation.
function rollDice() {
    const resultElement = document.getElementById('result');
    const resultNumbers = resultElement.querySelectorAll('.number');

    // Define the probabilities for each number (1/12 chance for each)
    const probabilities = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const totalProbability = probabilities.reduce((sum, probability) => sum + probability, 0);

    // Generate a random number to select the rolled value based on probabilities
    let randomValue = Math.random() * totalProbability;
    let rolledValue = 0;

    // Determine the rolled value based on probabilities
    for (let i = 0; i < probabilities.length; i++) {
        randomValue -= probabilities[i];
        if (randomValue <= 0) {
            rolledValue = i + 1;
            break;
        }
    }

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

    return rolledValue;
}
