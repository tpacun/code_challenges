// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Solution:

function rowWeights(array){
    let arrayOne = []
    let arrayTwo = []
    for (num of array.keys()) {
      if (num % 2) {
        arrayTwo.push(array[num])
      } else {
        arrayOne.push(array[num])
      }
    }
    return [arrayOne.reduce((a, b) => a+ b, 0), arrayTwo.reduce((a, b) => a+ b, 0)]
  }