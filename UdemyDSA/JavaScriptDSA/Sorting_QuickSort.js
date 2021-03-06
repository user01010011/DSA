// Sorting 

// Quick Sort

// ES2015 
function pivot(arr, start=0, end=arr.length-1) {  // arr.length is the count of the array, arr.length is the last index of the array
    const swap = (arr, idx1, idx2)          => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
    };; 
    // We are assuming the pivot is always the first element
    let pivot = arr[start]; 
    let swapIdx = start; 
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++; 
            swap(arr, swapIdx, i); 
        }
    }
    // Swap the pivot from the start the swapPoint 
    swap(arr, start, swapIdx); 
    return swapIdx; 
}

function quickSort(arr, left=0, right=arr.length-1) { // no start and end because we are going to call portions of the array // 
    if (left < right){ // keep running until only one element
        // call pivot function, which returns the swapIdx
        let pivotIndex = pivot(arr, left, right) // first time we are calling left = 0, right = arr.length - 1
        // left 
        quickSort(arr, left, pivotIndex-1); // sort the left portion right before the pivot index (where pivot is now placed after pivot function)
        // right 
        quickSort(arr, pivotIndex+1, right); // sort the right portion right after the pivot index 
    }
    return arr; // break the loop 
}

quickSort([4, 6, 9, 1, 2, 5])

// ES5
function pivot(arr, start=0, end=arr.length+1) {
    function swap(array, i, j) {
        var temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
    }
    var pivot = arr[start]; 
    var swapIdx = start; 
    for (var i = start + 1; i < arr.length; i++) { // start + 1 b/c no need to compare it to itself
        if (pivot > arr[i]) {
            swapIdx++; 
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx) // not swapping pivot because pivot is the value of the start index
    return swapIdx; 
}
// pivot([4, 8, 2, 1, 5, 7, 6, 3])
// [4, 8, 2, 1, 5, 7, 6, 3] // pivot is start=0, which is 4; swapIdx is at start=0, aslo 4; for loop i starts at start + 1; 
// [4, 2, 8, 1, 5, 7, 6, 3]
// [4, 2, 8, 1, 5, 7, 6, 3]
// [4, 2, 1, 8, 5, 7, 6, 3]
// [4, 2, 1, 3, 5, 7, 6, 8]

// [3, 2, 1, 4, 5, 7, 6, 8]