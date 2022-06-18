// Recursion - Pure Recursion 

function collectOddValues(arr) {
    let newArr = []; // create a new array every call
    if (arr.length === 0) {
        return newArr; 
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]); 
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1))); // concatenate all the arrays at the vary vary end into one array and return.
    return newArr; 
}

collectOddValues([1, 2, 3, 4, 5])

// [1].concat(collectOddValues([2, 3, 4, 5])) // 1, add to new array
//             [].concat(collectOddValues([3, 4, 5])) // even, new array is empty
//                 [3].concat(collectOddValues([4, 5])) // 3, add to new array
//                     [].concat(collectOddValues([5]))  // even, new array is empty
//                         [5].concat(collectOddValues[]) // 5, add to new array, no more so it calls empty array
//                             [] // when we call collect odd values with an empty array, if it's empty, we return a new array, which is just empty.



// [1, 3, 5] // final value
//     [1].concat[3, 5] // [1, 3, 5]
//         [].concat[3, 5] // [3, 5]
//             [3].concat[5] // [3, 5]
//                 [].concat[5] // [5]
//                     [5] // [5]
//                         [] // []