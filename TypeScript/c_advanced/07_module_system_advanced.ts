/**
 * Topic: Advanced Module Systems & Ambient Declarations
 * Concepts Covered:
 *   - Path mappings and barrel exports
 *   - Ambient external module declarations (declare module)
 *   - Typing global variables and browser objects
 */

declare global {
  interface Window {
    __APP_VERSION__: string;
  }
}

export interface SystemService {
  name: string;
  start(): Promise<void>;
}

export class Registry {
  private services = new Map<string, SystemService>();

  register(service: SystemService) {
    this.services.set(service.name, service);
    console.log(`Service '${service.name}' registered.`);
  }
}
