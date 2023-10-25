// script.js
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('number-result').innerText = "Random Number: " + randomNumber;
}

function pickRandomName() {
    const names = document.getElementById('name-list').value.split('\n').filter(name => name.trim() !== '');
    if (names.length === 0) {
        document.getElementById('name-result').innerText = "Please input names.";
        return;
    }
    const randomName = names[Math.floor(Math.random() * names.length)];
    document.getElementById('name-result').innerText = "Selected Name: " + randomName;
}