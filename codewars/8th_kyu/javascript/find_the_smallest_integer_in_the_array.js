// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

 // Given an array of integers your solution should find the smallest integer.

// Solution:

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a, b) => a - b)[0]    
    }
  }