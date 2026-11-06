// Topic: Context Package (Cancellation, Timeouts, and Values)
package main

import (
    "context"
    "fmt"
    "time"
)

func performOperation(ctx context.Context) {
    select {
    case <-time.After(100 * time.Millisecond):
        fmt.Println("Operation finished")
    case <-ctx.Done():
        fmt.Println("Operation aborted by context:", ctx.Err())
    }
}

func main() {
    // Context with timeout
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Millisecond)
    defer cancel()

    performOperation(ctx)
}
