/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 1;
  /* j tracks the count of unique numbers, by default, if there's an number (according to the constraint, there's minimum 1), then it has minimum 1 unique number.
  j also serves as the position pointer to layout the unique number in their respective position. */
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
