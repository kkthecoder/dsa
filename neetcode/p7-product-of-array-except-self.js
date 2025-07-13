/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const length = nums.length;
  const res = new Array(length).fill(1);

  let prefix = 1;
  for (let i = 0; i < length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
}

console.log(productExceptSelf([1, 2, 4, 6]));
