// Topic: Conditional Flow (if-else and switch)
package main

import "fmt"

func main() {
    // if with short statement initialization
    if score := 85; score >= 90 {
        fmt.Println("Grade: A")
    } else if score >= 80 {
        fmt.Println("Grade: B")
    } else {
        fmt.Println("Grade: C")
    }

    // Switch case (no automatic fallthrough in Go)
    day := "Friday"
    switch day {
    case "Monday", "Tuesday", "Wednesday", "Thursday":
        fmt.Println("Weekday")
    case "Friday":
        fmt.Println("TGIF! Weekend approaching.")
    case "Saturday", "Sunday":
        fmt.Println("Weekend!")
    default:
        fmt.Println("Unknown day")
    }
}
