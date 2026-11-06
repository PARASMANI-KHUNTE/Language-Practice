// Topic: Trait Objects & Dynamic Dispatch (`dyn Trait`)
// Concepts Covered:
//   - Static dispatch (monomorphization) vs Dynamic dispatch (vtables)
//   - Using `Box<dyn Trait>` for heterogeneous collections
//   - Object safety requirements

pub trait Draw {
    fn draw(&self);
}

pub struct Screen {
    pub components: Vec<Box<dyn Draw>>,
}

impl Screen {
    pub fn run(&self) {
        for component in &self.components {
            component.draw();
        }
    }
}

struct Button {
    label: String,
}

impl Draw for Button {
    fn draw(&self) {
        println!("Drawing Button: [{}]", self.label);
    }
}

struct SelectBox {
    options: Vec<String>,
}

impl Draw for SelectBox {
    fn draw(&self) {
        println!("Drawing SelectBox with {} options", self.options.len());
    }
}

fn main() {
    let screen = Screen {
        components: vec![
            Box::new(Button { label: String::from("Submit") }),
            Box::new(SelectBox { options: vec![String::from("Yes"), String::from("No")] }),
        ],
    };
    screen.run();
}
