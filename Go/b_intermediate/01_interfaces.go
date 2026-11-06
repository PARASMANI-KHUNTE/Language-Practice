// Topic: Interfaces & Implicit Implementation
package main

import "fmt"

type Speaker interface {
    Speak() string
}

type Human struct {
    Name string
}

func (h Human) Speak() string {
    return "Hello, my name is " + h.Name
}

type Robot struct {
    Model string
}

func (r Robot) Speak() string {
    return "BEEP BOOP: Model " + r.Model
}

func broadcast(s Speaker) {
    fmt.Println("[Broadcast]:", s.Speak())
}

func main() {
    h := Human{Name: "Ada"}
    r := Robot{Model: "X-900"}
    broadcast(h)
    broadcast(r)
}
