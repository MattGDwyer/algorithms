// Pairwise
// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

// Index	0	1	2	3	4
// Value	7	9	11	13	15
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function pairwise(arr, arg) {
  // if there are no numbers in the array
  if (arr.length === 0) {
    // return 0
    return 0;
  }

  // create a copy of the array so we are not changing the original
  let numbers = arr.slice();
  // declare a variable to hold the number for the result. Start it at
  // 0
  let sumOfIndeces = 0;
  // declare an empty array to track the indeces that have been used
  let indecesUsed = [];

  // go through the array item by item starting at the beginning
  for (let i = 0; i < numbers.length; i++) {
    // go through the array item by item again inside the first loop.
    for (let j = 0; j < numbers.length; j++) {
      // if both loops are on the same item, the second loop should skip ahead one index
      if (j === i) {
        continue;
      }
      // check if the number in the first loop plus the number in the second loop add up to the number arg points to
      if (numbers[i] + numbers[j] === arg) {
        // check if those indeces have been used already
        if (indecesUsed.includes(i) || indecesUsed.includes(j)) {
          // if so, skip ahead one index
          continue;
          // otherwise
        } else {
          // add the indeces to sumOfIndeces
          sumOfIndeces += i + j;
          // add the indeces to the list of used indeces
          indecesUsed.push(i);
          indecesUsed.push(j);
        }
      }
    }
  }
  // after the loops finish, return the number result points to.
  return sumOfIndeces;
}

pairwise([1,4,2,3,0,5], 7);
