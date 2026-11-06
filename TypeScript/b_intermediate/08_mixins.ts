/**
 * Topic: The Mixin Pattern in TypeScript
 * Concepts Covered:
 *   - Constructor type definition
 *   - Function-based class composition
 *   - Combining multiple traits into a class
 */

type Constructor<T = {}> = new (...args: any[]) => T;

// Mixin 1: Timestamped
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = new Date();
  };
}

// Mixin 2: Activatable
function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActive = false;
    activate() { this.isActive = true; }
    deactivate() { this.isActive = false; }
  };
}

class Task {
  constructor(public title: string) {}
}

// Compose Mixins
const SuperTask = Timestamped(Activatable(Task));
const task = new SuperTask("Write Documentation");
task.activate();
console.log(`Task: ${task.title}, Active: ${task.isActive}, Created: ${task.createdAt.toISOString()}`);
