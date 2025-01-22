/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  strs.sort();
  const first = strs[0];
  const last = strs[strs.length - 1];
  let ans = "";
  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    if (first[i] !== last[i]) {
      return ans;
    }
    ans += first[i];
  }
  return ans;
};
const strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
