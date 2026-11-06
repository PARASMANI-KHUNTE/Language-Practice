// ============================================================
// Topic: tsconfig.json Deep Dive
// Key Concepts: Compiler options explained with code examples
//   showing how each option affects compilation behavior
// ============================================================
// This file demonstrates the EFFECTS of tsconfig.json options.
// Each section explains an option with before/after examples.
// NOTE: This file is meant to be READ for learning. Some
// commented-out lines intentionally show errors/behaviors.
// ============================================================

// ============================================================
// tsconfig.json STRUCTURE OVERVIEW
// ============================================================
// {
//   "compilerOptions": { ... },   // How TypeScript compiles
//   "include": [...],             // Which files to compile
//   "exclude": [...],             // Which files to skip
//   "extends": "..."              // Inherit from another config
// }

// ------------------------------------------------------------
// 1. target — ECMAScript version for output JS
// ------------------------------------------------------------
// Controls which JS features are downleveled vs kept as-is.
//
// "target": "ES5"  → arrow functions compiled to function(){}
// "target": "ES6"  → arrow functions kept as =>
// "target": "ES2020" → optional chaining ?. kept as-is
// "target": "ESNext" → latest features, no downleveling

// With target: "ES5" — this gets compiled to:
//   var greet = function(name) { return "Hello, " + name; };
// With target: "ES6" or higher — kept as-is:
const greetArrow = (name: string) => `Hello, ${name}`;

// With target < "ES2020", optional chaining is compiled away:
const obj = { nested: { value: 42 } };
const val = obj?.nested?.value;  // Kept as-is in ES2020+, polyfilled in ES5

// ------------------------------------------------------------
// 2. module — Module system for output
// ------------------------------------------------------------
// "module": "commonjs"  → const x = require("x"); module.exports = ...
// "module": "ESNext"    → import x from "x"; export ...
// "module": "NodeNext"  → Node.js native ESM resolution
// "module": "AMD"       → define([], function() { ... })

// Your source code always uses ES import/export syntax:
// import { readFile } from "fs";        // TypeScript source
// export const API_KEY = "abc123";

// With "module": "commonjs", the output becomes:
//   const fs_1 = require("fs");
//   exports.API_KEY = "abc123";

// With "module": "ESNext", the output stays:
//   import { readFile } from "fs";
//   export const API_KEY = "abc123";

// ------------------------------------------------------------
// 3. strict — Master switch for all strict checks
// ------------------------------------------------------------
// "strict": true enables ALL of these at once:
//   strictNullChecks, noImplicitAny, strictFunctionTypes,
//   strictBindCallApply, strictPropertyInitialization,
//   noImplicitThis, alwaysStrict, useUnknownInCatchVariables

// You can also enable/disable them individually:
// "strict": true,
// "noImplicitAny": false   ← overrides just this one sub-flag

// ------------------------------------------------------------
// 4. strictNullChecks — null/undefined handling
// ------------------------------------------------------------
// WITHOUT strictNullChecks (false):
//   let name: string = null;      // OK — no error ⚠️
//   let age: number = undefined;  // OK — no error ⚠️

// WITH strictNullChecks (true — RECOMMENDED):
//   let name: string = null;      // ERROR ✅
//   let age: number = undefined;  // ERROR ✅
//   let name: string | null = null; // OK — explicit

function findUser(id: number): string | undefined {
    const users: Record<number, string> = { 1: "Alice", 2: "Bob" };
    return users[id]; // May be undefined — strictNullChecks forces you to handle it
}

const userName = findUser(3);
// userName.toUpperCase();       // ERROR with strictNullChecks ✅
if (userName) {
    console.log(userName.toUpperCase()); // OK — narrowed
}

// ------------------------------------------------------------
// 5. noImplicitAny — Require explicit types
// ------------------------------------------------------------
// WITHOUT noImplicitAny (false):
//   function add(a, b) { return a + b; }   // Parameters are 'any' — no error

// WITH noImplicitAny (true — RECOMMENDED):
//   function add(a, b) { return a + b; }   // ERROR: Parameter 'a' implicitly has 'any' type
//   function add(a: number, b: number) { return a + b; }  // OK — explicit ✅

// This also applies to variables where type can't be inferred:
// let data;          // Implicit 'any' — ERROR with noImplicitAny
let data: unknown;    // Explicit type — OK ✅

// ------------------------------------------------------------
// 6. esModuleInterop — CommonJS/ESM interop
// ------------------------------------------------------------
// Many npm packages use CommonJS (module.exports = ...).
// Without esModuleInterop, importing them requires:
//   import * as express from "express";    // Ugly, non-standard

// WITH esModuleInterop (true — RECOMMENDED):
//   import express from "express";          // Clean, standard ✅
// It adds __importDefault and __importStar helper functions
// to the compiled output for compatibility.

// Also enables allowSyntheticDefaultImports automatically.

// ------------------------------------------------------------
// 7. resolveJsonModule — Import .json files
// ------------------------------------------------------------
// WITHOUT resolveJsonModule:
//   import config from "./config.json";    // ERROR: Cannot find module

// WITH resolveJsonModule (true):
//   import config from "./config.json";    // OK ✅
//   console.log(config.port);              // Fully typed!

// TypeScript infers the JSON structure as a type:
// config.json: { "port": 3000, "host": "localhost" }
// Inferred type: { port: number; host: string }

// ------------------------------------------------------------
// 8. outDir & rootDir — Output and source directories
// ------------------------------------------------------------
// "rootDir": "./src"     — Root of your source files
// "outDir": "./dist"     — Where compiled .js files go

// Project structure:
//   src/
//     index.ts          → compiled to dist/index.js
//     utils/helpers.ts  → compiled to dist/utils/helpers.js

// Without outDir, .js files are placed next to .ts files (messy!)
// rootDir controls the directory structure mirrored in outDir

// ------------------------------------------------------------
// 9. include & exclude — File selection
// ------------------------------------------------------------
// "include": ["src/**/*"]           — Compile everything in src/
// "exclude": ["node_modules", "dist", "**/*.test.ts"]

// Glob patterns:
//   *    — matches any filename
//   **   — matches any directory depth
//   ?    — matches a single character

// Common setup:
// "include": ["src/**/*.ts", "src/**/*.tsx"],
// "exclude": ["node_modules", "dist", "**/*.spec.ts"]

// ------------------------------------------------------------
// 10. paths & baseUrl — Module path aliases
// ------------------------------------------------------------
// "baseUrl": "./src",
// "paths": {
//   "@utils/*": ["utils/*"],
//   "@models/*": ["models/*"],
//   "@config": ["config/index"]
// }

// WITHOUT paths:
//   import { helper } from "../../../utils/helper";  // Ugly deep relative imports

// WITH paths:
//   import { helper } from "@utils/helper";           // Clean alias ✅

// IMPORTANT: paths only affect TypeScript compilation.
// For runtime, you also need a bundler (webpack/vite) or
// ts-node with tsconfig-paths to resolve these aliases.

// ------------------------------------------------------------
// 11. declaration — Generate .d.ts type definition files
// ------------------------------------------------------------
// "declaration": true

// When building a library, this generates .d.ts files alongside .js:
//   dist/index.js       — JavaScript code
//   dist/index.d.ts     — Type definitions for consumers

// Example — your source:
export function add(a: number, b: number): number { return a + b; }

// Generated index.d.ts:
//   export declare function add(a: number, b: number): number;

// Related: "declarationMap": true generates .d.ts.map for
// "Go to Definition" to jump to .ts source instead of .d.ts

// ------------------------------------------------------------
// 12. sourceMap — Debugging support
// ------------------------------------------------------------
// "sourceMap": true

// Generates .js.map files that map compiled JS back to TS source.
// This allows debuggers (Chrome DevTools, VS Code) to show your
// original TypeScript code instead of compiled JavaScript.

// Output files:
//   dist/index.js       — Compiled JavaScript
//   dist/index.js.map   — Source map (TS ↔ JS mapping)

// "inlineSourceMap": true — embeds the map inside .js (no separate file)
// "inlineSources": true   — includes TS source in the source map

// ------------------------------------------------------------
// 13. lib — Available type definitions
// ------------------------------------------------------------
// "lib" controls which built-in type definitions are available.
// Must match or exceed your "target".

// "lib": ["ES2020"]           — ES2020 types only (no DOM)
// "lib": ["ES2020", "DOM"]    — ES2020 + browser APIs (document, window)
// "lib": ["ESNext", "DOM", "DOM.Iterable"]

// WITHOUT "DOM" in lib:
//   document.getElementById("app");   // ERROR: Cannot find 'document'

// WITH "DOM" in lib:
//   document.getElementById("app");   // OK ✅

// For Node.js projects, you typically DON'T include "DOM":
// "lib": ["ES2022"]
// And install @types/node for Node.js globals instead.

// ------------------------------------------------------------
// 14. PRACTICAL: Recommended tsconfig.json Configurations
// ------------------------------------------------------------

// === For a Node.js Backend Project ===
// {
//   "compilerOptions": {
//     "target": "ES2022",
//     "module": "NodeNext",
//     "moduleResolution": "NodeNext",
//     "strict": true,
//     "esModuleInterop": true,
//     "outDir": "./dist",
//     "rootDir": "./src",
//     "declaration": true,
//     "sourceMap": true,
//     "lib": ["ES2022"],
//     "skipLibCheck": true,
//     "forceConsistentCasingInFileNames": true
//   },
//   "include": ["src/**/*"],
//   "exclude": ["node_modules", "dist"]
// }

// === For a React Frontend Project ===
// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "module": "ESNext",
//     "moduleResolution": "bundler",
//     "strict": true,
//     "jsx": "react-jsx",
//     "esModuleInterop": true,
//     "lib": ["ES2020", "DOM", "DOM.Iterable"],
//     "outDir": "./dist",
//     "baseUrl": "./src",
//     "paths": { "@/*": ["./*"] },
//     "skipLibCheck": true
//   },
//   "include": ["src"]
// }

// === For a Library / npm Package ===
// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "module": "ESNext",
//     "strict": true,
//     "declaration": true,
//     "declarationMap": true,
//     "sourceMap": true,
//     "outDir": "./dist",
//     "rootDir": "./src",
//     "esModuleInterop": true
//   },
//   "include": ["src"],
//   "exclude": ["**/*.test.ts"]
// }

// ------------------------------------------------------------
// 15. BONUS OPTIONS — Quick Reference
// ------------------------------------------------------------

// "skipLibCheck": true
//   → Skip type-checking .d.ts files (faster builds)

// "forceConsistentCasingInFileNames": true
//   → Error if import casing doesn't match filesystem
//   → import "./MyFile" vs file is "myfile.ts" → ERROR ✅

// "noUnusedLocals": true
//   → Error on declared-but-unused variables

// "noUnusedParameters": true
//   → Error on unused function parameters

// "noFallthroughCasesInSwitch": true
//   → Error on switch case fall-through without break

// "isolatedModules": true
//   → Required for tools like Babel, esbuild, swc
//   → Ensures each file can be transpiled independently
//   → Disallows const enums, namespace merging across files

// "verbatimModuleSyntax": true (TS 5.0+)
//   → Replaces older importsNotUsedAsValues
//   → Forces you to write: import type { X } from "..."
//     for type-only imports (tree-shaking friendly)

// Demonstration: code that relies on strict options
function demo(): void {
    // strictNullChecks in action:
    const map = new Map<string, number>();
    const value = map.get("key"); // Type: number | undefined
    // value.toFixed(2);            // ERROR with strictNullChecks
    if (value !== undefined) {
        console.log(value.toFixed(2)); // OK — narrowed to number
    }

    // noImplicitAny would catch this:
    // function process(x) { return x; }  // ERROR: 'x' implicitly has 'any'
    function process(x: unknown): string { return String(x); } // OK ✅

    console.log(process("tsconfig mastered!"));
}

demo();
// Output: tsconfig mastered!

console.log("\n=== tsconfig.json Deep Dive — Practice Complete ===");
