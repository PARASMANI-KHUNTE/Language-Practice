// Topic: Workload Benchmarking and Profiling (pprof)
package main

import (
    "fmt"
    "runtime"
)

func main() {
    var mem runtime.MemStats
    runtime.ReadMemStats(&mem)
    fmt.Printf("Allocated Memory: %d KB | Number of GC cycles: %d\n", mem.Alloc/1024, mem.NumGC)
}
