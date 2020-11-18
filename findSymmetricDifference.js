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

  // if args.length = 1
  if (arguments.length === 1) {
  // return arguments
  return arguments;
  }

  // declare a variable symResults to a copy of arguments
  var symResults = Array.from(arguments);

  // declare a variable symIntegers to an empty array
  var symIntegers = [];
  // loop over arguments at 0
  for (var i = 0; i < symResults[0].length; i++) {
    // call indexof on each index of symResults at 0 and 1 and compare
    if (symResults[1].indexOf(symResults[0][i]) === -1){


      // you need to check if any number in sym results at 1 is unique to symResults at 0.

    // if neither contains,
    // add add it to symIntegers;
    symIntegers.push(symResults[0][i]);
    }

  }
  // remove symResults at 0 and 1
  // add symIntegers to front of symResults
  symResults = symResults.splice(0, 2, symIntegers);
  console.log(symResults);
  sym(symResults);
  // recurse passing symResults as args
  // implementation
}

sym([1, 2, 3], [5, 2, 1, 4]);