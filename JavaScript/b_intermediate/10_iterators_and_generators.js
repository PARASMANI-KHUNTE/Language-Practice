/**
 * Topic: Iterators and Generators in JavaScript
 * Concepts Covered:
 *   - Iterable protocol (Symbol.iterator)
 *   - Generator functions (function*) and yield keyword
 *   - Bidirectional communication with generator.next(value)
 */

function* rangeGenerator(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

const range = rangeGenerator(1, 10, 3);
console.log("Range values:", [...range]); // 1, 4, 7, 10

// Custom Iterable Object
const inventory = {
  items: ["Keyboard", "Mouse", "Monitor"],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.items.length) {
          return { value: this.items[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const item of inventory) {
  console.log("Inventory item:", item);
}
