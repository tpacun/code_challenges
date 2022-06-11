// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// Solution:

const reverseSeq = n => {
    return Array.from({length: n}, (v, i) => i + 1).sort((a,b) => b-a);
  };