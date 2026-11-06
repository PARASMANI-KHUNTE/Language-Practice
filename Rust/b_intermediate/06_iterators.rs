// Topic: Iterators and Iterator Adaptors
// Concepts Covered:
//   - The Iterator trait and .next()
//   - Consuming adaptors: collect, sum, fold
//   - Iterator adaptors: map, filter, zip, enumerate
//   - Zero-cost abstractions principle

fn main() {
    let v1 = vec![1, 2, 3, 4, 5, 6];

    // Lazy pipeline transformed and collected into a new Vector
    let even_squares: Vec<i32> = v1.iter()
        .filter(|&&x| x % 2 == 0)
        .map(|&x| x * x)
        .collect();

    println!("Even squares: {:?}", even_squares);

    // Sum using consuming adaptor
    let total: i32 = v1.iter().sum();
    println!("Total sum: {}", total);

    // Enumerate
    for (idx, val) in v1.iter().enumerate() {
        println!("Index {}: Value {}", idx, val);
    }
}
