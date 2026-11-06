// DSA Topic 01: Array Operations & Sliding Window
fn max_subarray_sum(nums: &[i32], k: usize) -> Option<i32> {
    if nums.len() < k { return None; }
    let mut sum: i32 = nums[..k].iter().sum();
    let mut max_sum = sum;
    for i in k..nums.len() {
        sum += nums[i] - nums[i - k];
        max_sum = max_sum.max(sum);
    }
    Some(max_sum)
}

fn main() {
    let arr = [2, 1, 5, 1, 3, 2];
    println!("Max subarray sum k=3: {:?}", max_subarray_sum(&arr, 3));
}
