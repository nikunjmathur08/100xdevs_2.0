/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let str1 = str.toLowerCase();
    let count = 0;
    let arr = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < str1.length; i++){
      if(arr.includes(str1[i])){
        count ++;
      }
    }
    return count;
}

console.log(countVowels("I Love Minnie"));
module.exports = countVowels;