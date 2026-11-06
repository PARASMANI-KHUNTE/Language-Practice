// DSA Topic 15: Subsets Generator
fn subsets(nums: &[i32]) -> Vec<Vec<i32>> {
    let mut result = Vec::new();
    let mut current = Vec::new();

    fn backtrack(start: usize, nums: &[i32], current: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        result.push(current.clone());
        for i in start..nums.len() {
            current.push(nums[i]);
            backtrack(i + 1, nums, current, result);
            current.pop();
        }
    }

    backtrack(0, nums, &mut current, &mut result);
    result
}

fn main() {
    println!("Subsets of [1, 2]: {:?}", subsets(&[1, 2]));
}
