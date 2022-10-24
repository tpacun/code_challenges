// https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript

// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

// Solution:

function preFizz(n) {
    return Array.from(new Array(n), (c, i) => i + 1)
  }