import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`
//Espera a que el DOM esté completamente cargado antes de ejecutar el código JavaScript, asegurando que todos los elementos del documento estén disponibles para ser manipulados.
document.addEventListener('DOMContentLoaded',
  function() {
    const userInput = document.querySelector('textarea[name="user-input"]');
    const resetButton = document.getElementById('resetButton');
    const resultElements = {
      wordCount: document.querySelector ('[data-testid="word-count"]'),
      charCount: document.querySelector ('[data-testid="character-count"]'),
      charNoSpaceCount: document.querySelector ('[data-testid = "character-no-spaces-count"] '),
      numberCount: document.querySelector ('[data-testid= "number-count"]'),
      numberSum: document.querySelector ('[data-testid="number-sum"]'),
      wordLengthAverage: document.querySelector ('[data-testid="word-length-average"]'),
    };

    function calcularMetricas(){
      const text = userInput.value;
      resultElements.wordCount.textContent = 'Recuento de palabras: ' + analyzer.getWordCount(text);
      resultElements.charCount.textContent = 'Recuento de caracteres: ' + analyzer.getCharacterCount(text);
      resultElements.charNoSpaceCount.textContent = 'Recuento de caracteres (sin espacios y signos): ' + analyzer.getCharacterCountExcludingSpaces(text);
      resultElements.numberCount.textContent = 'Recuento de números: ' + analyzer.getNumberCount(text);
      resultElements.numberSum.textContent = 'Suma total de números: ' + analyzer.getNumberSum(text);
      resultElements.wordLengthAverage.textContent = 'Longitud media de las palabras: ' + analyzer.getAverageWordLength (text);
    }

    userInput.addEventListener('input', calcularMetricas);
    resetButton.addEventListener('click', function(){
      userInput.value = '';
      calcularMetricas();
    });
  });