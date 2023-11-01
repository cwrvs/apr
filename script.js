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
        // ... (unchanged code)
    });

    resetNumberGeneratorButton.addEventListener('click', function() {
        // ... (unchanged code)
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
    let usedNames = []; // new array to keep track of used names

    selectNameOneByOneButton.addEventListener('click', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());

        if (availableNames.length < 2) {
            alert('Please enter at least two names.');
            return;
        }

        if (usedNames.length === availableNames.length) {
            allChosenNamesMessage.classList.remove('hidden');
            return;
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * availableNames.length);
        } while (usedNames.includes(randomIndex));

        usedNames.push(randomIndex); // store the used index
        const selectedName = availableNames[randomIndex];
        selectedNamesList.innerHTML += `<li>${selectedName}</li>`;
        selectedNameDisplay.textContent = `Selected Name: ${selectedName}`;
    });

    // ... (unchanged code for other buttons and events)
});