Sliding Window 

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n concsecutive elements in the array. 

// Examples: 
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10 
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
// maxSubarraySum([4, 2, 1, 6], 1) // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
// maxSubarraySum([], 4) // null 

// Solution 1: Nested Loops - not efficient if the array & num are large 
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null; 
    }
    let max = -Infinity; 
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0; 
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]; 
        }
        if (temp > max) {
            max = temp; 
        }
    }
    return max; 
}
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

// Time Complexity: O(n^2)



// Time Complexity: O(n)
