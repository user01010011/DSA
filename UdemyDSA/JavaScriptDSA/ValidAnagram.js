// Anagrams

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// Note: You may assume the string contains only lowercase alphabets.
// Time Complexity - O(n)

// all inputs will be single words, no spaces, no periods, no punctuation, no numbers
// can assume all lowercase

// Solution 1:
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};
  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }
  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }
  for (let key in counter1) {
    if (!(key in counter2)) {
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
}

// Solution 2:
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  // create an object (that is a break down of the first string)
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero, then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
validAnagram("anagram", "nagaram");


// Solution 2 - Update version 
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false; 
    }
    const temp = {}; 
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]; 
        temp[letter] ? temp[letter] += 1 : temp[letter] = 1; 
    }
    for (let i = 0; i < str2.length; i++) {
        if (!temp[letter]) {
            return false;
        } else {
            temp[letter] -= 1;
        }
    }
    return true; 
}

// Anytime you need to compare multiple pieces of data and you need to compare them