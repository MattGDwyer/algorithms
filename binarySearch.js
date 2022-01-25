function binarySearch(searchList, value) {
  let arrayPath = [];
  let midPoint = Math.floor((searchList.length - 1) / 2);

  let search = function(array, index) {
    if (index > -1 && index < array.length) {
      if (array[index] === value) {
        arrayPath.push(array[index]);

          return arrayPath;

      } else if (array[index] > value) {
          arrayPath.push(array[index]);

          let firstHalf = array.slice(0, Math.floor((array.length - 1) / 2));
            search(firstHalf, Math.floor((firstHalf.length - 1) / 2));

      } else if (array[index] < value) {

            arrayPath.push(array[index]);
            let secondHalf = array.slice(-Math.floor((array.length) / 2));
            search(secondHalf, Math.floor((secondHalf.length - 1) / 2));
      }
    }
  }
  search(searchList, midPoint);
  if (!arrayPath.includes(value)) {
    return "Value Not Found";
  }
  return arrayPath;
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
binarySearch(testArray, 2 )