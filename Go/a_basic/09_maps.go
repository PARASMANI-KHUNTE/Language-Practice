// Topic: Hash Maps in Go
package main

import "fmt"

func main() {
    // Map declaration and initialization
    userAges := map[string]int{
        "Alice":   30,
        "Bob":     25,
        "Charlie": 35,
    }

    // Insert / Update
    userAges["Diana"] = 28

    // The comma-ok idiom for safe lookup
    age, exists := userAges["Eve"]
    if exists {
        fmt.Printf("Eve's age: %d\n", age)
    } else {
        fmt.Println("Key 'Eve' does not exist in map.")
    }

    // Deleting keys
    delete(userAges, "Bob")

    fmt.Println("Final Map:", userAges)
}
