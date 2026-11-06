// Topic: Declarative Macros (macro_rules!)
// Concepts Covered:
//   - Writing declarative macros with macro_rules!
//   - Matcher designators ($expr, $ident, $ty)
//   - Repetitions ($( ... ),*)

macro_rules! make_map {
    ( $( $key:expr => $val:expr ),* ) => {
        {
            let mut map = std::collections::HashMap::new();
            $(
                map.insert($key, $val);
            )*
            map
        }
    };
}

fn main() {
    let config = make_map!(
        "host" => "localhost",
        "port" => "8080",
        "env"  => "development"
    );

    println!("Map initialized via custom macro: {:?}", config);
}
