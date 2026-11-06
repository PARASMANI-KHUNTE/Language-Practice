// Topic: Functional Options Pattern
package main

import "fmt"

type Server struct {
    host    string
    port    int
    timeout int
}

type Option func(*Server)

func WithPort(port int) Option {
    return func(s *Server) { s.port = port }
}

func WithTimeout(timeout int) Option {
    return func(s *Server) { s.timeout = timeout }
}

func NewServer(host string, opts ...Option) *Server {
    srv := &Server{host: host, port: 80, timeout: 30}
    for _, opt := range opts {
        opt(srv)
    }
    return srv
}

func main() {
    srv := NewServer("api.example.com", WithPort(8443), WithTimeout(60))
    fmt.Printf("Server: %+v\n", srv)
}
