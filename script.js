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
            alert('Please enter valid numbers.');
            return;
        }
        
        if (min >= max) {
            alert('Minimum must be less than maximum.');
            return;
        }

        if (generatedNumbers.length === (max - min + 1)) {
            allChosenMessage.classList.remove('hidden');
            randomNumberDisplay.textContent = '';
        } else {
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (generatedNumbers.includes(randomNumber));
            
            generatedNumbers.push(randomNumber);
            randomNumberDisplay.textContent = `Random Number: ${randomNumber}`;
            allChosenMessage.classList.add('hidden');
        }
    });

    resetNumberGeneratorButton.addEventListener('click', function() {
        generatedNumbers = [];
        allChosenMessage.classList.add('hidden');
        randomNumberDisplay.textContent = '';
        minInput.value = '';
        maxInput.value = '';
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
        if (availableNames.length < 2) {
            alert('Please enter at least two names.');
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
        if (availableNames.length < 2) {
            alert('Please enter at least two names.');
            return;
        }

        selectedNames = [...availableNames];
        selectedNamesList.innerHTML = selectedNames.map(name => `<li>${name}</li>`).join('');
        allChosenNamesMessage.classList.remove('hidden');
        selectedNameDisplay.textContent = '';
    });

    printResultsButton.addEventListener('click', function() {
        const resultText = `Selected Names:\n\n${selectedNames.join('\n')}`;
        const printWindow = window.open('', '', 'width=600,height=600');
        printWindow.document.open();
        printWindow.document.write(`<pre>${resultText}</pre>`);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    });

    resetNameGeneratorButton.addEventListener('click', function() {
        availableNames = [];
        selectedNames = [];
        allChosenNamesMessage.classList.add('hidden');
        selectedNameDisplay.textContent = '';
        selectedNamesList.innerHTML = '';
        nameListInput.value = '';
    });

    nameListInput.addEventListener('keypress', function(event) {
        const lastChar = nameListInput.value.slice(-1);
        if (event.key === ' ' && lastChar !== ' ' && lastChar !== ',') {
            event.preventDefault();
            nameListInput.value += ', ';
        }
    });

    nameListInput.addEventListener('input', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = [];
        selectedNamesList.innerHTML = '';
        allChosenNamesMessage.classList.add('hidden');
    });
});