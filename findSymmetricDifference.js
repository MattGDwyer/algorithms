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


  var compareArrays = function(array1, array2) {

    var results = [];

    array1.forEach(function(value) {
      if (array2.indexOf(value) === -1 && results.indexOf(value) === -1) {
        results.push(value);
      }
    });

    array2.forEach(function(value) {
      if (array1.indexOf(value) === -1 && results.indexOf(value) === -1) {
        results.push(value);
      }
    });

    copyOfArguments.splice(0, 2, results);

  };

  while (copyOfArguments.length > 1) {
    compareArrays(copyOfArguments[0], copyOfArguments[1]);
  }

  return copyOfArguments[0];


}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);


