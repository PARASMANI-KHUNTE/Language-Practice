package main

import "fmt"

func bfs(graph map[string][]string, start string) []string {
    visited := make(map[string]bool)
    queue := []string{start}
    visited[start] = true
    var order []string

    for len(queue) > 0 {
        node := queue[0]
        queue = queue[1:]
        order = append(order, node)
        for _, n := range graph[node] {
            if !visited[n] {
                visited[n] = true
                queue = append(queue, n)
            }
        }
    }
    return order
}

func main() {
    g := map[string][]string{"A": {"B", "C"}, "B": {"D"}}
    fmt.Println("BFS Order:", bfs(g, "A"))
}
