package main

import "fmt"

type Graph struct {
    Adj map[string][]string
}

func main() {
    g := Graph{Adj: make(map[string][]string)}
    g.Adj["A"] = []string{"B", "C"}
    fmt.Println("Graph initialized:", g.Adj)
}
