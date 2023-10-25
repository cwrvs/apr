document.addEventListener('DOMContentLoaded', function() {
    // Number Generator
    const generateNumberButton = document.getElementById('generate-number');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const randomNumberDisplay = document.getElementById('random-number');
    const allChosenMessage = document.getElementById('all-chosen');
    
    let generatedNumbers = [];

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

        // Check if all numbers have been chosen
        if (generatedNumbers.length === max - min + 1) {
            allChosenMessage.classList.remove('hidden');
            randomNumberDisplay.textContent = '';
        } else {
            // Generate unique random number
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (generatedNumbers.includes(randomNumber));
            
            generatedNumbers.push(randomNumber);
            randomNumberDisplay.textContent = `Random Number: ${randomNumber}`;
        }
    });

    // Name Generator
    const selectNameOneByOneButton = document.getElementById('select-name');
    const selectNamesAllButton = document.getElementById('select-names-all');
    const nameListInput = document.getElementById('name-list');
    const selectedNameDisplay = document.getElementById('selected-name');
    const selectedNamesList = document.getElementById('selected-names-list');
    const allChosenNamesMessage = document.getElementById('all-chosen-names');
    
    let availableNames = [];
    let selectedNames = [];

    selectNameOneByOneButton.addEventListener('click', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = [];

        if (availableNames.length < 2) {
            alert('Please enter at least two names in the list.');
            return;
        }

        if (availableNames.length === selectedNames.length) {
            alert('All names have been chosen.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableNames.length);
        const selectedName = availableNames.splice(randomIndex, 1)[0];
        selectedNames.push(selectedName);

        selectedNamesList.innerHTML += `<li>${selectedName}</li>`;
        selectedNameDisplay.textContent = `Selected Name: ${selectedName}`;
    });

    selectNamesAllButton.addEventListener('click', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = [...availableNames];

        if (availableNames.length < 2) {
            alert('Please enter at least two names in the list.');
            return;
        }

        selectedNamesList.innerHTML = selectedNames.map(name => `<li>${name}</li>`).join('');
        allChosenNamesMessage.classList.remove('hidden');
        selectedNameDisplay.textContent = '';
    });

    nameListInput.addEventListener('input', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = [];
        selectedNamesList.innerHTML = '';
        allChosenNamesMessage.classList.add('hidden');
    });
});
