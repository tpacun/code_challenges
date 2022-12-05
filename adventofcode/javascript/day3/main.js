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

// Revision: writing function to be reused in part two

function getNumericPrio(str) {
    return str === str.toUpperCase() ? str.charCodeAt(0) - 38:str.charCodeAt(0) - 96
}

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

// Part Two

// The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

// Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

// vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// And the second group's rucksacks are the next three lines:

// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw
// In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

// Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

// Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?

let badges = [];
rucksackUniques.forEach((set, i) => {
    if (!(i % 3)) {
        set.forEach(char => {
            if (rucksackUniques[i + 1].has(char) && rucksackUniques[i + 2].has(char)) {
                badges.push(char)
            }
        })
    }
})

let partTwoSum = 0;
badges.forEach((str) => {
    partTwoSum += getNumericPrio(str)
})
console.log(`Part Two Answer: ${partTwoSum}`)