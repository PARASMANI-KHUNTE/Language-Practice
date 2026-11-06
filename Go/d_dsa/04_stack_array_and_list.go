package main

import "fmt"

type Stack []rune

func (s *Stack) Push(ch rune) { *s = append(*s, ch) }
func (s *Stack) Pop() rune {
    val := (*s)[len(*s)-1]
    *s = (*s)[:len(*s)-1]
    return val
}

func isBalanced(str string) bool {
    var s Stack
    for _, ch := range str {
        if ch == '(' { s.Push(')') } else if ch == '{' { s.Push('}') } else if ch == '[' { s.Push(']') } else if ch == ')' || ch == '}' || ch == ']' {
            if len(s) == 0 || s.Pop() != ch { return false }
        }
    }
    return len(s) == 0
}

func main() {
    fmt.Println("'{[()]}' is balanced?", isBalanced("{[()]}"))
}
