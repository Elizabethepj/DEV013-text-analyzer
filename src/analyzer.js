
const analyzer = {  
  // 1. TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getWordCount: (text) => {
    const words = text.split(/\s+/).filter(word => word !== '');
    return words.length;
  },

  //2. TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCount: (text) => {
    return text.length;
  },
  
  //3. TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  // [^\w] excluye espacios y signos de puntuación. \s así se representa el espacio en blanco, pero no funcionó enn este código.    
  getCharacterCountExcludingSpaces: (text) => {
    let charNoSpaceCount = 0;
    for (const char of text) {
      if (/\w/.test(char)) {
        charNoSpaceCount++;
      }
    }
    return charNoSpaceCount;
  },
  
  //getCharacterCountExcludingSpaces: (text)=> {
  //const charNoSpaceCount = text.split('').reduce((count,char) => {
  //if (/\w/.test (char)) {
  //return count + 1;}
  //return count;
  //}, 0);
  // return charNoSpaceCount;
  // },

  //replace: elimina caracteres no deseados. Este fue el primer código para contar los caracteres sin espacios. Sin embargo, este no tenía lógica boleana.
  //getCharacterCountExcludingSpaces: (text) => {
  // const charNoSpaceCount = text.replace(/[^\w]/gi,'').length;  
  // return charNoSpaceCount;
  //},

  //4. TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const numbers = text.match (/[-+]?\b\d+(\.\d+)?\b/g) || [];
    const numCount = numbers.reduce ((count, num) => {
      const numVal = parseFloat(num);
      if (!isNaN(numVal)) {
        return count + 1;
      }
      return count;
    }, 0);
    return numCount;
  },

  // 5. TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  //En esta función se conviertengit cadenas tipo string a tipo number. text.match(/\d+/g) busca los números y los ubica en un array, y parseInt(num) dentro de reduce los convierte en un valor númerico. 
  getNumberSum: (text) => {
    const numbers = text.match (/[-+]?\b\d+(\.\d+)?\b/g) || []; 
    const totalSum = numbers.reduce((sum, num) => sum + parseFloat(num), 0);
    return parseFloat(totalSum.toFixed(2));
  },

  //6. TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  // split: divide el texto en palabras basándose en espacios. Filter: elimina las palabras vacías.
  getAverageWordLength: (text) => {    
    const words = text.split(/\s+/).filter(word => word !== '');
    const totalWordLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageWordLength = words.length ? totalWordLength / words.length : 0.00;
    return parseFloat(averageWordLength.toFixed(2));
  },

};
export default analyzer;