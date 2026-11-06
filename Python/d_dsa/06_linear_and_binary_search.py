"""
DSA Topic 06: Linear Search and Binary Search
Concepts Covered:
  - Linear Search: O(n) time
  - Binary Search (Iterative & Recursive): O(log n) time
  - Finding Lower Bound / Search Insert Position
"""

def linear_search(arr: list, target) -> int:
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1

def binary_search_iterative(arr: list[int], target: int) -> int:
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

def search_insert_position(arr: list[int], target: int) -> int:
    """Finds index where target should be inserted in sorted order."""
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return low

if __name__ == "__main__":
    dataset = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
    print("Target 23 at index:", binary_search_iterative(dataset, 23))
    print("Insert position for 20 (between 16 and 23):", search_insert_position(dataset, 20))
