// JavaScript Built-In Sort Function 
// Telling JavaScript how to sort 


// Example 1: 
function numberCompare(num1, num2) {
    return num1 - num2; // if this returns a negative value, then num1 comes before num2, if this returns a positive value, then num2 comes first then num1. 
}
[ 6, 4, 15, 10 ].sort(numberCompare); // [4, 6, 10, 15]

// Example 2: 
function compareByLen(str1, str2) {
    return str1.length - str2.length; 
}
["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen); // [ "Colt", "Steele", "Algorithms", "Data Structures" ]