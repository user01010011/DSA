// Naive String Search 

// Suppose you want to count the number of times a smaller string appears in a longer string 
// A straightforward approach involves checking pairs of characters individually 

// Solution 1: 
function naiveSearch(long, short) {
    let count = 0; 
    for (let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) break; // this is while we are still on the i iteration, but adding the iteration of j to the long string to compare the same position with the short string at j. 
            if (j === short.length - 1) count++; // this is how we know we are on the last iteration
        }
    }
    return count; 
}

naiveSearch("lorie loled", "lol")


