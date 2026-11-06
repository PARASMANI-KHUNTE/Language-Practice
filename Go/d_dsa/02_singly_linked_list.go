package main

import "fmt"

type Node struct {
    Val  int
    Next *Node
}

type LinkedList struct {
    Head *Node
}

func (l *LinkedList) Prepend(val int) {
    l.Head = &Node{Val: val, Next: l.Head}
}

func (l *LinkedList) Reverse() {
    var prev *Node
    curr := l.Head
    for curr != nil {
        next := curr.Next
        curr.Next = prev
        prev = curr
        curr = next
    }
    l.Head = prev
}

func main() {
    list := LinkedList{}
    list.Prepend(30)
    list.Prepend(20)
    list.Prepend(10)
    list.Reverse()
    fmt.Println("Reversed list head val:", list.Head.Val)
}
