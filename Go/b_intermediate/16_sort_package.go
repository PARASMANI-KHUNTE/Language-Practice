// Topic: Sorting Slices & Custom Comparator (sort package)
package main

import (
    "fmt"
    "sort"
)

type Product struct {
    Name  string
    Price float64
}

func main() {
    nums := []int{45, 12, 85, 32, 89, 39, 69}
    sort.Ints(nums)
    fmt.Println("Sorted Ints:", nums)

    products := []Product{
        {"Keyboard", 89.99},
        {"Mouse", 39.50},
        {"Monitor", 249.00},
    }

    // Sort slice with custom Less function
    sort.Slice(products, func(i, j int) bool {
        return products[i].Price < products[j].Price
    })

    fmt.Println("Products sorted by price (ascending):")
    for _, p := range products {
        fmt.Printf("  %s: $%.2f\n", p.Name, p.Price)
    }
}
