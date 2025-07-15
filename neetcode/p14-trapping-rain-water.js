/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let l = 0;
  let r = height.length - 1;
  let lmax = 0;
  let rmax = 0;
  let res = 0;
  while (l < r) {
    if (height[l] <= height[r]) {
      lmax = Math.max(lmax, height[l]);
      res += lmax - height[l];
      l++;
    } else {
      rmax = Math.max(rmax, height[r]);
      res += rmax - height[r];
      r--;
    }
  }
  return res;
}

console.log(trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
