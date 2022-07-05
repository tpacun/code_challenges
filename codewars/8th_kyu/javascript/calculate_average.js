// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Solution:

function find_average(array) {
    // your code here
    return array.length ? array.reduce((a,b) => a+b) / array.length:0;
  }