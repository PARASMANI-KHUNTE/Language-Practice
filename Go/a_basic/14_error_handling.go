// Topic: Idiomatic Error Handling in Go
package main

import (
    "errors"
    "fmt"
)

type CustomError struct {
    Op  string
    Err error
}

func (e *CustomError) Error() string {
    return fmt.Sprintf("operation '%s' failed: %v", e.Op, e.Err)
}

func performTask(fail bool) error {
    if fail {
        return &CustomError{
            Op:  "DatabaseSync",
            Err: errors.New("connection timeout"),
        }
    }
    return nil
}

func main() {
    if err := performTask(true); err != nil {
        fmt.Println("Error caught:", err)
    }
}
