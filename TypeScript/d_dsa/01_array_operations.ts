/**
 * DSA Topic 01: Typed Array Operations & Sliding Window
 */
function maxSubarraySumK(nums: number[], k: number): number | null {
  if (nums.length < k) return null;
  let currentSum = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = currentSum;

  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log("Max sum k=3:", maxSubarraySumK([2, 1, 5, 1, 3, 2], 3));
