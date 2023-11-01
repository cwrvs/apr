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
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);
        if (isNaN(min) || isNaN(max)) {
            alert('Please enter valid numbers.');
            return;
        }
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (generatedNumbers.includes(randomNumber));
        generatedNumbers.push(randomNumber);
        randomNumberDisplay.textContent = `Random Number: ${randomNumber}`;
    });

    resetNumberGeneratorButton.addEventListener('click', function() {
        generatedNumbers = [];
        randomNumberDisplay.textContent = '';
    });

    // Name Generator Event Handlers
    selectNameOneByOneButton.addEventListener('click', function() {
        if (availableNames.length < 2) {
            alert('Please enter at least two names.');
            return;
        }
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * availableNames.length);
        } while (selectedNames.includes(availableNames[randomIndex]));
        const selectedName = availableNames[randomIndex];
        selectedNames.push(selectedName);
        selectedNamesList.innerHTML += `<li>${capitalizeFirstLetter(selectedName)}</li>`;
        selectedNameDisplay.textContent = `Selected Name: ${selectedName}`;
    });

    selectNamesAllButton.addEventListener('click', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = shuffle([...availableNames]);
        selectedNamesList.innerHTML = selectedNames.map(name => `<li>${capitalizeFirstLetter(name)}</li>`).join('');
    });

    printResultsButton.addEventListener('click', function() {
        const printWindow = window.open('', '', 'width=600,height=600');
        printWindow.document.open();
        printWindow.document.write(`<pre>Selected Names:\n${selectedNames.join('\n')}</pre>`);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    });

    resetNameGeneratorButton.addEventListener('click', function() {
        availableNames = [];
        selectedNames = [];
        selectedNamesList.innerHTML = '';
        selectedNameDisplay.textContent = '';
    });

    // Event Listener for input changes in the name list
    nameListInput.addEventListener('input', function() {
        availableNames = nameListInput.value.split(',').map(name => name.trim());
        selectedNames = [];
        selectedNamesList.innerHTML = '';
    });

    // Event Listener to add a comma and space on pressing spacebar
    nameListInput.addEventListener('keyup', function(event) {
        if (event.keyCode === 32) {
            let currentValue = nameListInput.value;
            nameListInput.value = `${currentValue.trim()}, `;
        }
    });
});