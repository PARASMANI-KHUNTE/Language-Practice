// Topic: Time and Duration Manipulation (time package)
package main

import (
    "fmt"
    "time"
)

func main() {
    now := time.Now()
    fmt.Println("Current time:", now.Format(time.RFC3339))

    // Duration calculation
    future := now.Add(2 * time.Hour)
    diff := future.Sub(now)
    fmt.Println("Duration difference:", diff)

    // Reference time in Go: "Mon Jan 2 15:04:05 MST 2006"
    customFormat := now.Format("2006-01-02 15:04:05")
    fmt.Println("Formatted:", customFormat)
}
