/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const newStr = s.trim();
  const parsed = parseInt(newStr);
  const MIN = -(2 ** 31);
  const MAX = 2 ** 31 - 1;

  if (isNaN(parsed)) return 0;
  if (parsed > MAX) return MAX;
  if (parsed < MIN) return MIN;

  return parsed;
};

console.log(myAtoi("42")); // output: 42
console.log(myAtoi("   -42")); // output: -42
console.log(myAtoi("1337c0d3")); // output: 1337
console.log(myAtoi("words and 987")); // output: 0
