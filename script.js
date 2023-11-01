// JavaScript code
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

        // ... (Your previous code remains unchanged)
    });

    resetNumberGeneratorButton.addEventListener('click', function() {
        // ... (Your previous code remains unchanged)
    });

    // Name Generator
    const selectNameOneByOneButton = document.getElementById('select-name');
    const selectNamesAllButton = document.getElementById('select-names-all');
    const printResultsButton = document.getElementById('print-results');
    const nameListInput = document.getElementById('name-list');
    const selectedNameDisplay = document.getElementById('selected-name');
    const selectedNamesList = document.getElementById('selected-names-list');
    const allChosenNamesMessage = document.getElementById('all-chosen-names');
    const resetNameGeneratorButton = document.getElementById('reset-name-generator');

    let availableNames = [];
    let selectedNames = [];

    selectNameOneByOneButton.addEventListener('click', function() {
        // ... (Your previous code remains unchanged)
    });

    selectNamesAllButton.addEventListener('click', function() {
        // ... (Your previous code remains unchanged)
    });

    printResultsButton.addEventListener('click', function() {
        // ... (Your previous code remains unchanged)
    });

    resetNameGeneratorButton.addEventListener('click', function() {
        // ... (Your previous code remains unchanged)
    });

    // Existing nameListInput Event Listener
    nameListInput.addEventListener('input', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = [];
        selectedNamesList.innerHTML = '';
        allChosenNamesMessage.classList.add('hidden');
    });

    // New Event Listener to add a comma and space on pressing spacebar
    nameListInput.addEventListener('keyup', function(event) {
        if (event.keyCode === 32) {  
            let currentValue = nameListInput.value;
            nameListInput.value = `${currentValue.trim()}, `;
        }
    });

    // Function to shuffle an array randomly (no changes)
    function shuffle(array) {
        let currentIndex = array.length, randomIndex, temporaryValue;
        while (currentIndex !== 0) {
            // ... (Your previous code remains unchanged)
        }
        return array;
    }

    // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
