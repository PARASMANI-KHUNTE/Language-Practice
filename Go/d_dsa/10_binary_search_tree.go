package main

import "fmt"

type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}

func insert(root *TreeNode, val int) *TreeNode {
    if root == nil { return &TreeNode{Val: val} }
    if val < root.Val { root.Left = insert(root.Left, val) } else { root.Right = insert(root.Right, val) }
    return root
}

func main() {
    var root *TreeNode
    root = insert(root, 50)
    insert(root, 30)
    insert(root, 70)
    fmt.Println("BST Root:", root.Val)
}
