// Sorting 

// Radix Sort 


// Radix Sort Helper Function 1: get digits of each number at each position
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;  // i is the i in the function input // % is the remainder regardless which position the number is (10, 100, or 1000s) in the num
    // Math.abs(num) just makes sure that it works with negative numbers
}
getDigit(7323, 2) // num is 7323, i would be 2
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
digitCount(423) // get the digit count of 423
// log10 gives us the power of the number based on base 10