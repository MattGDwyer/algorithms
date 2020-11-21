// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements
// which are in either of the two sets but not in both. For example, for sets
//  A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements.
//  So to evaluate an expression involving symmetric differences among three elements
//  (A △ B △ C),
//   you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3},
//    A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric
//  difference. The returned array must contain only unique values (no duplicates).

function sym(args) {
  var copyOfArguments = Array.prototype.slice.call(arguments);
  copyOfArguments[0].sort( (a, b) => a - b);
//   debugger;

  if (copyOfArguments.length > 1) {
    var binaryComparisonResults = [];
      copyOfArguments[0].forEach(function(value) {
        if (binaryComparisonResults.indexOf(value) === -1 && copyOfArguments[1].indexOf(value) === -1) {
          binaryComparisonResults.push(value);
        }
      });

      copyOfArguments[1].forEach(function(value) {
        if (binaryComparisonResults.indexOf(value) === -1 && copyOfArguments[0].indexOf(value) === -1) {
          binaryComparisonResults.push(value);
        }
      });
    copyOfArguments.splice(0, 2, binaryComparisonResults);

    if (copyOfArguments.length > 1) {



      sym(copyOfArguments[0], copyOfArguments[1]);
    } else {
        console.log('inside conditional:')
        return binaryComparisonResults;
    }

  }
  console.log('outside conditional:')
  return binaryComparisonResults;
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);



