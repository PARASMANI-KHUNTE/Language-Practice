// ======================================================
// TOPIC: Modules — import/export, declaration files, ambient modules
// ======================================================
// Key Concepts:
// - Named exports and imports
// - Default exports
// - Re-exports and barrel files
// - Declaration files (.d.ts)
// - Ambient module declarations

// --- 1. Named Exports ---
// In a real project, these would be in separate files

// math-utils.ts (conceptual example)
export function addNumbers(a: number, b: number): number {
    return a + b;
}

export function subtractNumbers(a: number, b: number): number {
    return a - b;
}

export const PI = 3.14159265;

export interface MathResult {
    operation: string;
    result: number;
}

// Importing would look like:
// import { addNumbers, subtractNumbers, PI } from './math-utils';

// --- 2. Default Export ---
// Each module can have ONE default export

// logger.ts (conceptual example)
export default class Logger {
    private prefix: string;

    constructor(prefix: string) {
        this.prefix = prefix;
    }

    log(message: string): void {
        console.log(`[${this.prefix}] ${message}`);
    }

    error(message: string): void {
        console.error(`[${this.prefix} ERROR] ${message}`);
    }
}

// Importing default: import Logger from './logger';
// Or: import MyLogger from './logger'; // Can use any name

// --- 3. Mixed Default and Named Exports ---
// user-service.ts (conceptual example)
export interface User {
    id: number;
    name: string;
    email: string;
}

export type UserRole = "admin" | "user" | "guest";

// Default export is the main class/function
// Named exports are supporting types
// import UserService, { User, UserRole } from './user-service';

// --- 4. Renaming Imports ---
// import { addNumbers as add, subtractNumbers as sub } from './math-utils';
// const result = add(5, 3);

// --- 5. Namespace Import ---
// Import everything from a module
// import * as MathUtils from './math-utils';
// MathUtils.addNumbers(5, 3);
// MathUtils.PI

// --- 6. Re-exports ---
// Useful for barrel files (index.ts)

// models/user.ts
export interface UserModel {
    id: number;
    name: string;
}

// models/product.ts
export interface ProductModel {
    id: number;
    title: string;
    price: number;
}

// models/index.ts (barrel file) would contain:
// export { UserModel } from './user';
// export { ProductModel } from './product';
// export type { UserRole } from './user-service'; // type-only re-export

// Then import from the barrel:
// import { UserModel, ProductModel, UserRole } from './models';

// --- 7. Type-Only Imports ---
// Import only the type (removed at compile time)
// import type { User } from './user-service';
// import { type User, UserService } from './user-service'; // inline type import

// This ensures no runtime code is generated for type imports

// --- 8. Declaration Files (.d.ts) ---
// Provide type information for JavaScript libraries

// example: custom-lib.d.ts
// declare module 'custom-lib' {
//     export function doSomething(input: string): number;
//     export interface Config {
//         debug: boolean;
//         version: string;
//     }
//     export default class CustomLib {
//         constructor(config: Config);
//         process(data: unknown): string;
//     }
// }

// --- 9. Ambient Module Declarations ---
// Declare types for modules without type definitions

// For CSS modules:
// declare module '*.css' {
//     const styles: { [className: string]: string };
//     export default styles;
// }

// For image files:
// declare module '*.png' {
//     const value: string;
//     export default value;
// }

// For JSON files:
// declare module '*.json' {
//     const value: any;
//     export default value;
// }

// --- 10. Global Declarations ---
// Declare global variables (e.g., from CDN scripts)
// declare global {
//     interface Window {
//         analytics: {
//             track(event: string, data?: object): void;
//         };
//     }
//     var DEBUG: boolean;
// }

// --- 11. Module Resolution ---
// TypeScript resolves modules using strategies:
// - "node" (default for CommonJS): looks in node_modules
// - "bundler" (for modern bundlers like Vite, webpack)
// - "nodenext" (for Node.js ESM)

// tsconfig.json:
// {
//   "compilerOptions": {
//     "module": "ESNext",
//     "moduleResolution": "bundler",
//     "baseUrl": ".",
//     "paths": {
//       "@/*": ["src/*"],        // Path alias
//       "@utils/*": ["src/utils/*"]
//     }
//   }
// }

// --- 12. Dynamic Imports ---
// Lazy-load modules at runtime
async function loadModule(): Promise<void> {
    // const module = await import('./math-utils');
    // console.log(module.addNumbers(5, 3));
    console.log("Dynamic imports load modules on demand");
}

loadModule();

// --- 13. CommonJS Interop ---
// TypeScript can import CommonJS modules with esModuleInterop
// const fs = require('fs');              // CommonJS style
// import fs from 'fs';                   // With esModuleInterop
// import { readFileSync } from 'fs';     // Named import

// --- Demonstration with actual usage ---
const logger = new Logger("APP");
logger.log("Module system loaded");    // Output: [APP] Module system loaded
logger.error("Something went wrong");  // Output: [APP ERROR] Something went wrong

console.log(`PI = ${PI}`);             // Output: PI = 3.14159265
console.log(addNumbers(10, 20));       // Output: 30

console.log("--- End of Modules ---");
