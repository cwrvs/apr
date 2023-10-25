document.addEventListener('DOMContentLoaded', function() {
    const makeDecisionButton = document.getElementById('make-decision');
    const decisionListInput = document.getElementById('decision-list');
    const nonRepeatingNamesList = document.getElementById('non-repeating-names');
    const numberedList = document.getElementById('numbered-list');

    makeDecisionButton.addEventListener('click', function() {
        const optionList = decisionListInput.value.split(',').map(item => item.trim());
        
        if (optionList.length < 2) {
            alert('Please enter at least two options.');
            return;
        }

        // Shuffle the optionList to randomize names
        shuffleArray(optionList);

        // Display non-repeating names on the left
        displayNonRepeatingNames(optionList);

        // Display numbered list on the right
        displayNumberedList(optionList);
    });

    // Shuffle an array to randomize elements
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Display non-repeating names
    function displayNonRepeatingNames(names) {
        nonRepeatingNamesList.innerHTML = '';
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            nonRepeatingNamesList.appendChild(li);
        });
    }

    // Display numbered list
    function displayNumberedList(names) {
        numberedList.innerHTML = '';
        names.forEach((name, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${name}`;
            numberedList.appendChild(li);
        });
    }
});
