// Sorting

// Bubble Sort

// ES2015
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// ES5:
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log("ONE PASS COMPLETE!");
  }
  return arr;
}
bubbleSort([37, 45, 29, 12, 88, -3]);


// Optimized with noSwaps - ES5: 
function bubbleSort(arr) {
    let noSwaps;  // default set to no swaps
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true; 
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = temp; 
                noSwaps = false; 
            }
        }
        if (noSwaps) break; 
    }
    return arr; 
}

// Optimized with noSwaps - ES2015
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    let noSwaps; 
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        noSwaps = true; 
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          noSwaps = false; 
        }
      }
      if (noSwaps) false; 
    }
    return arr;
  }