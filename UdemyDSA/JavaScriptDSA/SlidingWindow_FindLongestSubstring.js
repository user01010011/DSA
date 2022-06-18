// Sliding Window

// findLongestSubstring

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// Examples: 
// findLongestSubstring(''); // 0
// findLongestSubstring('rithmschool'); // 7
// findLongestSubstring('thecatinthehat'); // 7
// findLongestSubstring('bbbbbb'); // 1
// findLongestSubstring('longestsubstring') // 8 
// findLongestSubstring('thisishowwedoit') // 6

// Time: O(n)

// Solution 1: Using Hash Table
function findLongestSubstring(str) {
    let longest = 0; 
    let seen = {}; 
    let start = 0; 
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; 
        if (seen[char]) {
            start = Math.max(start, seen[char])
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1); 
        // store the index of the next char so as to not double count
        seen[char] = i + 1; 
    }
    return longest; 
}


// Solution 2: Using Hash Table

function findLongestSubstring(str){
    let len = 0; 
    let i = 0; 
    let map = {}; 
    for (let j = 0; j < str.length; j++) {
        let char = str[j]; 
        if (map[char]) {
            i = Math.max(i, map[char]); 
        }
            len = Math.max(len, j - i + 1); 
            map[char] = j + 1; 
       
    }
    return len; 
  }
  