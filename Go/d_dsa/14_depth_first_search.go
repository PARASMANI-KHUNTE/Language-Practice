package main

import "fmt"

func dfs(graph map[string][]string, node string, visited map[string]bool, order *[]string) {
    visited[node] = true
    *order = append(*order, node)
    for _, n := range graph[node] {
        if !visited[n] { dfs(graph, n, visited, order) }
    }
}

func main() {
    g := map[string][]string{"1": {"2", "3"}, "2": {"4"}}
    visited := make(map[string]bool)
    var order []string
    dfs(g, "1", visited, &order)
    fmt.Println("DFS Order:", order)
}
