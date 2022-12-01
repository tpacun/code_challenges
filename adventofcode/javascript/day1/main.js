const fs = require('fs')

const rawInput = fs.readFileSync("./input.txt", "utf-8"); 

// Split into groups on double line breaks
const groupedInput = rawInput.split(/\r\n\r\n/);
console.log(groupedInput[0])

// Convert to integers
const numericInput = groupedInput.map((x) => x.split(/\r\n/).map((y) => +y));
console.log(typeof(numericInput[0][0]))

// Sum each Elf Array
const sums = numericInput.map((arr) => {return arr.reduce((a, b) => {return a + b})})
console.log(sums)
console.log(sums[0] === numericInput[0].reduce((a, b) => {return a + b}))

sums.sort((a, b) => b - a)

// Solution 1 - highest sum
console.log(sums[0])

// Solution 2 - sum of highest three
console.log(sums.slice(0, 3).reduce((a, b) => {return a + b}))
