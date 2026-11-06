/**
 * Topic: Type-Safe Fluent Builder with Type States
 * Concepts Covered:
 *   - Tracking builder state at compile time
 *   - Preventing build() call until required fields are specified
 */

interface RequestConfig {
  url: string;
  method: "GET" | "POST";
  timeout: number;
}

class RequestBuilder<TState extends { hasUrl: boolean; hasMethod: boolean }> {
  private config: Partial<RequestConfig> = { timeout: 3000 };

  setUrl(url: string): RequestBuilder<TState & { hasUrl: true }> {
    this.config.url = url;
    return this as any;
  }

  setMethod(method: "GET" | "POST"): RequestBuilder<TState & { hasMethod: true }> {
    this.config.method = method;
    return this as any;
  }

  build(this: RequestBuilder<{ hasUrl: true; hasMethod: true }>): RequestConfig {
    return this.config as RequestConfig;
  }
}

// Fluent usage with compiler enforcement:
const req = new RequestBuilder<{ hasUrl: false; hasMethod: false }>()
  .setUrl("https://api.github.com")
  .setMethod("GET")
  .build();

console.log("Built typed request:", req);
