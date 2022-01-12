// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let chunks = [];
  let start = 0;
  let currentSize = size;

  while (start < arr.length) {
    chunks.push(arr.slice(start, currentSize))
    start += size;
    currentSize += size;
  }

  return chunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);