// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Solution:
function pigIt(str){
    return str.split(' ').map((x) => {return x.match(/[.,:!?]/) ? x:x.slice(1) + x.slice(0, 1) + 'ay'}).join(' ')
  }