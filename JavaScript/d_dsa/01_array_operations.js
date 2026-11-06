/**
 * DSA Topic 01: Core Array Operations & Algorithms in JavaScript
 * Concepts: Two Pointers, Prefix Sums, Sliding Window
 */

function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return null;
}

function maxSubarraySumK(arr, k) {
  if (arr.length < k) return null;
  let currentSum = 0;
  for (let i = 0; i < k; i++) currentSum += arr[i];
  let maxSum = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

const nums = [1, 3, 5, 8, 12, 19];
console.log("Two Sum sorted (target 13):", twoSumSorted(nums, 13));
console.log("Max sum window k=3:", maxSubarraySumK([2, 1, 5, 1, 3, 2], 3));
