// Frequency Counter / Multiple Pointers 

// areThereDuplicates 

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Solution 1: Frequency Counter
function areThereDuplicates(...args) {
    let freqCount = {}; 
    for (let val of args) {
        if (freqCount[val]) return true; // if the value already exists in the frequency counter; 
        freqCount[val] = (freqCount[val] || 0) + 1; // if the value does not exist, then use 0 + 1; if the value exists, then use freqCount + 1; 
    }
    return false; 
}