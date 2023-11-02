document.addEventListener("DOMContentLoaded", function () {
  // Random Number Generator
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  const generateNumberBtn = document.getElementById("generate-number");
  const randomNumberOutput = document.getElementById("random-number");
  const allChosenOutput = document.getElementById("all-chosen");
  const resetNumberGeneratorBtn = document.getElementById("reset-number-generator");

  generateNumberBtn.addEventListener("click", function () {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (!isNaN(min) && !isNaN(max)) {
      const randomNum = getRandomNumber(min, max);
      randomNumberOutput.textContent = `Random Number: ${randomNum}`;
    }
  });

  resetNumberGeneratorBtn.addEventListener("click", function () {
    minInput.value = "";
    maxInput.value = "";
    randomNumberOutput.textContent = "";
    allChosenOutput.classList.add("hidden");
  });

  // Random Name Selector
  const nameListInput = document.getElementById("name-list");
  const selectNameBtn = document.getElementById("select-name");
  const selectNamesAllBtn = document.getElementById("select-names-all");
  const printResultsBtn = document.getElementById("print-results");
  const selectedNameOutput = document.getElementById("selected-name");
  const selectedNamesList = document.getElementById("selected-names-list");
  const allChosenNamesOutput = document.getElementById("all-chosen-names");
  const resetNameGeneratorBtn = document.getElementById("reset-name-generator");
  const nameFileInput = document.getElementById("name-file");

  selectNameBtn.addEventListener("click", function () {
    const names = parseNames(nameListInput.value);

    if (names.length > 0) {
      const randomIndex = getRandomNumber(0, names.length - 1);
      const selectedName = names[randomIndex];
      selectedNameOutput.textContent = `Selected Name: ${selectedName}`;
      names.splice(randomIndex, 1); // Remove the selected name
      if (names.length === 0) {
        allChosenNamesOutput.classList.remove("hidden");
      }
    }
  });

  selectNamesAllBtn.addEventListener("click", function () {
    const names = parseNames(nameListInput.value);
    selectedNamesList.innerHTML = ""; // Clear previous results

    if (names.length > 0) {
      shuffleArray(names); // Shuffle the array of names
      names.forEach((name) => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        selectedNamesList.appendChild(listItem);
      });
      allChosenNamesOutput.classList.remove("hidden");
    }
  });

  printResultsBtn.addEventListener("click", function () {
    window.print();
  });

  resetNameGeneratorBtn.addEventListener("click", function () {
    nameListInput.value = "";
    selectedNameOutput.textContent = "";
    selectedNamesList.innerHTML = "";
    allChosenNamesOutput.classList.add("hidden");
  });

  // Handle file upload
  nameFileInput.addEventListener("change", function () {
    const file = nameFileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        nameListInput.value = e.target.result;
      };
      reader.readAsText(file);
    }
  });

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  function parseNames(input) {
    const names = input
      .split(/\n|,|, /) // Split by newline, comma, or comma + space
      .map((name) => name.trim())
      .filter((name) => name !== "");
    return names;
  }
});
