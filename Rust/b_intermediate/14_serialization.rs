// Topic: Data Serialization Architecture
// Concepts Covered:
//   - Serde data model concepts (Serialize / Deserialize)
//   - Representing JSON, TOML, and binary formats
//   - Hand-rolled JSON-style formatting for self-contained execution

#[derive(Debug)]
struct User {
    id: u64,
    username: String,
    active: bool,
}

impl User {
    fn to_json(&self) -> String {
        format!(
            "{{\n  \"id\": {},\n  \"username\": \"{}\",\n  \"active\": {}\n}}",
            self.id, self.username, self.active
        )
    }
}

fn main() {
    let user = User {
        id: 101,
        username: String::from("ferris_crab"),
        active: true,
    };
    println!("Serialized JSON output:\n{}", user.to_json());
}
