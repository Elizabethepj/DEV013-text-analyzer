import analyzer from './analyzer.js';

document.addEventListener('DOMContentLoaded', function () {
  const userInput = document.querySelector('textarea[name="user-input"]');
  const resetButton = document.getElementById('resetButton');

  function WordCount() {
    const text = userInput.value;
    document.querySelector('[data-testid="word-count"]').textContent = 'Recuento de palabras: ' + analyzer.getWordCount(text);
  }

  function CharCount() {
    const text = userInput.value;
    document.querySelector('[data-testid="character-count"]').textContent = 'Recuento de caracteres: ' + analyzer.getCharacterCount(text);
  }

  function CharNoSpaceCount() {
    const text = userInput.value;
    document.querySelector('[data-testid="character-no-spaces-count"]').textContent = 'Recuento de caracteres (sin espacios y signos): ' + analyzer.getCharacterCountExcludingSpaces(text);
  }

  function NumberCount() {
    const text = userInput.value;
    document.querySelector('[data-testid="number-count"]').textContent = 'Recuento de números: ' + analyzer.getNumberCount(text);
  }

  function NumberSum() {
    const text = userInput.value;
    document.querySelector('[data-testid="number-sum"]').textContent = 'Suma total de números: ' + analyzer.getNumberSum(text);
  }

  function WordLengthAverage() {
    const text = userInput.value;
    document.querySelector('[data-testid="word-length-average"]').textContent = 'Longitud media de las palabras: ' + analyzer.getAverageWordLength(text);
  }

  userInput.addEventListener('input', WordCount);
  userInput.addEventListener('input', CharCount);
  userInput.addEventListener('input', CharNoSpaceCount);
  userInput.addEventListener('input', NumberCount);
  userInput.addEventListener('input', NumberSum);
  userInput.addEventListener('input', WordLengthAverage);

  resetButton.addEventListener('click', function () {
    userInput.value = '';
    WordCount();
    CharCount();
    CharNoSpaceCount();
    NumberCount();
    NumberSum();
    WordLengthAverage();
  });
});