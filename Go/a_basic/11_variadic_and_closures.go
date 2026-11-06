// Topic: Variadic Functions and Closures
package main

import "fmt"

// Variadic function: accepts any count of ints
func sumNumbers(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

// Function closure returning function that retains internal state
func sequenceGenerator(start int) func() int {
    curr := start
    return func() int {
        val := curr
        curr++
        return val
    }
}

func main() {
    fmt.Println("Sum (1, 2, 3, 4, 5):", sumNumbers(1, 2, 3, 4, 5))

    seq := sequenceGenerator(100)
    fmt.Println("Next:", seq())
    fmt.Println("Next:", seq())
    fmt.Println("Next:", seq())
}
