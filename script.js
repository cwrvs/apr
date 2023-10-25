document.addEventListener('DOMContentLoaded', function() {
    // Number Generator
    const generateNumberButton = document.getElementById('generate-number');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const randomNumberDisplay = document.getElementById('random-number');
    const allChosenMessage = document.getElementById('all-chosen');
    const resetNumberGeneratorButton = document.getElementById('reset-number-generator');
    
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

    resetNumberGeneratorButton.addEventListener('click', function() {
        generatedNumbers = [];
        allChosenMessage.classList.add('hidden');
        randomNumberDisplay.textContent = '';
    });

    // Name Generator
    const selectNameOneByOneButton = document.getElementById('select-name');
    const selectNamesAllButton = document.getElementById('select-names-all');
    const nameListInput = document.getElementById('name-list');
    const selectedNameDisplay = document.getElementById('selected-name');
    const selectedNamesList = document.getElementById('selected-names-list');
    const allChosenNamesMessage = document.getElementById('all-chosen-names');
    const resetNameGeneratorButton = document.getElementById('reset-name-generator');
    
    let availableNames = [];
    let selectedNames = [];

    selectNameOneByOneButton.addEventListener('click', function() {
        if (availableNames.length < 2) {
            alert('Please enter at least two names in the list.');
            return;
        }

        if (selectedNames.length === availableNames.length) {
            alert('All names have been chosen.');
            return;
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * availableNames.length);
        } while (selectedNames.includes(availableNames[randomIndex]));

        const selectedName = availableNames[randomIndex];
        selectedNames.push(selectedName);
        selectedNamesList.innerHTML += `<li>${selectedName}</li>`;
        selectedNameDisplay.textContent = `Selected Name: ${selectedName}`;

        if (selectedNames.length === availableNames.length) {
            allChosenNamesMessage.classList.remove('hidden');
        }
    });

    selectNamesAllButton.addEventListener('click', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = shuffle([...availableNames]); // Shuffle the names to make it random

        if (availableNames.length < 2) {
            alert('Please enter at least two names in the list.');
            return;
        }

        selectedNamesList.innerHTML = selectedNames.map(name => `<li>${name}</li>`).join('');
        allChosenNamesMessage.classList.remove('hidden');
        selectedNameDisplay.textContent = '';
    });

    resetNameGeneratorButton.addEventListener('click', function() {
        availableNames = [];
        selectedNames = [];
        allChosenNamesMessage.classList.add('hidden');
        selectedNameDisplay.textContent = '';
        selectedNamesList.innerHTML = '';
    });

    nameListInput.addEventListener('input', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = [];
        selectedNamesList.innerHTML = '';
        allChosenNamesMessage.classList.add('hidden');
    });

    // Function to shuffle an array randomly
    function shuffle(array) {
        let currentIndex = array.length, randomIndex, temporaryValue;
      
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }
});
