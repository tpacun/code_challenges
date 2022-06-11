// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Solution:

function shortcut (string) {
    return string.split('').map((x) => ['a', 'e', 'i', 'o', 'u'].includes(x) ? '':x).join('');
  }