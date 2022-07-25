// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)

// Solution:

function firstNonConsecutive (arr) {
    let newArr = arr.filter((c, i) => c - 1 !== arr[i-1])
    return newArr.length === 0 || newArr.length === 1 ? null:newArr[1]
  }