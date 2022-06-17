// Multiple Pointers 

// averagePair 

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.


// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false
// Solution:

// Time: O(n)
// Space: O(1)

// Solution 1: Two pointers 

function averagePair(arr, num) {
    let left = 0; 
    let right = arr.length - 1; 
    while (left < right) {
        let average = (arr[left] + arr[right]) / 2; 
        if (average === num) return true; 
        else if (average < num) left++; 
        else right--; 
    }
    return false; 
}