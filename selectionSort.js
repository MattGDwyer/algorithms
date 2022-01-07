
function selectionSort(array) {

console.log(array);
function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

var i, j, minIndex;
for (i = 0; i < array.length - 1; i++) {

  minIndex = i;

  for (j = i + 1; j < array.length; j++) {
    if (array[j] < array[minIndex]) {
      minIndex = j;

      swap(array, minIndex, i);
    }
  }
};
return array;

}

selectionSort([ 1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92 ])