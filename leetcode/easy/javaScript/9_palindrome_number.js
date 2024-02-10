/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let reverse = 0;
  let tmp = x;
  while (tmp != 0) {
    const remainder = tmp % 10;
    reverse = reverse * 10 + remainder;
    tmp = Math.floor(tmp / 10);
  }
  return x == reverse;
};
