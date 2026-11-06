// Topic: Shared State Concurrency (Arc and Mutex)
// Concepts Covered:
//   - Atomic Reference Counting (Arc<T>)
//   - Mutual Exclusion lock (Mutex<T>)
//   - RwLock for multiple readers or single writer

use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..5 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter_clone.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final thread-safe count (expected 5): {}", *counter.lock().unwrap());
}
