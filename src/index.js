import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

//Espera a que el DOM esté completamente cargado antes de ejecutar el código JavaScript, asegurando que todos los elementos del documento estén disponibles para ser manipulados.
document.addEventListener('DOMContentLoaded',
function() {
    const userInput = document.querySelector('textarea[name="userInput"]');
    const resetButton = document.getElementById('resetButton');
    const resultElements = {
        wordCount: document.getElementById ('wordCount'),
        charCount: document.getElementById ('charCount'),
        charNoSpaceCount: document.getElementById ('charNoSpaceCount'),
        numberCount: document.getElementById ('numberCount'),
        numberSum: document.getElementById ('numberSum'),
        wordLengthAverage: document.getElementById ('wordLengthAverage'),
    };

function calcularMetricas(){
    const text = userInput.value;
          resultElements.wordCount.textContent = analyzer.getWordCount(text);
          resultElements.charCount.textContent = analyzer.getCharacterCount(text);
          resultElements.charNoSpaceCount.textContent = analyzer.getCharacterCountExcludingSpaces(text);
          resultElements.numberCount.textContent = analyzer.getNumberCount(text);
          resultElements.numberSum.textContent = analyzer.getNumberSum(text);
          resultElements.wordLengthAverage.textContent = analyzer.getAverageWordLength (text);
          }

         userInput.addEventListener('input', calcularMetricas);
         console.log('Limpiar');
         resetButton.addEventListener('click', function(){
         userInput.value = '';
         calcularMetricas();
          });


});