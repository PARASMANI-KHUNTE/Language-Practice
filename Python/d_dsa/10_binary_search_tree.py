"""
DSA Topic 10: Binary Search Tree (BST)
Concepts Covered:
  - BST Node and invariant property (left < node < right)
  - Recursive Insert and Search
  - Traversals: In-Order (sorted order), Pre-Order, Post-Order
  - Tree Height calculation
"""

class TreeNode:
    def __init__(self, val: int):
        self.val = val
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, val: int):
        self.root = self._insert(self.root, val)

    def _insert(self, node: TreeNode | None, val: int) -> TreeNode:
        if not node:
            return TreeNode(val)
        if val < node.val:
            node.left = self._insert(node.left, val)
        elif val > node.val:
            node.right = self._insert(node.right, val)
        return node

    def contains(self, val: int) -> bool:
        curr = self.root
        while curr:
            if val == curr.val:
                return True
            curr = curr.left if val < curr.val else curr.right
        return False

    def inorder(self) -> list[int]:
        res = []
        def dfs(node):
            if node:
                dfs(node.left)
                res.append(node.val)
                dfs(node.right)
        dfs(self.root)
        return res

if __name__ == "__main__":
    bst = BinarySearchTree()
    for x in [50, 30, 70, 20, 40, 60, 80]:
        bst.insert(x)
    print("BST In-Order Traversal (Sorted!):", bst.inorder())
    print("Contains 40?", bst.contains(40))
    print("Contains 99?", bst.contains(99))
