function reverseString(inputString) {

  var reversedLetters = [];

  for (var i = inputString.length - 1; i >= 0; i--) {
      reversedLetters.push(inputString[i]);
  }

  return reversedLetters.join('');
}

var test = 'I had a pizza Pocket!'
console.log(reverseString(test));

