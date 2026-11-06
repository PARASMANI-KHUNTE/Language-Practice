package main

import "fmt"

func knapsack(weights, values []int, capacity int) int {
    n := len(weights)
    dp := make([][]int, n+1)
    for i := range dp { dp[i] = make([]int, capacity+1) }

    for i := 1; i <= n; i++ {
        for w := 0; w <= capacity; w++ {
            if weights[i-1] <= w {
                valWith := values[i-1] + dp[i-1][w-weights[i-1]]
                valWithout := dp[i-1][w]
                if valWith > valWithout { dp[i][w] = valWith } else { dp[i][w] = valWithout }
            } else {
                dp[i][w] = dp[i-1][w]
            }
        }
    }
    return dp[n][capacity]
}

func main() {
    fmt.Println("Knapsack value:", knapsack([]int{2, 3, 4}, []int{3, 4, 5}, 5))
}
