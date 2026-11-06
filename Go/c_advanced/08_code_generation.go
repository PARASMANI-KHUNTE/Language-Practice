// Topic: Code Generation Patterns (go:generate)
package main

import "fmt"

//go:generate stringer -type=Pill
type Pill int

const (
    Placebo Pill = iota
    Aspirin
    Ibuprofen
)

func main() {
    fmt.Println("Code generation with 'go generate' automates repetitive boilerplate.")
}
