// Topic: The Type-State Pattern (Compile-Time State Machines)
// Concepts Covered:
//   - Zero-sized types (ZSTs) representing states
//   - Transitioning states at compile time
//   - Making invalid state transitions impossible to compile

// States
struct Disconnected;
struct Connected;

struct Connection<State> {
    address: String,
    state: std::marker::PhantomData<State>,
}

impl Connection<Disconnected> {
    fn new(address: &str) -> Self {
        Connection {
            address: address.to_string(),
            state: std::marker::PhantomData,
        }
    }

    fn connect(self) -> Connection<Connected> {
        println!("Connecting to {}...", self.address);
        Connection {
            address: self.address,
            state: std::marker::PhantomData,
        }
    }
}

impl Connection<Connected> {
    fn send_payload(&self, data: &str) {
        println!("Sent payload '{}' to {}", data, self.address);
    }
}

fn main() {
    let conn = Connection::new("127.0.0.1:8000");
    let active_conn = conn.connect();
    active_conn.send_payload("PING");
}
