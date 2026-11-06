// Topic: Custom Output Formatting with Display and Debug Traits
// Concepts Covered:
//   - Deriving fmt::Debug for developer output
//   - Implementing fmt::Display manually for user-facing output
//   - Custom pretty-printing and formatting specifiers

use std::fmt;

struct Currency {
    amount: f64,
    code: String,
}

impl fmt::Display for Currency {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:.2} {}", self.amount, self.code)
    }
}

impl fmt::Debug for Currency {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("Currency")
            .field("amount", &self.amount)
            .field("code", &self.code)
            .finish()
    }
}

fn main() {
    let price = Currency {
        amount: 49.999,
        code: String::from("USD"),
    };

    println!("Display: {}", price);
    println!("Debug: {:?}", price);
}
