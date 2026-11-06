// Topic: Modules and Encapsulation
// Concepts Covered:
//   - Submodules with `mod`
//   - Controlling visibility with `pub` and `pub(crate)`
//   - Bringing paths into scope with `use`

mod network {
    pub mod server {
        pub fn connect() {
            println!("Server connected.");
            super::log_event("Connection accepted");
        }
    }

    fn log_event(msg: &str) {
        println!("[Network Log]: {}", msg);
    }
}

use crate::network::server;

fn main() {
    server::connect();
}
