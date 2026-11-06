// Topic: Strings, Runes, and Byte Slices
package main

import (
    "fmt"
    "strings"
    "unicode/utf8"
)

func main() {
    greeting := "Hello, 世界"

    // String length: len() gives byte count, utf8.RuneCountInString gives character count
    fmt.Printf("Byte length: %d | Rune length: %d\n", len(greeting), utf8.RuneCountInString(greeting))

    // Strings package utilities
    fmt.Println("Contains 'Hello':", strings.Contains(greeting, "Hello"))
    fmt.Println("ToUpper:", strings.ToUpper("gopher"))
    fmt.Println("Split:", strings.Split("a,b,c", ","))
    fmt.Println("Join:", strings.Join([]string{"alpha", "beta"}, " -> "))

    // Iterating runes (Unicode code points)
    for i, runeValue := range greeting {
        fmt.Printf("Byte index %d: %c\n", i, runeValue)
    }
}
