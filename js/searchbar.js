function filterResults() {
  const input = document.getElementById('search-bar').value.toLowerCase();
  const items = document.querySelectorAll('#results-list li');

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(input)) {
      item.classList.add('active'); // Show matched items
    } else {
      item.classList.remove('active'); // Hide non-matching items
    }
  });
}

// script.js
const suggestions = [
  "Lion",
  "Tiger",
  "Elephant",
  "Bird",
  "Cow",
  "Penguin",
  "Buffalo",
  "Dog",
  "Cat",
  "Horse"
];

function playAnimalSound() {
  const input = document.getElementById("search-bar").value.toLowerCase();
  const elephantsound = document.getElementById("elephant");
  const tigersound = document.getElementById("tiger");
  const catsound = document.getElementById("cat");
  const penguinsound = document.getElementById("penguin");
  const birdsound = document.getElementById("bird");
  const buffalosound = document.getElementById("buffalo");
  const lionsound = document.getElementById("lion");
  const dogsound = document.getElementById("dog");
  const cowsound = document.getElementById("cow");
  const horsesound = document.getElementById("horse");
  const searchBar = document.getElementById('search-bar');

  // Stop all sounds
  [elephantsound, tigersound, catsound, penguinsound, birdsound, buffalosound, lionsound, dogsound,cowsound,horsesound].forEach(sound => {
      sound.pause();
      sound.currentTime = 0;
  });

  // Play sounds based on input
  if (input.includes("elephant")) {
      elephantsound.play();
  } else if (input.includes("tiger")) {
      tigersound.play();
  } else if (input.includes("cat")) {
      catsound.play();
  } else if (input.includes("penguin")) {
      penguinsound.play();
  } else if (input.includes("bird")) {
      birdsound.play();
  } else if (input.includes("buffalo")) {
      buffalosound.play();
  } else if (input.includes("lion")) {
      lionsound.play();
  } else if (input.includes("dog")) {
      dogsound.play();
  }
   else if (input.includes("cow")) {
      cowsound.play();
  }
   else if (input.includes("horse")) {
      horsesound.play();
  }

  searchBar.classList.add('disturbing');
  clearTimeout(window.typingTimeout);
  window.typingTimeout = setTimeout(function() {
      searchBar.classList.remove('disturbing');
  }, 1000);
}

function showSuggestions() {
  const input = document.getElementById('search-bar');
  const suggestionsContainer = document.getElementById('suggestions');
  const inputValue = input.value.toLowerCase();

  suggestionsContainer.innerHTML = '';

  const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(inputValue)
  );

  if (inputValue && filteredSuggestions.length > 0) {
      filteredSuggestions.forEach(suggestion => {
          const suggestionItem = document.createElement('div');
          suggestionItem.classList.add('suggestion-item');
          suggestionItem.textContent = suggestion;

          
          suggestionItem.onclick = function () {
              input.value = suggestion; 
              suggestionsContainer.innerHTML = '';
              suggestionsContainer.style.display = 'none'; 
              playAnimalSound(); 
          };

          suggestionsContainer.appendChild(suggestionItem);
      });

      suggestionsContainer.style.display = 'block'; 
  } else {
      suggestionsContainer.style.display = 'none'; 
  }

  playAnimalSound(); 
}



