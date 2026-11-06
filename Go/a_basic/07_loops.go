// Topic: Loops in Go (Go has ONLY the 'for' loop)
package main

import "fmt"

func main() {
    // 1. Standard 3-component loop
    for i := 1; i <= 3; i++ {
        fmt.Printf("Standard loop index: %d\n", i)
    }

    // 2. While-style condition loop
    count := 3
    for count > 0 {
        fmt.Printf("Condition loop count: %d\n", count)
        count--
    }

    // 3. Range loop over slice
    items := []string{"Apples", "Bananas", "Cherries"}
    for idx, item := range items {
        fmt.Printf("Item %d: %s\n", idx, item)
    }
}
