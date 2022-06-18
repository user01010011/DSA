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
  