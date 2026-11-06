/**
 * Topic: Functional Array Methods
 * Concepts Covered:
 *   - Transforming: map, flatMap
 *   - Filtering: filter
 *   - Accumulating: reduce
 *   - Searching: find, findIndex, includes, some, every
 *   - Iterating: forEach
 */

const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 699, inStock: true },
  { id: 3, name: "Tablet", price: 399, inStock: false },
  { id: 4, name: "Monitor", price: 249, inStock: true }
];

// 1. map
const productNames = products.map(p => p.name);
console.log("Names:", productNames);

// 2. filter
const availableItems = products.filter(p => p.inStock);
console.log("In stock:", availableItems.map(p => p.name));

// 3. reduce
const totalInventoryValue = products.reduce((total, p) => total + p.price, 0);
console.log(`Total Value: $${totalInventoryValue}`);

// 4. find & some / every
const foundPhone = products.find(p => p.name === "Phone");
console.log("Found phone:", foundPhone);

const hasAffordableItem = products.some(p => p.price < 300);
const allInStock = products.every(p => p.inStock);
console.log("Has item < $300:", hasAffordableItem);
console.log("All items in stock:", allInStock);
