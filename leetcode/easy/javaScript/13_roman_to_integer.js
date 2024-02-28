// https://leetcode.com/problems/roman-to-integer/description/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const sArr = s.split("");
  let sum = 0;

  sArr.forEach((n, i) => {
    if (romNumObj[n] < romNumObj[sArr[i + 1]]) {
      sum -= romNumObj[n];
    } else {
      sum += romNumObj[n];
    }
  });
  return sum;
};

const romNumObj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
