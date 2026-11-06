// Topic: Defer, Panic, and Recover Error Handling
package main

import "fmt"

func safeExecute() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("[Recovered from Panic!]:", r)
        }
    }()

    fmt.Println("1. Before panic trigger")
    panic("Critical hardware failure simulation")
    fmt.Println("2. This will never execute")
}

func main() {
    // defer LIFO execution demo
    defer fmt.Println("Deferred execution #3 (runs at function exit)")
    defer fmt.Println("Deferred execution #2")
    fmt.Println("Immediate log #1")

    safeExecute()
    fmt.Println("Program successfully resumed execution after panic recovery.")
}
