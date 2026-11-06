// DSA Topic 04: Stack and Parentheses Matching
fn is_balanced(s: &str) -> bool {
    let mut stack = Vec::new();
    for c in s.chars() {
        match c {
            '(' => stack.push(')'),
            '{' => stack.push('}'),
            '[' => stack.push(']'),
            ')' | '}' | ']' => {
                if stack.pop() != Some(c) { return false; }
            }
            _ => {}
        }
    }
    stack.is_empty()
}

fn main() {
    println!("'{[()]}' is balanced? {}", is_balanced("{[()]}"));
    println!("'{[(])}' is balanced? {}", is_balanced("{[(])}"));
}
