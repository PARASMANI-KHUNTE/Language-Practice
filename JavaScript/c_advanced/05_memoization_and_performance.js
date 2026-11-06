/**
 * Topic: Performance Optimization: Debounce and Throttle
 * Concepts Covered:
 *   - Debouncing implementation (delaying until calm)
 *   - Throttling implementation (limiting execution frequency)
 */

function debounce(func, waitMs) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), waitMs);
  };
}

function throttle(func, intervalMs) {
  let lastExecution = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastExecution >= intervalMs) {
      lastExecution = now;
      func.apply(this, args);
    }
  };
}

const onSearch = debounce(query => console.log(`Searching for: ${query}`), 50);
onSearch("app");
onSearch("apple"); // Only "apple" will execute
