// Topic: Multithreading in Rust (std::thread)
// Concepts Covered:
//   - Spawning threads with thread::spawn
//   - Joining handles to wait for completion
//   - Transferring data ownership across thread boundaries with `move` closures

use std::thread;
use std::time::Duration;

fn main() {
    let captured_data = vec![1, 2, 3, 4];

    // 'move' forces closure to take ownership of captured_data
    let handle = thread::spawn(move || {
        println!("Worker thread running with data: {:?}", captured_data);
        thread::sleep(Duration::from_millis(50));
        "Computation Complete"
    });

    println!("Main thread continuing work...");
    let result = handle.join().unwrap();
    println!("Worker thread finished with: {}", result);
}
