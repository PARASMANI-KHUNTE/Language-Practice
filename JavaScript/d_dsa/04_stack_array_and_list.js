/**
 * DSA Topic 04: Stack (LIFO) and Balanced Parentheses
 */
class Stack {
  constructor() { this.items = []; }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}

function isValidParentheses(s) {
  const stack = new Stack();
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const ch of s) {
    if (Object.values(map).includes(ch)) stack.push(ch);
    else if (map[ch]) {
      if (stack.pop() !== map[ch]) return false;
    }
  }
  return stack.isEmpty();
}

console.log("'{[()]}' is valid?", isValidParentheses("{[()]}"));
console.log("'{[(])}' is valid?", isValidParentheses("{[(])}"));
