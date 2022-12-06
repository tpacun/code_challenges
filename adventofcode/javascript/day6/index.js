const fs = require('fs')
const functions = require('./main')

const inputText = fs.readFileSync('./input.txt').toString()

console.log(`Part One: ${functions.getSolution(inputText, 4)}`)
console.log(`Part Two: ${functions.getSolution(inputText, 14)}`)