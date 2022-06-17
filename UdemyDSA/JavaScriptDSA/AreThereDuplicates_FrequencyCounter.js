// Frequency Counter / Multiple Pointers

// areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Solution 1 - 1: Frequency Counter / Hash Table
function areThereDuplicates(...args) {
  let freqCount = {};
  for (let val of args) {
    if (freqCount[val]) return true; // if the value already exists in the frequency counter;
    freqCount[val] = (freqCount[val] || 0) + 1; // if the value does not exist, then use 0 + 1; if the value exists, then use freqCount + 1;
  }
  return false;
}
// Time Complexity: O(n);
// Space Complexity: O(n)

// Solution 1 - 2: Frequency Counter
function areThereDuplicates() {
  let collection = {};
  for (let val of arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// Solution 2 - 1: Multiple Pointers
function areThereDuplicates(...args) {
  args.sort();
  let i = 0;
  for (let j = 1; j < args.length; i++, j++) {
    if (args[i] === args[j]) {
      return true;
    }
  }
  return false;
}
// Time Complexity: O(n log n) // sort is O(n log n) + loop is O(n), drop constant is O(n log n)
// Space Complexity: O(1)

// Solution 2 - 2: Multiple Pointers
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// Solution 3 - 1: Using Set
function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}

// Solution 3 - 2: Using Set
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
