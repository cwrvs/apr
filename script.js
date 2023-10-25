document.addEventListener('DOMContentLoaded', function() {
    // Random Number Generator
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

    // List Selector
    const selectItemButton = document.getElementById('select-item');
    const itemListInput = document.getElementById('item-list');
    const selectedItemDisplay = document.getElementById('selected-item');

    selectItemButton.addEventListener('click', function() {
        const itemList = itemListInput.value.split(',').map(item => item.trim());
        
        if (itemList.length < 2) {
            alert('Please enter at least two items in the list.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * itemList.length);
        const selectedItem = itemList[randomIndex];
        selectedItemDisplay.textContent = `Selected Item: ${selectedItem}`;
    });
});
