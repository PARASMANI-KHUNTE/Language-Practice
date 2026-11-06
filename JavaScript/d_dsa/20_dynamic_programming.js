/**
 * DSA Topic 20: Dynamic Programming (0/1 Knapsack & LCS)
 */
function knapsack(wts, vals, cap) {
  const n = wts.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(cap + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= cap; w++) {
      if (wts[i - 1] <= w) {
        dp[i][w] = Math.max(vals[i - 1] + dp[i - 1][w - wts[i - 1]], dp[i - 1][w]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][cap];
}

console.log("Knapsack Max Value:", knapsack([1, 2, 3], [10, 15, 40], 5));
