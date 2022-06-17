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
