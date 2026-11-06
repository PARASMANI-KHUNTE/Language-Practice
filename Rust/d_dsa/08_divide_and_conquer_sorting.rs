// DSA Topic 08: Quick Sort
fn quick_sort(arr: &mut [i32]) {
    if arr.len() <= 1 { return; }
    let p = partition(arr);
    quick_sort(&mut arr[..p]);
    quick_sort(&mut arr[p + 1..]);
}

fn partition(arr: &mut [i32]) -> usize {
    let len = arr.len();
    let pivot = arr[len - 1];
    let mut i = 0;
    for j in 0..len - 1 {
        if arr[j] <= pivot {
            arr.swap(i, j);
            i += 1;
        }
    }
    arr.swap(i, len - 1);
    i
}

fn main() {
    let mut nums = [10, 80, 30, 90, 40, 50, 70];
    quick_sort(&mut nums);
    println!("Quick Sorted: {:?}", nums);
}
