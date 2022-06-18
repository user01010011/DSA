// Recursion

// Hard

// flatten

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// Examples:
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// Solution 1 - 1: Recursion

function flatten(ArrOfArrs) {
  let newArray = [];
  for (let i = 0; i < ArrOfArrs.length; i++) {
    if (Array.isArray(ArrOfArrs[i])) {
      newArray = newArray.concat(flatten(ArrOfArrs[i]));
    } else {
      newArray.push(ArrOfArrs[i]);
    }
  }
  return newArray;
}

// Solution 1 - 2:
function flatten(ArrOfArrs) {
  let newArray = [];
  for (let i = 0; i < ArrOfArrs.length; i++) {
    if (Array.isArray(ArrOfArrs[i])) {
      newArray = newArray.concat(flatten(ArrOfArrs[i]));
    } else {
      newArray = [...newArray, ArrOfArrs[i]];
    }
  }
  return newArray;
}
