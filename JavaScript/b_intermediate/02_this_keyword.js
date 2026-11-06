/**
 * Topic: The 'this' Keyword and Function Context
 * Concepts Covered:
 *   - Implicit binding (object methods)
 *   - Explicit binding: call, apply, bind
 *   - Arrow functions and lexical this retention
 */

const user = {
  name: "Alexander",
  greet(punctuation) {
    return `Hello, ${this.name}${punctuation}`;
  }
};

const guest = { name: "Beatrice" };

// Implicit
console.log(user.greet("!"));

// Explicit: call & apply
console.log(user.greet.call(guest, "?"));
console.log(user.greet.apply(guest, ["."]));

// Explicit: bind
const boundGreet = user.greet.bind(guest, "!!");
console.log(boundGreet());

// Lexical this in arrow functions
function Timer() {
  this.seconds = 0;
  // Arrow function inherits 'this' from surrounding scope
  this.tick = () => {
    this.seconds++;
    return this.seconds;
  };
}

const t = new Timer();
console.log("Tick:", t.tick());
