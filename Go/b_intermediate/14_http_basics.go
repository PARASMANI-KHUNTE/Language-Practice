// Topic: HTTP Client and Server Foundations (net/http)
package main

import (
    "fmt"
    "net/http"
    "net/http/httptest"
)

func main() {
    // Create test HTTP handler
    handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusOK)
        w.Write([]byte(`{"status":"online","service":"auth"}`))
    })

    // Simulated test server
    ts := httptest.NewServer(handler)
    defer ts.Close()

    // HTTP GET
    resp, err := http.Get(ts.URL)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    fmt.Printf("HTTP Request to %s returned Status: %s\n", ts.URL, resp.Status)
}
