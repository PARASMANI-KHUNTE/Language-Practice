/**
 * Topic: Advanced Error Handling: Cause Chaining & AggregateError
 * Concepts Covered:
 *   - AggregateError for multi-failure reporting
 *   - Error cause property (ES2022) for causality preservation
 *   - Unhandled rejection handlers
 */

function fetchCriticalResource() {
  try {
    throw new Error("Disk read failure");
  } catch (err) {
    // Preserve root cause with { cause: err }
    throw new Error("Unable to boot core service", { cause: err });
  }
}

try {
  fetchCriticalResource();
} catch (outerErr) {
  console.error("Top-level Error:", outerErr.message);
  console.error("Root Cause:", outerErr.cause.message);
}

// AggregateError
const errors = [new Error("Database timeout"), new Error("DNS lookup failure")];
const agg = new AggregateError(errors, "Multiple background tasks failed");
console.log("Aggregate error message:", agg.message, "Errors count:", agg.errors.length);
