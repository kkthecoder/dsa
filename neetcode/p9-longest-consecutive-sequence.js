/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const numsSet = new Set(nums);
  let longest = 0;

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let length = 1;
      while (numsSet.has(num + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
