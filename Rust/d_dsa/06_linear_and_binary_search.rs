// DSA Topic 06: Binary Search
fn binary_search(arr: &[i32], target: i32) -> Option<usize> {
    let mut low = 0;
    let mut high = arr.len();
    while low < high {
        let mid = low + (high - low) / 2;
        if arr[mid] == target {
            return Some(mid);
        } else if arr[mid] < target {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    None
}

fn main() {
    let sorted = [10, 20, 30, 40, 50];
    println!("Found 30 at index: {:?}", binary_search(&sorted, 30));
}
