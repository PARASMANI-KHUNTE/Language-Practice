// Topic: Pointers and Memory Addresses
package main

import "fmt"

func modifyValue(val int) {
    val = 999 // Mutates only local copy
}

func modifyPointer(ptr *int) {
    *ptr = 999 // Mutates value in memory address
}

func main() {
    x := 42
    ptr := &x // Address-of operator

    fmt.Printf("x value: %d | memory address: %p\n", x, ptr)
    fmt.Printf("Dereferenced pointer (*ptr): %d\n", *ptr)

    modifyValue(x)
    fmt.Println("After modifyValue:", x)

    modifyPointer(&x)
    fmt.Println("After modifyPointer:", x)
}
