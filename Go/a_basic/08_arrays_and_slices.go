// Topic: Arrays vs Slices
package main

import "fmt"

func main() {
    // Fixed-size array
    var arr [3]int = [3]int{10, 20, 30}
    fmt.Println("Fixed array:", arr)

    // Dynamic slice backed by array
    slice := make([]string, 0, 4) // length 0, capacity 4
    slice = append(slice, "Go", "Rust", "Python")
    fmt.Printf("Slice: %v | len: %d | cap: %d\n", slice, len(slice), cap(slice))

    // Slicing operator
    subset := slice[1:3]
    fmt.Println("Subset slice:", subset)

    // Copying slices
    copied := make([]string, len(slice))
    copy(copied, slice)
    fmt.Println("Copied slice:", copied)
}
