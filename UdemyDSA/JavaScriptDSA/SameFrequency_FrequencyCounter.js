// Frequency Counter

// sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities.
// Time: O(N)
// Sample input:
// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false

// Solution 1: Frequency Counter using object/key value pairs & 2 for loops
function sameFrequency(int1, int2) {
  // convert two integers into arrays
  // create an object to store key value pairs from int1 / array1
  // check to see if int2/array2 digits match with the key value pairs of int1
  // return true if all digits match, return false if not
  let arr1 = int1.toString().split("");
  let arr2 = int2.toString().split("");
  let freqCount = {};
  for (let i = 0; i < arr1.length; i++) {
    let digit = arr1[i];
    freqCount[digit] ? (freqCount[digit] += 1) : (freqCount[digit] = 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!freqCount[digit]) {
      return false;
    } else {
      freqCount[digit] -= 1;
    }
  }
  return true;
}
