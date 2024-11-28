/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[num] = i;
  }
};

const test1 = { nums: [2, 7, 11, 15], target: 9 }; // output: [0, 1]
const test2 = { nums: [3, 2, 4], target: 6 }; //      output: [1, 2]
const test3 = { nums: [3, 3], target: 6 }; //         output: [0, 1]

console.log(twoSum(test1.nums, test1.target));
console.log(twoSum(test2.nums, test2.target));
console.log(twoSum(test3.nums, test3.target));
