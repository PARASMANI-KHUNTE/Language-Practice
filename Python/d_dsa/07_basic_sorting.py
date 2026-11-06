"""
DSA Topic 07: Quadratic Sorting Algorithms: O(n^2)
Concepts Covered:
  - Bubble Sort (with early termination optimization)
  - Selection Sort (minimum element extraction)
  - Insertion Sort (in-place card inserting simulation)
  - Stability and space complexity comparison
"""

def bubble_sort(arr: list) -> list:
    a = arr.copy()
    n = len(a)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
                swapped = True
        if not swapped:
            break
    return a

def selection_sort(arr: list) -> list:
    a = arr.copy()
    n = len(a)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if a[j] < a[min_idx]:
                min_idx = j
        a[i], a[min_idx] = a[min_idx], a[i]
    return a

def insertion_sort(arr: list) -> list:
    a = arr.copy()
    for i in range(1, len(a)):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] > key:
            a[j + 1] = a[j]
            j -= 1
        a[j + 1] = key
    return a

if __name__ == "__main__":
    raw = [64, 25, 12, 22, 11]
    print("Raw:      ", raw)
    print("Bubble:   ", bubble_sort(raw))
    print("Selection:", selection_sort(raw))
    print("Insertion:", insertion_sort(raw))
