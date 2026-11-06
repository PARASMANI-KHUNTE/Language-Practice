"""
DSA Topic 20: Dynamic Programming (DP)
Concepts Covered:
  - Memoization (Top-down) vs Tabulation (Bottom-up)
  - 0/1 Knapsack Problem
  - Longest Common Subsequence (LCS)
"""

def knapsack_01(weights: list[int], values: list[int], capacity: int) -> int:
    """Bottom-up 2D tabulation for 0/1 Knapsack."""
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                )
            else:
                dp[i][w] = dp[i - 1][w]
    return dp[n][capacity]

def longest_common_subsequence(text1: str, text2: str) -> int:
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]

if __name__ == "__main__":
    vals = [60, 100, 120]
    wts = [10, 20, 30]
    cap = 50
    print("Max Knapsack value:", knapsack_01(wts, vals, cap))
    print("LCS of 'abcde' and 'ace' (expected 3):", longest_common_subsequence("abcde", "ace"))
