package main

import "container/list"
import "fmt"

func main() {
    dll := list.New()
    dll.PushBack("Alpha")
    dll.PushBack("Beta")
    fmt.Println("Front element:", dll.Front().Value)
}
