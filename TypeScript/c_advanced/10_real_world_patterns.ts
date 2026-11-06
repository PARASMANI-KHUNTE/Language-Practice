/**
 * Topic: Production Real-World Patterns: Typed Event Bus & DI Container
 * Concepts Covered:
 *   - Strongly-typed Event Emitter
 *   - Dependency Injection container with Token types
 */

type EventMap = {
  "user:login": { userId: string; timestamp: number };
  "order:created": { orderId: number; total: number };
};

class TypedEventBus<TMap extends Record<string, any>> {
  private listeners: { [K in keyof TMap]?: Array<(data: TMap[K]) => void> } = {};

  on<K extends keyof TMap>(event: K, listener: (data: TMap[K]) => void): void {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event]!.push(listener);
  }

  emit<K extends keyof TMap>(event: K, data: TMap[K]): void {
    const handlers = this.listeners[event] || [];
    handlers.forEach(h => h(data));
  }
}

const bus = new TypedEventBus<EventMap>();
bus.on("user:login", data => {
  console.log(`User ${data.userId} logged in at ${data.timestamp}`);
});

bus.emit("user:login", { userId: "usr_441", timestamp: Date.now() });
