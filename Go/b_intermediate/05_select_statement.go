// Topic: The 'select' Statement for Multi-Channel Coordination
package main

import (
    "fmt"
    "time"
)

func main() {
    c1 := make(chan string)
    c2 := make(chan string)

    go func() {
        time.Sleep(10 * time.Millisecond)
        c1 <- "Response from service 1"
    }()

    go func() {
        time.Sleep(20 * time.Millisecond)
        c2 <- "Response from service 2"
    }()

    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-c1:
            fmt.Println("Select caught:", msg1)
        case msg2 := <-c2:
            fmt.Println("Select caught:", msg2)
        case <-time.After(50 * time.Millisecond):
            fmt.Println("Timeout reached!")
        }
    }
}
