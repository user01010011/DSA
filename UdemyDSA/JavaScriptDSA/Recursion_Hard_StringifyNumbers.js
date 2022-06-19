// Recursion 

// Hard 

// stringifyNumbers 

// Write a function called stingifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. 
// Recursion would be a great way to solve this!

// Examples: 
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// Solution: 
function stringifyNumbers(obj) {
    let newObj = {}; 
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString()
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj; 
}