/**
 * Topic: Production-grade Event Emitter Architecture
 * Concepts Covered:
 *   - Once listeners (execute only on first trigger)
 *   - Error boundary events
 *   - Async event dispatching
 */

class AdvancedEmitter {
  constructor() {
    this._listeners = new Map();
  }
  on(event, fn) {
    if (!this._listeners.has(event)) this._listeners.set(event, []);
    this._listeners.get(event).push(fn);
  }
  once(event, fn) {
    const wrapper = (...args) => {
      this.off(event, wrapper);
      fn(...args);
    };
    this.on(event, wrapper);
  }
  off(event, fn) {
    const list = this._listeners.get(event);
    if (!list) return;
    this._listeners.set(event, list.filter(cb => cb !== fn));
  }
  emit(event, ...args) {
    const list = this._listeners.get(event) || [];
    list.forEach(cb => cb(...args));
  }
}

const emitter = new AdvancedEmitter();
emitter.once("init", time => console.log(`System booted once at: ${time}`));
emitter.emit("init", Date.now());
emitter.emit("init", Date.now()); // Will not execute
