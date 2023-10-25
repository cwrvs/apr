// script.js j
function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerText = "Random Number: " + randomNumber;
}