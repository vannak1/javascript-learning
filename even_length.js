// Write a function called "isEvenLength".
//
// Given a word, "isEvenLength" returns whether the length of the word is even.
//
// var output = isEvenLength('wow');
// console.log(output); // --> false
//
// Starter Code :
// function isEvenLength(word) {
//   // your code here
// }

function isEvenLength(word) {
  var arrOfChar = word.split();
  return arrOfChar.length;
}
