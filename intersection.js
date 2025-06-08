/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const result = [];
  const set = new Set(nums1);
  for (const num of nums2) {
    if (set.has(num)) {
      result.push(num);
      set.delete(num);
    }
  }
  return result;
};

const test1 = {
  nums1: [1, 2, 2, 1],
  nums2: [2, 2],
};
const test2 = {
  nums1: [4, 9, 5],
  nums2: [9, 4, 9, 8, 4],
};

console.log(intersection(test1.nums1, test1.nums2));
console.log(intersection(test2.nums1, test2.nums2));
