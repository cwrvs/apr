document.addEventListener('DOMContentLoaded', function() {
    // Number Generator
    const generateNumberButton = document.getElementById('generate-number');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const randomNumberDisplay = document.getElementById('random-number');

    generateNumberButton.addEventListener('click', function() {
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);
        
        if (isNaN(min) || isNaN(max)) {
            alert('Please enter valid numbers for both minimum and maximum values.');
            return;
        }

        if (min >= max) {
            alert('Minimum value must be less than the maximum value.');
            return;
        }

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumberDisplay.textContent = `Random Number: ${randomNumber}`;
    });

    // Name Generator
    const selectNameButton = document.getElementById('select-name');
    const nameListInput = document.getElementById('name-list');
    const selectedNameDisplay = document.getElementById('selected-name');
    const selectedNamesList = document.getElementById('selected-names-list');
    
    let availableNames = [];

    selectNameButton.addEventListener('click', function() {
        const nameList = nameListInput.value.split(',').map(name => name.trim());
        
        if (nameList.length < 2) {
            alert('Please enter at least two names in the list.');
            return;
        }

        if (availableNames.length === 0) {
            alert('All names have been chosen.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableNames.length);
        const selectedName = availableNames.splice(randomIndex, 1)[0];
        selectedNamesList.innerHTML += `<li>${selectedName}</li>`;
        selectedNameDisplay.textContent = `Selected Name: ${selectedName}`;
    });

    nameListInput.addEventListener('input', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNamesList.innerHTML = '';
    });
});
