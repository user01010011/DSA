// Recursion 

// Hard 

// capitalizeWords 

// Write a recursive function called capitalizeWords. Given an array of capitalizeWords, return a new array containing each word capitalized.

// Examples: 
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// Solution 1 - 1: 
function capitalizeWords(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()]
    }
    let res = capitalizeWords(arr.slice(0, -1)); 
    let capWord = arr[arr.length - 1].toUpperCase(); 
    res.push(capWord); 
    return res; 
}

// Solution 1 - 2: 
function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1)); 
    res.push(array.slice(array.length - 1)[0].toUpperCase()); 
    return res;
}