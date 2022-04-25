// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

// Solution:

var number=function(array){
    return array.map((c,i) => `${i + 1}: ${c}`)
  }