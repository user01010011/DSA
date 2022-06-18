// Recursion 

// Hard  

// isPalindrome

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// Examples: 
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// Solution 1: Brute Force - For Loop 
function isPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        if (str[i] !== str[j]) {
            return false; 
        } 
        return true
    }
}

function isPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        if (str[i] == str[j]) {
            return true; 
        } else {
            return false
        }
    }
}

// Solution 2: Recursion: 
function isPalindrome(str) {
    if (str.length === 1) return true; 
    if (str.length === 2) return str[0] == str[1]; 
    if (str[0] === str.slice(-1)) return (isPalindrome(str.slice(1, -1)));
    return false; 
}