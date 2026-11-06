// Topic: Functions & Multiple Return Values
package main

import (
    "errors"
    "fmt"
)

// Function with multiple return values (idiomatic result + error)
func safeDivide(numerator, denominator float64) (float64, error) {
    if denominator == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return numerator / denominator, nil
}

// Named return values
func rectangleMetrics(w, h float64) (area, perimeter float64) {
    area = w * h
    perimeter = 2 * (w + h)
    return // Naked return
}

func main() {
    res, err := safeDivide(10, 2)
    if err == nil {
        fmt.Println("10 / 2 =", res)
    }

    _, errDiv0 := safeDivide(10, 0)
    if errDiv0 != nil {
        fmt.Println("Handled expected error:", errDiv0)
    }

    a, p := rectangleMetrics(5, 4)
    fmt.Printf("Rectangle area: %.1f, perimeter: %.1f\n", a, p)
}
