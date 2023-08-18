const fs = require('fs')

const inputText = fs.readFileSync('./testInput.txt').toString()

const filepath = [];
const files = {};

function traverse(obj, arr) {
    return arr.reduce((acc, curr) => acc ? acc[curr] : undefined, obj);
  }

const inputArray = inputText.split('$')
const parsedArray = inputArray.filter((c) => {return c !== ''} )
const objInstructions = parsedArray.map((c) => {
    let removeWhitespace = c.trim()
    let arrayCR = removeWhitespace.split('\r\n')
    return {command: arrayCR[0].split(' '),
        responses: arrayCR.length > 1 ? arrayCR.slice(1):null
    }
})

objInstructions.forEach((instruction) => {
    if (instruction.command[0] === 'cd') {
        if (instruction.command[1] === '..') {
            filepath.pop()
        } else {
            filepath.push(instruction.command[1])
            let locToEdit = traverse(files, filepath)
            console.log(locToEdit)
            
        }
    }
})