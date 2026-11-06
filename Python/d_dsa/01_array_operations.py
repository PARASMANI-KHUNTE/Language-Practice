"""
DSA Topic 01: Core Array Operations & Algorithms
Concepts Covered:
  - Array traversal, dynamic resizing
  - Insertion and deletion at arbitrary index
  - Prefix Sum array for O(1) range sum queries
  - Two Pointers technique (reversing, pair sum)
  - Sliding Window maximum sum subarray of size k
"""

def prefix_sum_array(arr: list[int]) -> list[int]:
    """Generates prefix sum array where prefix[i] = sum(arr[0..i])."""
    prefix = [0] * len(arr)
    prefix[0] = arr[0]
    for i in range(1, len(arr)):
        prefix[i] = prefix[i - 1] + arr[i]
    return prefix

def range_sum_query(prefix: list[int], left: int, right: int) -> int:
    """Returns sum of arr[left..right] in O(1) time."""
    if left == 0:
        return prefix[right]
    return prefix[right] - prefix[left - 1]

def two_sum_sorted(arr: list[int], target: int) -> tuple[int, int] | None:
    """Finds two indices in a sorted array that sum to target using Two Pointers."""
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return (left, right)
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None

def max_subarray_sum_fixed_k(arr: list[int], k: int) -> int:
    """Sliding Window: Finds maximum sum of any contiguous subarray of size k."""
    if len(arr) < k:
        raise ValueError("Array length must be at least k")
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

if __name__ == "__main__":
    nums = [2, 4, 1, 7, 5, 3]
    p_sum = prefix_sum_array(nums)
    print("Array:", nums)
    print("Prefix Sum:", p_sum)
    print("Range sum [1..3] (expected 4+1+7=12):", range_sum_query(p_sum, 1, 3))

    sorted_nums = [1, 3, 5, 7, 11, 15]
    print("Two Sum for 18 in", sorted_nums, "=> Indices:", two_sum_sorted(sorted_nums, 18))
    print("Max sum of window k=3 in nums:", max_subarray_sum_fixed_k(nums, 3))
