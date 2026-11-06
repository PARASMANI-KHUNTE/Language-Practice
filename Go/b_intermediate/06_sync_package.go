// Topic: Synchronization with sync.WaitGroup and sync.Mutex
package main

import (
    "fmt"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    var mu sync.Mutex
    counter := 0

    numWorkers := 5
    wg.Add(numWorkers)

    for i := 1; i <= numWorkers; i++ {
        go func(id int) {
            defer wg.Done()
            for j := 0; j < 1000; j++ {
                mu.Lock()
                counter++
                mu.Unlock()
            }
        }(i)
    }

    wg.Wait() // Block until all workers signal Done
    fmt.Printf("Thread-safe counter value (expected %d): %d\n", numWorkers*1000, counter)
}
