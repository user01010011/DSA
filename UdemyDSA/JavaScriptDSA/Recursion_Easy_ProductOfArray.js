// Recursion 

// Easy  

// productOfArray 

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// Examples: 
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


// Solution 1: Using Splice 
function productOfArray(arr) {
    if (arr.length === 0) return 1; 
    return arr[0] * productOfArray(arr.splice(1))
}

// Solution 2: Using Slice 
function productOfArray(arr) {
    if (arr.length === 0) return 1; 
    return arr[0] * productOfArray(arr.slice(1))
} 