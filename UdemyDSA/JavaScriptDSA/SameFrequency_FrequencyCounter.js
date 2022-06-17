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

// Solution 1: Convert to arrays then use Frequency Counter object/key value pairs & 2 for loops
function sameFrequency(int1, int2) {
  // convert two integers into arrays
  // create an object to store key value pairs from int1 / array1
  // check to see if int2/array2 digits match with the key value pairs of int1
  // return true if all digits match, return false if not
  let arr1 = int1.toString().split("");
  let arr2 = int2.toString().split("");
  let freqCount = {};
  if (arr1.length !== arr2.length) return false; 
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


// Solution 2: 
function sameFrequency(num1, num2) {
    let str1 = num1.toString(); 
    let str2 = num2.toString(); 
    if (str1.length !== str2.length) return false; 
    const freqCount = {}; 
    for (let digit of str1) {
        freqCount[digit] = (freqCount[digit] || 0) + 1; 
    }
    for (let digit of str2) {
        if (!freqCount[digit]) return false; 
        freqCount[digit]--;
    }
    return true; 
}