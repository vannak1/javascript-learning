// Write a function called "isOddLength".
//
// Given a word, "isOddLength" returns whether the length of the given word is odd.
//
// var output = isOddLength('special');
// console.log(output); // --> true
//
// Starter Code :
// function isOddLength(word) {
//   // your code here
// }

function isOddLength(word) {
  var length = word.split("").length;
  if (length % 2){
    return true;
  } else {
    return false;
  }
}
