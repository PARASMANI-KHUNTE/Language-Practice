/**
 * Topic: TypeScript Decorators (Stage 3 & Experimental)
 * Concepts Covered:
 *   - Class Decorators
 *   - Method Decorators
 *   - Metadata and execution wrapping
 */

// Simple Method Decorator
function LogExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`[Invoking] ${propertyKey} with args:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`[Returned] ${propertyKey} =>`, result);
    return result;
  };
  return descriptor;
}

class CalculationService {
  @LogExecution
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new CalculationService();
calc.add(12, 18);
