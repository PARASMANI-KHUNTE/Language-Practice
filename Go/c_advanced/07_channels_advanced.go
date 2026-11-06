// Topic: Rate Limiting & Semaphore Patterns
package main

import (
    "fmt"
    "time"
)

func main() {
    // Semaphore pattern with buffered channel
    semaphore := make(chan struct{}, 2) // Max 2 concurrent slots

    for i := 1; i <= 4; i++ {
        semaphore <- struct{}{} // Acquire
        go func(id int) {
            defer func() { <-semaphore }() // Release
            fmt.Printf("Task %d executing within semaphore limits\n", id)
            time.Sleep(10 * time.Millisecond)
        }(i)
    }

    time.Sleep(50 * time.Millisecond)
}
