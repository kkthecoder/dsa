/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    if (numbers[l] + numbers[r] > target) {
      r--;
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
  return [];
}

console.log(twoSum([1, 2, 3, 4], 3));
