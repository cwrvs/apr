document.addEventListener('DOMContentLoaded', function() {
    // Number Generator
    const generateNumberButton = document.getElementById('generate-number');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const randomNumberDisplay = document.getElementById('random-number');
    const allChosenMessage = document.getElementById('all-chosen');
    const resetNumberGeneratorButton = document.getElementById('reset-number-generator');

    let generatedNumbers = [];

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

    // Function to shuffle an array
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

    // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Number Generator Event Handlers
    generateNumberButton.addEventListener('click', function() {
        // your existing code for generating numbers here
    });

    resetNumberGeneratorButton.addEventListener('click', function() {
        // your existing code for resetting the number generator here
    });

    // Name Generator Event Handlers
    selectNameOneByOneButton.addEventListener('click', function() {
        // your existing code for selecting one name at a time here
    });

    selectNamesAllButton.addEventListener('click', function() {
        // your existing code for selecting all names at once here
    });

    printResultsButton.addEventListener('click', function() {
        // your existing code for printing results here
    });

    resetNameGeneratorButton.addEventListener('click', function() {
        // your existing code for resetting the name generator here
    });

    // Event Listener for input changes in the name list
    nameListInput.addEventListener('input', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = [];
        selectedNamesList.innerHTML = '';
        allChosenNamesMessage.classList.add('hidden');
    });

    // Event Listener to add a comma and space on pressing spacebar
    nameListInput.addEventListener('keyup', function(event) {
        if (event.keyCode === 32) {
            let currentValue = nameListInput.value;
            nameListInput.value = `${currentValue.trim()}, `;
        }
    });
});
