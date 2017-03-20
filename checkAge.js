// Write a function called "checkAge".
//
// Given a person's name and age, "checkAge" returns one of two messages:
//
// "Go home, {insert_name_here}!", if they are younger than 21.
// "Welcome, {insert_name_here}!", if they are 21 or older.
//
// Naturally, replace "{insert_name_here}" with the given name. :)
//
// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'
//
// Starter Code :
// function checkAge(name, age) {
//   // your code here
// }

function checkAge(name, age) {
  var message = "";
  if (age < 21){
    message = "Go home, #{name}!";
  } else if(age >= 21){
    message = "Welcome, #{name}!";
  }

  return message;
}
