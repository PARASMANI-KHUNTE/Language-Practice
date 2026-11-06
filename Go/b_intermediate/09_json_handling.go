// Topic: JSON Encoding & Decoding (encoding/json)
package main

import (
    "encoding/json"
    "fmt"
)

type UserPayload struct {
    ID     int      `json:"id"`
    Name   string   `json:"full_name"`
    Roles  []string `json:"roles"`
    Secret string   `json:"-"` // Omit from JSON output
}

func main() {
    u := UserPayload{
        ID:     99,
        Name:   "Ken Thompson",
        Roles:  []string{"admin", "core"},
        Secret: "unexported_secret",
    }

    // Marshal to JSON
    jsonData, _ := json.MarshalIndent(u, "", "  ")
    fmt.Println("Marshaled JSON:\n" + string(jsonData))

    // Unmarshal back to struct
    var decoded UserPayload
    json.Unmarshal(jsonData, &decoded)
    fmt.Println("Decoded Name:", decoded.Name)
}
