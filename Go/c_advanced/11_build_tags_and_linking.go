// Topic: Build Tags and Conditional Compilation
package main

import (
    "fmt"
    "runtime"
)

func main() {
    fmt.Printf("Compiled target OS: %s | Architecture: %s\n", runtime.GOOS, runtime.GOARCH)
}
