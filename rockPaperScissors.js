// a simple rock paper scissors function
var rockPaperScissors = function (n) {

  var results = [];
  var letters = ['R', 'P', 'S'];
  if (n === 0) {
    return results;
  }
  var generateAndCheckCombinations = function(plays) {
    if (plays.length === n) {
      results.push(plays);
      return;
    }
    letters.forEach(play => {
      generateAndCheckCombinations(plays + play);
    });
  }
  generateAndCheckCombinations('')
  return results;
};