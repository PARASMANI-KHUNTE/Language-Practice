// Topic: Type Conversions with From, Into, TryFrom, and TryInto
// Concepts Covered:
//   - The From and Into traits (infallible conversion)
//   - Automatic blanket implementation of Into when From is implemented
//   - The TryFrom and TryInto traits for fallible conversions

#[derive(Debug)]
struct Kilometers(f64);

#[derive(Debug)]
struct Miles(f64);

impl From<Miles> for Kilometers {
    fn from(m: Miles) -> Self {
        Kilometers(m.0 * 1.60934)
    }
}

#[derive(Debug)]
struct EvenNumber(i32);

impl TryFrom<i32> for EvenNumber {
    type Error = &'static str;

    fn try_from(val: i32) -> Result<Self, Self::Error> {
        if val % 2 == 0 {
            Ok(EvenNumber(val))
        } else {
            Err("Value is not an even number")
        }
    }
}

fn main() {
    let distance_miles = Miles(10.0);
    // Automatic Into from From implementation
    let distance_km: Kilometers = distance_miles.into();
    println!("Converted distance: {:?}", distance_km);

    let even = EvenNumber::try_from(4);
    println!("TryFrom 4: {:?}", even);

    let odd = EvenNumber::try_from(7);
    println!("TryFrom 7: {:?}", odd);
}
