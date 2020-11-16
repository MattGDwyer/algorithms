// question 1) fill out this function so that it returns a reverse string, do not use ANY common functions that just do it for you
function reverseString(inputString) {

  var reversedLetters = [];

  for (var i = inputString.length - 1; i >= 0; i--) {
      reversedLetters.push(inputString[i]);
  }

  return reversedLetters.join('');
}
var x = "Legolas";
console.log(reverseString(x));
var test = 'I had a pizza Pocket!'
console.log(reverseString(test));

