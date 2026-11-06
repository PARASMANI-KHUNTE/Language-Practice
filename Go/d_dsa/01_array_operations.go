package main

import "fmt"

func maxSubarraySum(nums []int, k int) int {
    if len(nums) < k { return 0 }
    sum := 0
    for i := 0; i < k; i++ { sum += nums[i] }
    maxSum := sum
    for i := k; i < len(nums); i++ {
        sum += nums[i] - nums[i-k]
        if sum > maxSum { maxSum = sum }
    }
    return maxSum
}

func main() {
    arr := []int{2, 1, 5, 1, 3, 2}
    fmt.Println("Max window sum (k=3):", maxSubarraySum(arr, 3))
}
