// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
  
}

module.exports = reverse;

// ** SOLUTION #1 **
// function reverse(str) {

//   // Use split() method to return a new array
//   const splitString = str.split('');

//   // Use the reverse method to reverse the array
//   const reversedArray = splitString.reverse();

//   // Now join them back together
//   const joinArray = reversedArray.join("");

//   return joinArray;

// }


// ** SOLUTION #2 **
// function reverse(str) {

//   // create an empty string called reversed
//   let reversed = '';
  
//   // for each character in the provided string
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   //return the variable reversed
//   return reversed;
  
// }
