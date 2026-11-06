/**
 * Topic: JavaScript Modules (ES Modules & CommonJS concepts)
 * Concepts Covered:
 *   - Named exports and Default exports
 *   - Dynamic imports with import()
 *   - CommonJS module.exports vs ES import/export
 */

// Simulated module exports
export const API_VERSION = "v2.1";

export function formatUrl(endpoint) {
  return `https://api.example.com/${API_VERSION}${endpoint}`;
}

const defaultLogger = message => console.log(`[MODULE LOG] ${message}`);
export default defaultLogger;

/*
Usage Example:
  import defaultLogger, { API_VERSION, formatUrl } from './09_modules.js';
  defaultLogger(formatUrl('/users'));
*/
