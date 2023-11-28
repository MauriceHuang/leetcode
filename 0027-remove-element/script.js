/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      arr = arr + nums.splice(i, 1);
      i = i - 1;
    }
  }
  console.log(arr);
  console.log(nums);
  return nums.length;
};

const length = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

console.log(length);

console.log("helo");
