// Recursion 

// Hard 

// collectStrings 

// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string. 

// Examples: 
// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])

// Solution 1 - 1: 
function collectStrings(obj) {
    let arr = []; 
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            arr.push(obj[key]); 
        } else if (typeof obj[key] === 'object') {
            arr = arr.concat(collectStrings(obj[key])); 
        }
    }
    return arr; 
}

// Solution 1 - 2: 
function collectStrings(obj) {
    let stringsArr = []; 
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArr.push(obj[key]); 
        } else if (typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]))
        }
    }
    return stringsArr; 
}