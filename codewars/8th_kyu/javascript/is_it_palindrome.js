// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

// Write a function that checks if a given string (case insensitive) is a palindrome.

// Solution:

function isPalindrome(x) {
    let arrayX = x.toLowerCase().split('')
    for (i = 0; i < (arrayX.length / 2); i++) {
      if (arrayX[i] === arrayX[arrayX.length-1-i]) continue;
      return false
    }
    return true
  }