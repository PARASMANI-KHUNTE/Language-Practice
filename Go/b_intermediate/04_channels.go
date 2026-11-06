// Topic: Channels (Communication between Goroutines)
package main

import "fmt"

func main() {
    // Unbuffered channel
    ch := make(chan string)

    go func() {
        ch <- "Ping from worker goroutine" // Send to channel
    }()

    msg := <-ch // Receive from channel (blocking until sent)
    fmt.Println("Received on channel:", msg)

    // Buffered channel (does not block until capacity full)
    bufChan := make(chan int, 2)
    bufChan <- 100
    bufChan <- 200
    close(bufChan)

    for val := range bufChan {
        fmt.Println("Buffered val:", val)
    }
}
