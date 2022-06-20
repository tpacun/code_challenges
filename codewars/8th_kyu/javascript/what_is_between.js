// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// Solution:

function between(a, b) {
    return Array.from(Array(b - a + 1), (c, i) => a + i)
  }