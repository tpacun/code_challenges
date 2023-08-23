// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// Solution:

function factorial(n){
    console.log(`N is ${n}`)
    if (n === 0) {
      return 1
    }
    let total = 1
    for (i=n; i > 0; i--) {
      total *= i
    }
    return total
  }

//   Refactor:
function factorial(n){
    let total = 1
    for (i=n; i > 0; i--) {
      total *= i
    }
    return total
  }