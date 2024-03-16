// https://leetcode.com/problems/length-of-last-word/description/

// Solution 1

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  const sSplit = s.split(" ");
  const sFiltered = sSplit.filter((c) => c.length !== 0);
  return sFiltered[sFiltered.length - 1].length;
};

// Solution 2

// without using built-in functions

var lengthOfLastWord = function (s) {
  let returnString = "";
  for (i = s.length - 1; i >= 0; i--) {
    if (s[i] == " " && returnString.length > 0) {
      return returnString.length;
    } else if (s[i] == " " && returnString.length == 0) {
      continue;
    } else {
      returnString = s[i].concat(returnString);
      if (i == 0) {
        return returnString.length;
      }
    }
  }
};
