// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Solution:

function duplicateEncode(word){
    const wordLower = word.toLowerCase()
    const wordMap = [...new Set(wordLower)]
    let charDict = {}
    wordMap.forEach((c) => {
      if (wordLower.split(c).length > 2) {
        charDict[c] = ')'
      } else {
        charDict[c] = '('
      }
    })
  return wordLower.split('').map(c => charDict[c]).join('')
}
