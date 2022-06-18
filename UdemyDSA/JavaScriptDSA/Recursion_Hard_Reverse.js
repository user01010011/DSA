// Recursion 

// Hard 

// reverse

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome'); // 'emosewa'
// reverse('rithmschool'); // 'loohcsmhtir'

// Solution 1 - Brute force / no recursion: 
function reverse(str) {
    let newStr = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr 
}

// Solution 2 - Recursion / JS built in function 
function reverse(str) {
    return str.split("").reverse().join("")
}

// Solution 3 - 1 - Recursion 
function reverse(str) {
    return (str === "" ? "" : reverse(str.substring(1)) + str.charAt(0)); 
}

// Solution 3 - 2 - Recursion
function reverse(str) {
    if (str.length <= 1) return str; 
    return reverse(str.slice(1)) + str[0]
}