// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  nums.sort((a, b) => a - b);
  const firstIndex = nums.indexOf(val);
  if (firstIndex >= 0) {
    let count = 1;
    for (let i = firstIndex + 1; i < nums.length; i++) {
      if (nums[i] == val) {
        count++;
      } else {
        break;
      }
    }
    nums.splice(firstIndex, count);
  }
  return nums.length;
};
