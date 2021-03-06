// https://www.codewars.com/kata/585a1a227cb58d8d740001c3/train/javascript

// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

// Solution: 

function repeater(string, n){
  let newString = '';
  let range = [...Array(n)].forEach(() => newString += string)
  return newString
}
// Note that there's a built in for this one. One liner is return string.repeat(n)