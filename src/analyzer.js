
const analyzer = {  
  
   //1. TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
   getWordCount: (text) => {
    const words = text.split (/\s+/).filter(word => word !== '');
    return words.length;
     },

 //2. TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
   getCharacterCount: (text) => {
    return text.length;
     },

  //3. TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  //  [^\w] excluye espacios y signos de puntuación. \s así se representa el espacio en blanco, pero no funcionó enn este código.   
    getCharacterCountExcludingSpaces: (text) => {
      const charNoSpaceCount = text.replace(/[^\w]/gi,'').length;  
      return charNoSpaceCount;
  },

   //4. TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
   getNumberCount: (text) => {
    const numbers = text.match(/\d+/g) || [];
    return numbers.length;
    },

   //5. TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
        getNumberSum: (text) => {
        const numbers = text.match(/\d+/g) || [];
        const totalSum = numbers.reduce((sum, num) => sum + parseInt(num), 0);
        return totalSum;
      },

    //6. TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (text) => {    
  const words = text.split(/\s+/).filter(word => word !== '');
  const totalWordLength = words.reduce((sum, word) => sum + word.length, 0);
  const averageWordLength = words.length ? totalWordLength / words.length : 0.00;
  return parseFloat(averageWordLength.toFixed(2));
  },

};

export default analyzer;
