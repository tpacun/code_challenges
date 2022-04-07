// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// Solution:

var orderedCount = function (text) {
    let textArray = [...text]
    let counterArray = [];
    let uniqueChars = [...new Set(text)]
    uniqueChars.forEach((c) =>
                        counterArray.push([c,
                                          textArray.filter(x => x === c).length]))
    return counterArray;
  }