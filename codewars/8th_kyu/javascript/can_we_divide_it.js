// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript

// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// Solution:

function isDivideBy(number, a, b) {
    return !(number % a) && !(number % b)
  }