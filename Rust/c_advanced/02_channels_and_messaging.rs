// Topic: Message Passing Concurrency (std::sync::mpsc)
// Concepts Covered:
//   - Multi-producer, single-consumer channels
//   - Non-blocking vs blocking receive (recv vs try_recv)
//   - Cloning senders for multiple producer threads

use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();

    // Spawn 2 producers
    for id in 1..=2 {
        let thread_tx = tx.clone();
        thread::spawn(move || {
            let msg = format!("Message from Producer #{}", id);
            thread_tx.send(msg).unwrap();
        });
    }
    drop(tx); // Drop original sender so receiver knows when channel closes

    // Consume messages
    for received in rx {
        println!("[Received]: {}", received);
    }
}
