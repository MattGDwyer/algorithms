// What's in a Name problem from free code camp

function whatIsInAName(collection, source) {
  var arr = [];
  debugger;
  // Only change code below this line
  let sourceLength = Object.keys(source).length;
// loop through the array of objects
  for (var i = 0; i < collection.length; i++) {

    // declare a variable counter set to 0
    var counter = 0;
    //at each object in collection loop through the source object
    for (let key in source) {

      // check if each object has the key value pair
      if (collection[i][key] === source[key]) {
        // yes: add 1 to counter
        counter++;
        // check if counter is equal to sourceLength
        if (counter >= sourceLength) {
          // yes: add the array at i to arr
          arr.push(collection[i]);
        }
        // end for in loop
      }


    }
  }
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })