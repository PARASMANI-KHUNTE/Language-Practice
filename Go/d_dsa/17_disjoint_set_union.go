package main

import "fmt"

type DSU struct {
    parent []int
}

func NewDSU(n int) *DSU {
    p := make([]int, n)
    for i := range p { p[i] = i }
    return &DSU{parent: p}
}

func (d *DSU) Find(i int) int {
    if d.parent[i] == i { return i }
    d.parent[i] = d.Find(d.parent[i])
    return d.parent[i]
}

func (d *DSU) Union(i, j int) bool {
    rI, rJ := d.Find(i), d.Find(j)
    if rI == rJ { return false }
    d.parent[rI] = rJ
    return true
}

func main() {
    d := NewDSU(5)
    d.Union(0, 1)
    fmt.Println("0 & 1 connected?", d.Find(0) == d.Find(1))
}
