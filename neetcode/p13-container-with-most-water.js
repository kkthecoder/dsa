/**
 * @param {number[]} heights
 * @return {number}
 */
function maxArea(heights) {
  let l = 0;
  let r = heights.length - 1;
  let result = 0;
  while (l < r) {
    const area = Math.min(heights[l], heights[r]) * (r - l);
    result = Math.max(result, area);
    if (heights[l] <= heights[r]) {
      l++;
    } else {
      r--;
    }
  }
  return result;
}

console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6]));
