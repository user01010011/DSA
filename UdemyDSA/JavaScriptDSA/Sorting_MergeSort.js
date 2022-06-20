// Sorting 

// Merge Sort 

function merge(arr1, arr2) {
    let results = []; 
    let i = 0; 
    let j = 0; 
    while (i < arr1.length && j < arr2.length) { // while there is still data for us to look at in both arrays
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]); // we put the smaller item into the array 
            i++; // then we move the pointer i to the next item in arr1
        } else {
            results.push(arr2[j]);
            j++; // then move the pointer j to the next item in arr2
        }
    } 
    // once we exhausted / looped through one array, if we have not finished the other array, we take the rest of that array and put it in to the results array.
    while (i < arr1.length) {
       results.push(arr1[i]) 
       i++; 
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++; 
    }
    return results; 
}
// merge([100], [1, 2, 3, 5, 6])

function mergeSort(arr) {
    if (arr.length <= 1) return arr; // our base case of the recursion
    let mid = Math.floor(arr.length/2); // split the array in half, the whole integer 
    let left = mergeSort(arr.slice(0, mid)); // index 0 to index mid-1 // recursion - call mergeSort function (go up to the mergeSort on top) again, then go through left & right again  
    let right = mergeSort(arr.slice(mid)); // goes from mid to the end of the array 
    return merge(left, right); // call the merge function at the very top, marge the base cases first, then go back through the call stack 
}

mergeSort([10, 24, 76, 73, 72, 1, 9])