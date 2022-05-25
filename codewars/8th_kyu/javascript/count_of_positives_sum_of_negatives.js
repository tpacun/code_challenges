// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Solution:

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return []
    }
    else {
      let pos = 0;
      let neg = 0;
      for(element of input) {
        if (element > 0) {
          pos += 1
        }
        else if (element < 0) {
          neg += element
        } 
      }  
      return [pos, neg]
    }
  }