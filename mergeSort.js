
var merge = function(left, right) {
  var results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    };
  }
  return results.concat(left.slice().concat(right.slice()));
};

var mergeSort = function(array) {

  if (array.length <= 1) {
    return array;
  }
      var mid = Math.floor(array.length / 2);
      var left = mergeSort(array.slice(0, mid));
      var right = mergeSort(array.slice(mid));

      return merge(left, right);

};



var arr = [7, 33, 19, 100, 1, 12, 77, 3234234, 66452, 3];
mergeSort(arr);