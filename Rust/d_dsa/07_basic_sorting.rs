// DSA Topic 07: Insertion Sort
fn insertion_sort(arr: &mut [i32]) {
    for i in 1..arr.len() {
        let mut j = i;
        while j > 0 && arr[j - 1] > arr[j] {
            arr.swap(j - 1, j);
            j -= 1;
        }
    }
}

fn main() {
    let mut data = [64, 25, 12, 22, 11];
    insertion_sort(&mut data);
    println!("Sorted array: {:?}", data);
}
