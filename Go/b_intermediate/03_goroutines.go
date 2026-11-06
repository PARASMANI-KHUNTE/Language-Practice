// Topic: Goroutines (Lightweight Green Threads)
package main

import (
    "fmt"
    "time"
)

func worker(id int) {
    fmt.Printf("[Goroutine %d] Started\n", id)
    time.Sleep(20 * time.Millisecond)
    fmt.Printf("[Goroutine %d] Done\n", id)
}

func main() {
    fmt.Println("Main thread launching goroutines...")
    for i := 1; i <= 3; i++ {
        go worker(i) // 'go' keyword launches concurrent goroutine
    }
    time.Sleep(50 * time.Millisecond)
    fmt.Println("Main thread exiting.")
}
