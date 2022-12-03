// The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

// The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

// For example, suppose you have the following list of contents from six rucksacks:

// vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw

// The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
// The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
// The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
// The fourth rucksack's compartments only share item type v.
// The fifth rucksack's compartments only share item type t.
// The sixth rucksack's compartments only share item type s.
// To help prioritize item rearrangement, every item type can be converted to a priority:

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
// In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

// Problem One: Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

const fs = require('fs')

const inputText = fs.readFileSync('./input.txt').toString()

const rucksacks = inputText.split('\r\n')
const rucksacksWithCompartments = rucksacks.map((str) => {
    return [str.slice(0, str.length/2).split(''), str.slice(str.length/2).split('')]
})

// Grab unique values from each rucksack
const rucksackUniques = rucksacks.map((arr) => {
    return new Set(arr.split(''))
})

// Find matches
let rucksackMatches = [];
rucksackUniques.forEach((set, i) => {
    let matches = [];
    set.forEach((char) => {
        if (rucksacksWithCompartments[i][0].includes(char) && rucksacksWithCompartments[i][1].includes(char)) {
            matches.push(char)
        }
    })
    rucksackMatches.push(matches)
})

// Gets utf-16 char codes for each: a is 97, A is 65 (to calculate prios)
console.log('Character Codes:', 'a'.charCodeAt(0), 'A'.charCodeAt(0))

const rucksackNumericPrios = rucksackMatches.map((arr) => {
    if (arr[0] === arr[0].toUpperCase()) {
        return [arr[0].charCodeAt(0) - 38]
    } else {
        return [arr[0].charCodeAt(0) - 96]
    }
})

let sum = 0;
rucksackNumericPrios.forEach(arr => {
    sum+= arr[0]
})

console.log(`Part One Answer: ${sum}`)



