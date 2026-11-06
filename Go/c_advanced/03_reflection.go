// Topic: Reflection (reflect package)
package main

import (
    "fmt"
    "reflect"
)

type ServerMetadata struct {
    Host string `config:"host"`
    Port int    `config:"port"`
}

func main() {
    meta := ServerMetadata{Host: "127.0.0.1", Port: 8080}
    t := reflect.TypeOf(meta)
    v := reflect.ValueOf(meta)

    fmt.Println("Struct Type:", t.Name())
    for i := 0; i < t.NumField(); i++ {
        field := t.Field(i)
        val := v.Field(i)
        tag := field.Tag.Get("config")
        fmt.Printf("Field: %s | Type: %s | Tag: %s | Val: %v\n", field.Name, field.Type, tag, val)
    }
}
