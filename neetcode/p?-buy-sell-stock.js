/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let l = 0;
  let r = 1;
  let maxP = 0;

  while (r < prices.length) {
    const profit = prices[r] - prices[l];
    if (profit > 0) {
      maxP = Math.max(maxP, profit);
    } else {
      l = r;
    }
    r++;
  }
  return maxP;
}

console.log(maxProfit([10, 1, 5, 6, 7, 1]));
