/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/
function updateInventory(arr1, arr2) {
  // slice arr1 so as not to mutate it.
  let updatedInventory = arr1.slice();

  // edge case for empty beginning inventory
  if (arr1.length === 0) {

      return arr2.slice().sort(compareIndexOne);
  }

  let counter = 0;
  for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < updatedInventory.length; j++) {
          if (arr2[i][1] === updatedInventory[j][1]) {
              let newValue = arr2[i][0] + updatedInventory[j][0];
              delete updatedInventory[j][0];
              updatedInventory[j][0] = newValue;

          } else {
              counter += 1;
          }
          // if all items in updatedInventory have been checked
          if (counter === updatedInventory.length) {
              updatedInventory.push(arr2[i]);
              // stop loop so we don't double the amount of the last item
              break;
          }
      }
      counter = 0;
  }
  return updatedInventory.sort(compareIndexOne);
}
// helper function to alphabetize entries
function compareIndexOne(a, b) {
  if (a[1] === b[1]) {
      return 0;
  }
  else {
      return (a[1] < b[1]) ? -1 : 1;
  }
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);