// Topic: Reading User Input
package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    // Demonstration of buffered scanner
    reader := bufio.NewReader(os.Stdin)
    fmt.Println("Simulating reading from standard input:")
    
    sampleInput := "Alice Gopher\n"
    simulatedReader := bufio.NewReader(strings.NewReader(sampleInput))
    name, _ := simulatedReader.ReadString('\n')
    name = strings.TrimSpace(name)
    fmt.Printf("Hello, %s! Welcome to Go systems programming.\n", name)
    _ = reader
}
