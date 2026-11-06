// Topic: Unsafe Pointers and CGO Concepts
package main

import (
    "fmt"
    "unsafe"
)

func main() {
    var val int64 = 42
    ptr := unsafe.Pointer(&val)
    uintPtr := (*uint64)(ptr)

    fmt.Printf("Value accessed via unsafe pointer: %d\n", *uintPtr)
    fmt.Printf("Size of int64: %d bytes\n", unsafe.Sizeof(val))
}
