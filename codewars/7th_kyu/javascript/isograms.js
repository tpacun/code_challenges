// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// Solution:

function isIsogram(str){
    let stringAsArray = str.toLowerCase().split('')
    for (char of [...new Set(stringAsArray)]) {
      console.log(char)
      console.log(stringAsArray.filter((c) => c === char).length)
      if (stringAsArray.filter((c) => c === char).length > 1) {
        return false
      }
    }
    return true
  }

// Refactor v2

function isIsogram(str){
    return str.length === [...new Set(str.toLowerCase().split(''))].length
    }