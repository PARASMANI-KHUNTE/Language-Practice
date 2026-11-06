// Topic: Variables, Constants, and Basic Data Types
package main

import "fmt"

const Pi = 3.14159

func main() {
    // Explicit type declaration
    var age int = 28
    // Short variable declaration (type inference inside functions)
    username := "gopher_master"
    isEmployed := true
    var rating float64 = 4.85

    // Zero values in Go
    var defaultInt int
    var defaultStr string
    var defaultBool bool

    fmt.Printf("User: %s (Age: %d, Rating: %.2f, Employed: %t)\n", username, age, rating, isEmployed)
    fmt.Printf("Zero values -> int: %d, str: '%s', bool: %t\n", defaultInt, defaultStr, defaultBool)
    fmt.Println("Constant Pi:", Pi)
}
