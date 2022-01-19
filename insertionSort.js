// The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.


function insertionSort(array) {
  // Only change code below this line
  // create a copy of array called sortedNumbers
  let sortedNumbers = array.slice();
  // write a function to swap the numbers and make sure it works
function swap(numbers, a, b) {
    let temp = numbers[a];
    numbers[a] = numbers[b];
    numbers[b] = temp;
}
  // start looping through sortedNumbers starting at index 1 (i)
  for (let i = 1; i < sortedNumbers.length; i++) {
    // check if sorted numbers at i is less than sorted numbers at i - 1
    if (sortedNumbers[i] < sortedNumbers[i - 1]) {
      // yes? start a loop backwards from i to 0 using j to represent index
      for (let j = i; j > 0; j--) {
        // swap the numbers
        swap(sortedNumbers, [j], [j - 1]);
        // check if numbers at j is less than numbers at j - 1
        if (sortedNumbers[j] < sortedNumbers[j - 1]) {
          // yes? swap them
          swap(sortedNumbers, [j], [j - 1]);
        }
      }
    }
  }
  // return sortedNumbers
  return sortedNumbers;
  // Only change code above this line
}

insertionSort([5, 4, 33, 2, 8])
