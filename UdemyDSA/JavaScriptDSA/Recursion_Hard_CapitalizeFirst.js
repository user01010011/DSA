// Recursion

// Hard

// capitalizeFirst

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// Example:
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// Solution 1 - 1:
function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase().concat(arr[0].slice(1))];
  }
  let result = capitalizeFirst(arr.slice(0, -1));
  let capLastStr = arr[arr.length - 1][0]
    .toUpperCase()
    .concat(arr[arr.length - 1].slice(1));
  result.push(capLastStr);
  return result;
}

// Solution 1 - 2:
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr[1]];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}
