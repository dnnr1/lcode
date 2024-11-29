/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};

const test1 = 27; // output: true
const test2 = 0; // output: false
const test3 = -1; // output: false

console.log(isPowerOfThree(test1));
console.log(isPowerOfThree(test2));
console.log(isPowerOfThree(test3));
