// Recursion 

// Easy  

// recursiveRange 

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

// Examples: 
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// Solution 1: 
function recursiveRange(num) {
    if (num === 0) return 0; 
    return num + recursiveRange(num - 1)
}

// recursiveRange(3) 
    // 3 + recursiveRange(2) 
        // 3 + 2 + recursiveRange(1) 
           //  3 + 2 + 1 + recursiveRange(0)
                // 3 + 2 + 1 + 0
                        
