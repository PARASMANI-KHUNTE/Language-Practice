// Topic: Idiomatic Rust Design Patterns
// Concepts Covered:
//   - The Builder Pattern
//   - The Newtype Pattern (strong typing & safety)
//   - Resource Acquisition Is Initialization (RAII) via Drop trait

struct Server {
    host: String,
    port: u16,
}

struct ServerBuilder {
    host: String,
    port: u16,
}

impl ServerBuilder {
    fn new() -> Self {
        ServerBuilder {
            host: "127.0.0.1".to_string(),
            port: 8080,
        }
    }

    fn host(mut self, host: &str) -> Self {
        self.host = host.to_string();
        self
    }

    fn port(mut self, port: u16) -> Self {
        self.port = port;
        self
    }

    fn build(self) -> Server {
        Server { host: self.host, port: self.port }
    }
}

fn main() {
    let srv = ServerBuilder::new()
        .host("0.0.0.0")
        .port(3000)
        .build();

    println!("Built server listening on {}:{}", srv.host, srv.port);
}
