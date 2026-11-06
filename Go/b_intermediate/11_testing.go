// Topic: Testing Architecture (testing package conventions)
package main

import "fmt"

func Add(a, b int) int {
    return a + b
}

// Table-driven test demonstration structure
type testCase struct {
    name     string
    a, b     int
    expected int
}

func main() {
    fmt.Println("=== Go Table-Driven Test Pattern ===")
    cases := []testCase{
        {"positive numbers", 2, 3, 5},
        {"negative numbers", -1, -4, -5},
        {"zero case", 0, 7, 7},
    }

    for _, tc := range cases {
        actual := Add(tc.a, tc.b)
        status := "PASS"
        if actual != tc.expected {
            status = "FAIL"
        }
        fmt.Printf("[%s] Test '%s': got %d, expected %d\n", status, tc.name, actual, tc.expected)
    }
}
