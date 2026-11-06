// Topic: Packages, Imports, and Identifier Visibility
package main

import "fmt"

// Identifiers starting with Uppercase are Exported (Public).
// Identifiers starting with lowercase are unexported (Private to package).

var ExportedConfig = "Active"
var internalSecret = "hidden_key"

func init() {
    // init() runs automatically before main()
    fmt.Println("[Init hook] Package initialized.")
}

func main() {
    fmt.Printf("Config: %s | Secret length: %d\n", ExportedConfig, len(internalSecret))
}
