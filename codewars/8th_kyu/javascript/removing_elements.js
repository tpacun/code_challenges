// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// Solution:

function removeEveryOther(arr){
    return Array.from({length: Math.ceil(arr.length / 2)}, (c, i) => arr[i * 2])
  }