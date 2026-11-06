// Topic: Generics (Type Parameters)
package main

import "fmt"

// Generic Map function with constraints
func MapSlice[T any, R any](items []T, transform func(T) R) []R {
    result := make([]R, len(items))
    for i, item := range items {
        result[i] = transform(item)
    }
    return result
}

// Comparable constraint
func Contains[T comparable](slice []T, target T) bool {
    for _, item := range slice {
        if item == target {
            return true
        }
    }
    return false
}

func main() {
    nums := []int{1, 2, 3, 4}
    doubled := MapSlice(nums, func(n int) int { return n * 2 })
    fmt.Println("Doubled via Generics:", doubled)

    words := []string{"apple", "orange", "grape"}
    fmt.Println("Contains 'orange':", Contains(words, "orange"))
}
