/**
 * Topic: Declaration Merging
 * Concepts Covered:
 *   - Interface merging
 *   - Namespace merging with functions/classes
 *   - Augmenting external library types (Module Augmentation)
 */

// Interface Merging (accumulates fields)
interface ClientConfig {
  baseUrl: string;
}

interface ClientConfig {
  timeoutMs: number;
  retryAttempts?: number;
}

const config: ClientConfig = {
  baseUrl: "https://api.gateway.internal",
  timeoutMs: 5000,
  retryAttempts: 3
};

// Namespace & Function merging
function buildUrl(path: string): string {
  return `${buildUrl.base}${path}`;
}

namespace buildUrl {
  export const base = "https://example.com";
}

console.log(buildUrl("/home"));
