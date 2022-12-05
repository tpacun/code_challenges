// [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2
// In this example, there are three stacks of crates. Stack 1 contains two crates: crate Z is on the bottom, and crate N is on top. Stack 2 contains three crates; from bottom to top, they are crates M, C, and D. Finally, stack 3 contains a single crate, P.

// Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:

// [D]        
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 
// In the second step, three crates are moved from stack 1 to stack 3. Crates are moved one at a time, so the first crate to be moved (D) ends up below the second and third crates:

//         [Z]
//         [N]
//     [C] [D]
//     [M] [P]
//  1   2   3
// Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved one at a time, crate C ends up below crate M:

//         [Z]
//         [N]
// [M]     [D]
// [C]     [P]
//  1   2   3
// Finally, one crate is moved from stack 1 to stack 2:

//         [Z]
//         [N]
//         [D]
// [C] [M] [P]
//  1   2   3

// The Elves just need to know which crate will end up on top of each stack; in this example, the top crates are C in stack 1, M in stack 2, and Z in stack 3, so you should combine these together and give the Elves the message CMZ.

// Part One: After the rearrangement procedure completes, what crate ends up on top of each stack?

const fs = require('fs')
const { machine } = require('os')
const { start } = require('repl')

const inputText = fs.readFileSync('input.txt').toString()
const position = inputText.split('\r\n\r\n')[0].split('\r\n')

const charPositions = Array.from({length: position[0].length / 4 + 1}, (_, i) => 1 + i * 4)

let startingPosition = {}

charPositions.forEach((num, i) => {
    startingPosition[position[position.length -1].charAt(num)] = [...new Array(position.length - 1)]
        .map((_, i) => position[i].charAt(num))
        .filter((c) => c !== ' ')
})

const instructions = inputText.split('\r\n\r\n')[1]

const machineInstructions = instructions.split('\r\n').map((str) => {
    const instructionsSplit = str.split(' ')
    return {"reps": +instructionsSplit[1],
    "from": instructionsSplit[3], 
    "to": instructionsSplit[5]}
})

machineInstructions.forEach((instruction) => {
    let fromStack = startingPosition[instruction["from"]]
    let moving = fromStack.splice(0, instruction["reps"]).reverse()
    let to = startingPosition[instruction["to"]]
    startingPosition[instruction["to"]] = moving.concat(to)
})

let answerPOne = ''
for (key in startingPosition) {answer = answer.concat(startingPosition[key][0])}
console.log(`Part One ${answerPOne}`)

// Part Two:

// The CrateMover 9001 is notable for many new and exciting features: air conditioning, leather seats, an extra cup holder, and the ability to pick up and move multiple crates at once.

// Again considering the example above, the crates begin in the same configuration:

// [D]    
// [N] [C]    
// [Z] [M] [P]
// 1   2   3 
// Moving a single crate from stack 2 to stack 1 behaves the same as before:

// [D]        
// [N] [C]    
// [Z] [M] [P]
// 1   2   3 
// However, the action of moving three crates from stack 1 to stack 3 means that those three moved crates stay in the same order, resulting in this new configuration: