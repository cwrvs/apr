function generateRandomNumbers() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const count = Math.min(parseInt(document.getElementById('count').value), max - min + 1);
    let numbers = [];
    
    while (numbers.length < count) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    document.getElementById('number-result').innerText = "Random Numbers: " + numbers.join(', ');
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