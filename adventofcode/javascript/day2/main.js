// Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

// The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

// The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

// Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

// For example, suppose you were given the following strategy guide:

// A Y
// B X
// C Z
// This strategy guide predicts and recommends the following:

// In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
// In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
// The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
// In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

// What would your total score be if everything goes exactly according to your strategy guide?

const fs = require('fs')

const inputText = fs.readFileSync('./input.txt').toString()
const arrayRounds = inputText.split('\r\n')

const arrayChoices = arrayRounds.map((str) => {return str.split(' ')})

// Rock: A, X, 1pt
// Paper: B, Y, 2pt
// Scissors: C, Z, 3pt
// 0pt loss, 3pt draw, 6pt win
let sums = 0

function pointGetter(arr) {
    // Points for choice
    // total += arr[1] === 'X' ? 1:arr[1] === 'Y' ? 2:3

    const results = {
        'X': {
            'A': 4,
            'B': 1,
            'C': 7
        },
        'Y': {
            'A': 8,
            'B': 5,
            'C': 2
        },
        'Z': {
            'A': 3,
            'B': 9,
            'C': 6
        }
    }
    return results[arr[1]][arr[0]]
}

arrayChoices.forEach((arr) => {
    const pointPerRound = pointGetter(arr)
    sums += pointPerRound
})

console.log(`Part 1: ${sums}`)

// "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

// The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

// In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
// In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
// In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
// Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

function choicePointGetter (arr) {
    points = {
        // X, 0 points
        // Y, 3 points
        // Z, 6 points
        // Rock: A, 1pt
        // Paper: B, 2pt
        // Scissors: C, 3pt

        'X': {
            'A': 3,
            'B': 1,
            'C': 2
        },
        'Y': {
            'A': 4,
            'B': 5,
            'C': 6
        },
        'Z': {
            'A': 8,
            'B': 9,
            'C': 7
        }
    }
    return points[arr[1]][arr[0]]
}

let sumsPartTwo = 0
arrayChoices.forEach((arr) => {
    const pointPerRound = choicePointGetter(arr)
    sumsPartTwo += pointPerRound
})

console.log(`Part 2: ${sumsPartTwo}`)