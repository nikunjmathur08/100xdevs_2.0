/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const normalize = str => str.replace(/\s+/g, '').toLowerCase();
  
  str1 = normalize(str1);
  str2 = normalize(str2);
  
  if (str1.length !== str2.length) {
      return false;
  }
  
  const charCount = {};
  
  for (let char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
      if (!charCount[char]) {
          return false;
      }
      charCount[char]--;
  }
  
  return true;
}

module.exports = isAnagram;