// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Solution:

function findNeedle(haystack) {
    // your code here
    return `found the needle at position ${haystack.findIndex(c => c === 'needle')}`
  }