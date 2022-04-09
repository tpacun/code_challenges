// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// Solution:

function towerBuilder(nFloors) {
    let towerArray = [];
    for(i = 1; i <= nFloors; i++) {
      towerArray.push(' '.repeat(nFloors-i) + '*'.repeat(i + (i-1)) + ' '.repeat(nFloors-i))
    }
    return towerArray
  }