/**
 * DSA Topic 10: Binary Search Tree (BST)
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() { this.root = null; }
  insert(val) {
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
  inorder() {
    const res = [];
    const traverse = n => { if (n) { traverse(n.left); res.push(n.val); traverse(n.right); } };
    traverse(this.root);
    return res;
  }
}

const bst = new BST();
[40, 20, 60, 10, 30, 50, 70].forEach(v => bst.insert(v));
console.log("BST Inorder Traversal:", bst.inorder());
