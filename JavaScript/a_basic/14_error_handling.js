/**
 * Topic: Error Handling in JavaScript
 * Concepts Covered:
 *   - try / catch / finally blocks
 *   - Throwing custom errors and Error subclasses
 *   - Error properties: message, name, stack
 */

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function registerUser(username, age) {
  if (!username) {
    throw new ValidationError("Username cannot be empty");
  }
  if (age < 18) {
    throw new RangeError("User must be at least 18 years old");
  }
  return { username, age, status: "Active" };
}

try {
  console.log("Attempting valid registration...");
  const user = registerUser("alice_dev", 24);
  console.log("Registered:", user);

  console.log("Attempting invalid registration...");
  registerUser("", 15);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`[Validation Failed] ${error.message}`);
  } else if (error instanceof RangeError) {
    console.error(`[Age Requirement Error] ${error.message}`);
  } else {
    console.error(`[Unexpected Error]`, error);
  }
} finally {
  console.log("Registration process concluded.");
}
