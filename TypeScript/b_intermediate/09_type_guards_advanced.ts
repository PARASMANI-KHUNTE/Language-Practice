/**
 * Topic: Advanced Type Guards & Assertion Functions
 * Concepts Covered:
 *   - Custom user-defined type predicates (`val is Type`)
 *   - Assertion functions (`asserts condition`)
 *   - Discriminated union narrowing with custom checkers
 */

interface Admin {
  type: "admin";
  permissions: string[];
}

interface Customer {
  type: "customer";
  loyaltyPoints: number;
}

type Account = Admin | Customer;

// Custom Type Guard
function isAdmin(account: Account): account is Admin {
  return account.type === "admin";
}

// Assertion function
function assertIsAdmin(account: Account): asserts account is Admin {
  if (account.type !== "admin") {
    throw new Error("Access denied: Admin role required");
  }
}

function processAccount(acc: Account) {
  if (isAdmin(acc)) {
    console.log("Admin permissions:", acc.permissions);
  } else {
    console.log("Customer points:", acc.loyaltyPoints);
  }
}

const userAcc: Admin = { type: "admin", permissions: ["READ", "WRITE"] };
processAccount(userAcc);
