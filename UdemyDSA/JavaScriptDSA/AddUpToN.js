// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n. 

// Solution 1: 
function addUpTo1(n) {
    let total = 0; 
    for (let i = 1; i <= n; i++) {
        total += i; 
    }
    return total; 
}
// Time Complexcity: O(n)

// Solution 2: 
function addUpTo2(n) {
    return n*(n + 1) / 2;
}

// Time Complexcity: O(1)