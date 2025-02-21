/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return Array.from(new Set([...set1].filter((x) => set2.has(x))));
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
