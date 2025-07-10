/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const count = {};
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for (let n of nums) {
    count[n] = (count[n] || 0) + 1;
  }
  for (let n in count) {
    freq[count[n]].push(parseInt(n));
  }
  const res = [];
  for (let i = nums.length; i >= 0; i--) {
    for (let n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
