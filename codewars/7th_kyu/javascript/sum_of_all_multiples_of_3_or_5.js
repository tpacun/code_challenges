// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript

// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// Solution:

function findSum(n) {
    return [...Array(n).keys()].map((c) => c + 1)
      .filter((c) => c % 3 === 0 || c % 5 === 0)
      .reduce((a, b) => a + b);
  }