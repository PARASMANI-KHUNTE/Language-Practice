// Topic: String and Numeric Type Conversions (strconv)
package main

import (
    "fmt"
    "strconv"
)

func main() {
    // String to Int (Atoi)
    intVal, _ := strconv.Atoi("1024")
    fmt.Printf("Parsed Int: %d (type %T)\n", intVal, intVal)

    // Int to String (Itoa)
    strVal := strconv.Itoa(2048)
    fmt.Printf("Converted String: '%s' (type %T)\n", strVal, strVal)

    // Parse Float
    fVal, _ := strconv.ParseFloat("3.14159", 64)
    fmt.Printf("Parsed Float: %.4f\n", fVal)

    // Parse Bool
    bVal, _ := strconv.ParseBool("true")
    fmt.Println("Parsed Bool:", bVal)
}
