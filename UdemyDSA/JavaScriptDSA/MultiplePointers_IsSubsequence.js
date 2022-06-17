// Multiple Pointers 

// isSubsequence 

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples: 
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// Solution 1: Iterative 
function isSubsquence(str1, str2) {
    if (!str1) return true; 
    let i = 0; 
    for (let j = 0; j < str2.length; j++) {
        if (i === str1.length - 1) return true; 
        if (str1[i] === str2[j]) i++; 
    }
    return false; 
}

// Time: O(n + m)
// Space: O(1)


// Solution 1 - 2: Iterative
function isSubsquence(str1, str2) {
    let i = 0; 
    let j = 0; 
    if (!str1) return true; 
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++; // check next one in str1, move pointer i
        if (i === str1.length) return true; // if this is the end of str1, then we've checked all of str1 
        j++; // if the items don't equal to each other, check next one in str2, move pointer j 
    }
    return false; 
}

// Solution 2: Recursive but not O(1) Space
function isSubsequence(str1, str2) {
    if (str1.length === 0) return true 
    if (str2.length === 0) return false 
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}
