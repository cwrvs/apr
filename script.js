// JavaScript code
let canSelectAll = true; // Initially, allow selecting all names
let cooldownTimer; // Store the cooldown timer

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
        if (generatedNumbers.length === (max - min + 1)) {
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
            allChosenMessage.classList.add('hidden'); // Hide the "All numbers have been chosen" message
        }
    });

    resetNumberGeneratorButton.addEventListener('click', function() {
        generatedNumbers = [];
        allChosenMessage.classList.add('hidden');
        randomNumberDisplay.textContent = '';
        minInput.value = ''; // Clear the minimum input
        maxInput.value = ''; // Clear the maximum input
    });

    // Name Generator
    const selectNameOneByOneButton = document.getElementById('select-name');
    const selectNamesAllButton = document.getElementById('select-names-all');
    const nameListInput = document.getElementById('name-list');
    const selectedNameDisplay = document.getElementById('selected-name');
    const selectedNamesList = document.getElementById('selected-names-list');
    const allChosenNamesMessage = document.getElementById('all-chosen-names');
    const resetNameGeneratorButton = document.getElementById('reset-name-generator');
    const printResultsButton = document.getElementById('print-results'); // New "Print Results" button

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
        if (canSelectAll) {
            const namesInput = nameListInput.value.trim();
            if (namesInput === '') {
                alert('Please enter names in the list before selecting all names.');
                return;
            }

            availableNames = namesInput.split(',').map(name => name.trim());
            if (availableNames.length < 2) {
                alert('Please enter at least two names in the list.');
                return;
            }

            selectedNames = shuffle([...availableNames]);
            selectedNamesList.innerHTML = selectedNames.map(name => `<li>${name}</li>`).join('');
            allChosenNamesMessage.classList.remove('hidden');
            selectedNameDisplay.textContent = '';

            // Disable the button temporarily
            canSelectAll = false;
            selectNamesAllButton.disabled = true;

            // Set a cooldown timer (e.g., 60 seconds)
            cooldownTimer = setTimeout(function() {
                // Re-enable the button after the cooldown period
                canSelectAll = true;
                selectNamesAllButton.disabled = false;
                alert("You can now select all names again.");
            }, 60000); // 60,000 milliseconds = 60 seconds
        } else {
            // Display an error message to the user
            alert("Please wait before selecting all names again.");
        }
    });

    printResultsButton.addEventListener('click', function() {
        // Trigger the browser's print dialog
        window.print();
    });

    resetNameGeneratorButton.addEventListener('click', function() {
        availableNames = [];
        selectedNames = [];
        allChosenNamesMessage.classList.add('hidden'); // Hide the "All names have been chosen" message
        selectedNameDisplay.textContent = '';
        selectedNamesList.innerHTML = '';
        nameListInput.value = ''; // Clear the name list input
    });

    nameListInput.addEventListener('input', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = [];
        selectedNamesList.innerHTML = '';
        allChosenNamesMessage.classList.add('hidden');
    });

    // Function to shuffle an array randomly (no changes)
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
