/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let count = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    count = Math.max(count, right - left + 1);
  }
  return count;
};

const test1 = "abcabcbb"; // output: 3
const test2 = "bbbbb"; // output: 1
const test3 = "pwwkew"; // output: 3

console.log(lengthOfLongestSubstring(test1));
console.log(lengthOfLongestSubstring(test2));
console.log(lengthOfLongestSubstring(test3));
