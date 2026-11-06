"""
DSA Topic 15: Backtracking: Permutations and N-Queens
Concepts Covered:
  - Choose, Explore, Un-choose paradigm
  - Generating all subsets (Power Set)
  - Generating permutations
"""

def generate_subsets(nums: list[int]) -> list[list[int]]:
    subsets = []
    def backtrack(start: int, current: list[int]):
        subsets.append(list(current))
        for i in range(start, len(nums)):
            current.append(nums[i])      # Choose
            backtrack(i + 1, current)    # Explore
            current.pop()                # Un-choose
    backtrack(0, [])
    return subsets

if __name__ == "__main__":
    elements = [1, 2, 3]
    print(f"Subsets of {elements}:")
    for s in generate_subsets(elements):
        print(" ", s)
