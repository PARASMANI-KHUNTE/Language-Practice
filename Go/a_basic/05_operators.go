// Topic: Arithmetic, Relational, Logical, and Bitwise Operators
package main

import "fmt"

func main() {
    a, b := 15, 4

    // Arithmetic
    fmt.Printf("Add: %d | Div: %d | Mod: %d\n", a+b, a/b, a%b)

    // Bitwise
    x, y := 12, 10 // 1100, 1010
    fmt.Printf("Bitwise AND (x & y): %d\n", x&y)
    fmt.Printf("Bitwise OR  (x | y): %d\n", x|y)
    fmt.Printf("Bitwise XOR (x ^ y): %d\n", x^y)
    fmt.Printf("Left shift  (x << 2): %d\n", x<<2)
}
