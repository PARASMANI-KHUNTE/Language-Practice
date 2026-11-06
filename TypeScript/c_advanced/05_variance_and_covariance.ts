/**
 * Topic: Variance: Covariance, Contravariance, and Invariance
 * Concepts Covered:
 *   - Subtyping relationships
 *   - in and out type parameter modifiers (TS 4.7+)
 *   - Function parameter bivariance vs strictFunctionTypes
 */

class Animal { name = "Animal"; }
class Dog extends Animal { bark() { return "Woof"; } }

// Producer: Covariant (out)
interface Producer<out T> {
  produce(): T;
}

// Consumer: Contravariant (in)
interface Consumer<in T> {
  consume(item: T): void;
}

const dogProducer: Producer<Dog> = { produce: () => new Dog() };
const animalProducer: Producer<Animal> = dogProducer; // Covariant assignment valid!

console.log("Produced:", animalProducer.produce().name);
