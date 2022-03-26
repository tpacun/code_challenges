// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Solution:

var capitals = function (word) {
    let str_array = word.split('') // don't need to do this actually as strings are iterable in JS
    let ret_array = []
    for(i=0; i < word.length; i++) {
      if (str_array[i] === str_array[i].toUpperCase()) {
        ret_array.push(i)
      }
    }
    return ret_array
  };