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

const test1 = ["flower", "flow", "flight"]; // output: "fl"
const test2 = ["dog", "racecar", "car"]; // output: ""
const test3 = ["a"]; // output: "a"

console.log(longestCommonPrefix(test1));
console.log(longestCommonPrefix(test2));
console.log(longestCommonPrefix(test3));
