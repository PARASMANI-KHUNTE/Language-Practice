/**
 * DSA Topic 10: Binary Search Tree (BST)
 */
class TreeNode {
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(public val: number) {}
}

class BST {
  root: TreeNode | null = null;

  insert(val: number): void {
    const node = new TreeNode(val);
    if (!this.root) { this.root = node; return; }
    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (!curr.left) { curr.left = node; break; }
        curr = curr.left;
      } else {
        if (!curr.right) { curr.right = node; break; }
        curr = curr.right;
      }
    }
  }
}

const bst = new BST();
bst.insert(50); bst.insert(25);
console.log("BST root:", bst.root?.val);
