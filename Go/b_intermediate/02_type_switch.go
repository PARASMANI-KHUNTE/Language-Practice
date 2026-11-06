// Topic: Type Assertions and Type Switches
package main

import "fmt"

func inspectType(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("Integer with double value: %d\n", v*2)
    case string:
        fmt.Printf("String with length: %d (val: '%s')\n", len(v), v)
    case bool:
        fmt.Printf("Boolean value: %t\n", v)
    default:
        fmt.Printf("Unknown type: %T\n", v)
    }
}

func main() {
    inspectType(42)
    inspectType("Go Concurrency")
    inspectType(true)
    inspectType(3.14159)
}
