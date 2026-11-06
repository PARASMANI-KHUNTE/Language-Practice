// Topic: Error Wrapping with errors.Is and errors.As
package main

import (
    "errors"
    "fmt"
)

var ErrNotFound = errors.New("resource not found")

func fetchRecord(id int) error {
    if id == 0 {
        return fmt.Errorf("fetchRecord(%d) failed: %w", id, ErrNotFound)
    }
    return nil
}

func main() {
    err := fetchRecord(0)
    if errors.Is(err, ErrNotFound) {
        fmt.Println("Detected specific sentinel error ErrNotFound inside wrapped chain!")
    }
}
