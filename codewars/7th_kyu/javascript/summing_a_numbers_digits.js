// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// Solution:
function sumDigits(number) {
    let strArray = Math.abs(number).toString().split('')
    return strArray.map((x) => parseInt(x)).reduce((a,b) => a+b)
  }
  