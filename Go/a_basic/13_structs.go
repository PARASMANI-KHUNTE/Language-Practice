// Topic: Structs, Methods, and Embedded Composition
package main

import "fmt"

type Address struct {
    City    string
    Country string
}

type Employee struct {
    Name    string
    Salary  float64
    Address // Embedded struct (composition over inheritance)
}

// Value receiver method (does not mutate caller)
func (e Employee) GetInfo() string {
    return fmt.Sprintf("%s (%s, %s) - $%.2f", e.Name, e.City, e.Country, e.Salary)
}

// Pointer receiver method (mutates caller state)
func (e *Employee) GiveRaise(amount float64) {
    e.Salary += amount
}

func main() {
    emp := Employee{
        Name:   "Marcus Vance",
        Salary: 75000,
        Address: Address{
            City:    "Berlin",
            Country: "Germany",
        },
    }

    fmt.Println(emp.GetInfo())
    emp.GiveRaise(5000)
    fmt.Printf("After raise: $%.2f\n", emp.Salary)
}
