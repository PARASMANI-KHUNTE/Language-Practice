/**
 * Topic: Index Types & Lookup Types
 * Concepts Covered:
 *   - keyof operator
 *   - Indexed access types (T[K])
 *   - Dynamic index signatures
 *   - Record type utility
 */

interface APIResponse {
  statusCode: number;
  data: {
    users: Array<{ id: number; name: string }>;
    pagination: { page: number; totalPages: number };
  };
  headers: Record<string, string>;
}

// Indexed access
type UserList = APIResponse["data"]["users"];
type SingleUser = UserList[number];

// Index signature with specific keys
type ErrorDictionary = {
  [errorCode: `ERR_${string}`]: string;
};

const errors: ErrorDictionary = {
  ERR_NETWORK_TIMEOUT: "Connection timed out",
  ERR_AUTH_FAILED: "Invalid credentials"
};
