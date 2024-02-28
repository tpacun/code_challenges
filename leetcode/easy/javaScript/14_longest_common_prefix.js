// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  const firstWordArr = strs[0].split("");
  let lastCheckedPrefix = "";
  for (i = 1; i <= firstWordArr.length; i++) {
    const prefixToCheck = firstWordArr.slice(0, i).join("");
    for (j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(prefixToCheck)) {
        return lastCheckedPrefix;
      } else if (j + 1 == strs.length) {
        lastCheckedPrefix = prefixToCheck;
      }
    }
  }
  return lastCheckedPrefix;
};
