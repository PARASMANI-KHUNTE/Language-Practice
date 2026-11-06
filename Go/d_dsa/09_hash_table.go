package main

import "fmt"

func main() {
    // Idiomatic Hash Table in Go
    table := make(map[string]int)
    table["port"] = 8080
    table["workers"] = 4
    fmt.Println("Config:", table)
}
