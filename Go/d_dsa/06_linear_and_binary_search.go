package main

import "fmt"

func binarySearch(arr []int, target int) int {
    low, high := 0, len(arr)-1
    for low <= high {
        mid := (low + high) / 2
        if arr[mid] == target { return mid }
        if arr[mid] < target { low = mid + 1 } else { high = mid - 1 }
    }
    return -1
}

func main() {
    data := []int{2, 4, 6, 8, 10, 12}
    fmt.Println("Found 8 at index:", binarySearch(data, 8))
}
