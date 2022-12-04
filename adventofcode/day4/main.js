const fs = require('fs')

const inputText = fs.readFileSync('./input.txt').toString()

const arrayInput = inputText.split('\r\n')

const arrayPairs = arrayInput.map((str) => str.split(','))

const pairsMinMax = arrayPairs.map((pair) => {
    return pair.map((str) => {
        let minMaxAlpha = str.split('-')
        return {min: +minMaxAlpha[0], max: +minMaxAlpha[1]}
    })
})

let counter = 0;
let pairNotCounted = []

pairsMinMax.forEach((pair, i) => {

    // Check first pair
    if ((pair[0].min <= pair[1].min && pair[0].max >= pair[1].max) || (pair[1].min <= pair[0].min && pair[1].max >= pair[0].max)) {
            counter++
    } else {
        pairNotCounted.push([i, pair[0], pair[1]])
    }
})

console.log(counter)