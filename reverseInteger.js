/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = Math.abs(x);
  let reverse = 0;
  const sign = x > 0 ? 1 : -1;
  const limit = 2 ** 31;
  if (num === 0) {
    return 0;
  }
  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (reverse > limit) {
    return 0;
  }
  return reverse * sign;
};

console.log(reverse(123)); // output: 321
console.log(reverse(-123)); // output: -321
console.log(reverse(120)); // output: 21
