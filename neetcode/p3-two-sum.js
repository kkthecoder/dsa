/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const iteratedMap = new Map();
  iteratedMap.set(nums[0], 0);

  for (let i = 1; i < nums.length; i++) {
    const numberToBeSearched = target - nums[i];
    if (iteratedMap.has(numberToBeSearched)) {
      return [iteratedMap.get(numberToBeSearched), i];
    }
    iteratedMap.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([3, 4, 5, 6], 7));
