/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDuplicate = function (nums) {
  const store = {};
  for (const num of nums) {
    store[num] = (store[num] || 0) + 1;
    if (store[num] > 1) {
      return num;
    }
  }
};

const test1 = [1, 3, 4, 2, 2]; // output: 2
const test2 = [3, 1, 3, 4, 2]; // output: 3
const test3 = [3, 3, 3, 3, 3]; // output: 3
const test4 = [1, 3, 4, 2, 2]; // output: 2

console.log(findDuplicate(test1));
console.log(findDuplicate(test2));
console.log(findDuplicate(test3));
console.log(findDuplicate(test4));
