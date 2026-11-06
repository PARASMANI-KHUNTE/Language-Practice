// Topic: File I/O with os and bufio
package main

import (
    "bytes"
    "fmt"
    "io"
)

func main() {
    var inMemoryBuffer bytes.Buffer
    inMemoryBuffer.WriteString("Go Systems Programming\nHigh-performance file I/O.")

    data, err := io.ReadAll(&inMemoryBuffer)
    if err != nil {
        panic(err)
    }
    fmt.Println("Read buffer content:\n" + string(data))
}
