package main

import "fmt"

type Queue []string

func (q *Queue) Enqueue(v string) { *q = append(*q, v) }
func (q *Queue) Dequeue() string {
    v := (*q)[0]
    *q = (*q)[1:]
    return v
}

func main() {
    var q Queue
    q.Enqueue("First")
    q.Enqueue("Second")
    fmt.Println("Dequeued:", q.Dequeue())
}
