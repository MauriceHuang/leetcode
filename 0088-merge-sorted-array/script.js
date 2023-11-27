// https://leetcode.com/problems/merge-sorted-array/description/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1;
  // Initialize a variable k to store the last index of the 1st array...
  let k = m + n - 1;
  // Create a loop until either of i or j becomes zero...
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      console.log(nums1[i]);
      i--;
    } else {
      nums1[k] = nums2[j];
      console.log(nums2[j]);
      j--;
    }
    k--;
    // Either of i or j is not zero, which means some elements are yet to be merged.
    // Being already in a sorted manner, append them to the 1st array in the front.
  }
  console.log(nums1);
  // While nums1 is the only array left.
  while (i >= 0) {
    nums1[k] = nums1[i];
    k--;
    i--;
  }

  // While nums2 is the only array left.
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
  // Now 1st array has all the elements in the required sorted order...
  console.log(nums1);
  return;
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
