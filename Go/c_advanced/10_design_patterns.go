// Topic: Middleware Pattern
package main

import "fmt"

type Handler func(string)

func LoggerMiddleware(next Handler) Handler {
    return func(req string) {
        fmt.Printf("[LOG] Incoming request: %s\n", req)
        next(req)
        fmt.Println("[LOG] Completed request.")
    }
}

func main() {
    coreHandler := func(req string) {
        fmt.Println("Processing payload:", req)
    }

    piped := LoggerMiddleware(coreHandler)
    piped("GET /healthz")
}
