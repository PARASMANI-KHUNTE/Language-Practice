// Topic: Regular Expressions (regexp package)
package main

import (
    "fmt"
    "regexp"
)

func main() {
    re := regexp.MustCompile(`(?P<service>\w+)\[(?P<pid>\d+)\]`)
    log := "auth_service[1248]: User authentication successful"

    match := re.FindStringSubmatch(log)
    if match != nil {
        fmt.Printf("Service: %s | PID: %s\n", match[1], match[2])
    }
}
