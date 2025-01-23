/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDuplicates = function (nums) {
  const map = {};
  const duplicates = [];
  for (const num of nums) {
    if (map[num] !== undefined) {
      duplicates.push(num);
    }
    map[num] = true;
  }
  return duplicates;
};

const test1 = [4, 3, 2, 7, 8, 2, 3, 1]; // output: [2, 3]
const test2 = [1, 1, 2]; // output: [1]
const test3 = [1]; // output: []

console.log(findDuplicates(test1));
console.log(findDuplicates(test2));
console.log(findDuplicates(test3));
