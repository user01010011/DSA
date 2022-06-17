// Multiple Pointers 

// countUniqueValues 

// Implement a function called countUniqueValues, which accepts a sorted Array, and counts the unique values in the Array. 
// There can be negative numbers in the array, but it will always be sorted. 

// Examples: 
// countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7 
// countUniqueValues([]) // 0 
// countUniqueValues([-2, -1, -1, 0, 1]) // 4


// Solution 1: Using an object/key value pair to store the items in the array 
function countUniqueValues(arr) {
    let count = 0; 
    let temp = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        temp[num] ? temp[num] += 1 : temp[num] = 1; 
    } 
    for (let key in temp) {
        if (temp[key] == 1) {
            count++;
        }
    }
    return count; 
}
countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]); 

// Solution 2: Using 2 pointers
function countUniqueValues(arr) {
    if (arr.length === 0) return 0; 
    let i = 0; 
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++; 
            arr[i] = arr[j]
        }
    }
    return i + 1
}