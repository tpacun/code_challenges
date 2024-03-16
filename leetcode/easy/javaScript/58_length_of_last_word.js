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
