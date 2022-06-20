// Sorting 

// Radix Sort 
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums); // call mostDigits helper function below
    for (let k = 0; k < maxDigitCount; k++) { // k is from the most number of digit)
        let digitBuckets = Array.from({length: 10}, () => []) // this creates an array of 10 empty arrays, [] makes it empty, if you put ["a"] all the array will be ["a"]
        for (let i = 0; i < nums.length; i++) { // loop through all the numbers 
            let digit = getDigit(nums[i], k);  // figure out every number at position k, what value do we get 
            digitBuckets[digit].push(nums[i]); // push the digit at position k of each number into respective buckets
        }
        nums = [].concat(...digitBuckets) // reassign nums to a new array with all of the numbers,
        // ... is spread operator which copies the original array and also flattens the array, just use .concat() will keep the levels of the old array
    }
    return nums; 
}
// radixSort([23, 345, 5467, 12, 2345, 9852]) // 4 - now we know to looop 4 times
// console.log(maxDigitCount)


// Radix Sort Helper Function 1: get digits of each number at each position
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;  // i is the i in the function input // % is the remainder regardless which position the number is (10, 100, or 1000s) in the num
    // Math.abs(num) just makes sure that it works with negative numbers
}
// getDigit(7323, 2) // num is 7323, i would be 2
// 7323/100, which is 73.23
// then get the floor which is 73
// then % 10 to get the remainder which is 7

// Radix Sort Helper Function 2: get the count of digits of each number
function digitCount(num) {
    if (num === 0) return 1; // if we do Math.log10(0) we get -Infinity, negative infinity
    return Math.floor(Math.log10(Math.abs(num))) + 1; 
    // log10 is log base 10, basically ask 10 to what power gives us this number
    // add 1 back in to account for the 10 dividing the number 
    // Math.abs() to make sure if there is negative number, it still has the same number of digits
}
// digitCount(423) // get the digit count of 423
// log10 gives us the power of the number based on base 10

// Radix Sort Helper Function 3: get the digits of the largest number in the list 
function mostDigits(nums) {
    let maxDigits = 0; 
    for (let i = 0; i < nums.length; i++) { // Loop through the numbers 
        maxDigits = Math.max(maxDigits, digitCount(nums[i])); // maxDigits is 0, and then get the digits of num at i. 
    }
    return maxDigits; 
}

