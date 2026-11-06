// Topic: Composition and Struct Embedding
package main

import "fmt"

type Reader interface {
    Read() string
}

type Writer interface {
    Write(data string)
}

// Interface embedding
type ReadWriter interface {
    Reader
    Writer
}

type MemoryStore struct {
    buffer string
}

func (m *MemoryStore) Read() string {
    return m.buffer
}

func (m *MemoryStore) Write(data string) {
    m.buffer = data
}

func main() {
    var rw ReadWriter = &MemoryStore{}
    rw.Write("Go interface composition pattern")
    fmt.Println("Read back:", rw.Read())
}
