/**
 * Topic: Prototypes and Prototypal Inheritance
 * Concepts Covered:
 *   - __proto__ and Object.getPrototypeOf
 *   - Constructor functions and .prototype
 *   - Object.create inheritance chain
 */

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} makes a sound.`;
};

function Dog(name, breed) {
  Animal.call(this, name); // Call super constructor
  this.breed = breed;
}

// Inherit prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return `${this.name} barks loudly!`;
};

const buddy = new Dog("Buddy", "Golden Retriever");
console.log(buddy.speak());
console.log(buddy.bark());
console.log("Is Dog instance:", buddy instanceof Dog);
console.log("Is Animal instance:", buddy instanceof Animal);
