/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result[0] = i;
        result[1] = j;
      }
    }
  }
  if (result.length === 0) {
    result = "Any two numbers in the array can not add up to the target.";
  }
  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-2, 11, 7, 15], 5));
console.log(twoSum([-2, 11, 7, 15], 22));
console.log(twoSum([-2, 11, 7, 15], 19));
