package main

import "fmt"

func subsets(nums []int) [][]int {
    var result [][]int
    var current []int

    var backtrack func(int)
    backtrack = func(start int) {
        temp := make([]int, len(current))
        copy(temp, current)
        result = append(result, temp)

        for i := start; i < len(nums); i++ {
            current = append(current, nums[i])
            backtrack(i + 1)
            current = current[:len(current)-1]
        }
    }
    backtrack(0)
    return result
}

func main() {
    fmt.Println("Subsets:", subsets([]int{1, 2}))
}
