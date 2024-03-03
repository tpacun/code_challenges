// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let locs = {};
  let uniques = [];

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (locs[val]) {
      locs[val].count += 1;
    } else {
      locs[val] = {
        index: i,
        count: 0,
      };
      uniques.unshift(val);
    }
  }

  for (i of uniques) {
    if (locs[i]) {
      nums.splice(locs[i].index, locs[i].count);
    }
  }

  return uniques.length;
};
