/**
 * Topic: JavaScript Software Design Patterns
 * Concepts Covered:
 *   - Singleton Pattern
 *   - Observer / PubSub Pattern
 *   - Factory Pattern
 */

// PubSub Pattern
class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  on(event, listener) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event).push(listener);
    return () => this.off(event, listener);
  }
  off(event, listener) {
    const listeners = this.events.get(event) || [];
    this.events.set(event, listeners.filter(l => l !== listener));
  }
  emit(event, payload) {
    (this.events.get(event) || []).forEach(fn => fn(payload));
  }
}

const bus = new EventEmitter();
const unsubscribe = bus.on("order:placed", order => {
  console.log(`[Notification] Order received: #${order.id} for $${order.amount}`);
});

bus.emit("order:placed", { id: 9021, amount: 149.99 });
unsubscribe();
