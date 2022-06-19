// Sorting 

// Selection Sort 

// ES2015 
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]); 

    for (let i = 0; i < arr.length; i++) {
        let lowest = i; 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j 
            }
        }
        if (i !== lowest) swap(arr, i, lowest); 
    }
    return arr; 
}
selectionSort([0, 2, 34, 22, 10, 19, 17]);


// ES5 - Example 1: 
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i; 
        for (var j = i + 1; j < arr.length; j++) {
           if (arr[j] < arr[lowest]) {
            lowest = j
           }
            // console.log(i, j)
        }
        console.log("**************************")
        console.log(arr)
        console.log("SWAPPING TO: ")
        var temp = arr[i]; 
        arr[i] = arr[lowest]; 
        arr[lowest] = temp; 
        console.log(arr)
        console.log("**************************")
    }
    return arr; 
}

// selectionSort([34, 22, 10, 19, 17])
// i, j, lowest 
// 0, 1, 1 // 22 - 34 vs 22
// 0, 2, 2 // 10 - 22 vs 10
// 0, 3, 2 // 10 - 10 vs 19, still 10
// 0, 4, 2 // 10 - 10 vs 17, still 10

// ES5 - Example 2: 
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i; 
        for (var j = i + 1; j < arr.length; j++) {
           if (arr[j] < arr[lowest]) {
            lowest = j
           }
        }
        if (i !== lowest) {
            var temp = arr[i]; 
            arr[i] = arr[lowest]; 
            arr[lowest] = temp; 
        }
    }
    return arr; 
}
selectionSort([0, 2, 34, 22, 10, 19, 17]);