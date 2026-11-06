/**
 * Topic: Regular Expressions (RegExp)
 * Concepts Covered:
 *   - Regex flags: g (global), i (ignore case), m (multiline)
 *   - Capture groups, named capture groups, and backreferences
 *   - Lookahead (?=...) and lookbehind (?<=...)
 */

const logEntry = "2026-11-06 [ERROR] (AuthService): Invalid credentials for user_99";

const regex = /(?<date>\d{4}-\d{2}-\d{2})\s+\[(?<level>[A-Z]+)\]\s+\((?<service>\w+)\):\s+(?<message>.+)/;

const match = logEntry.match(regex);
if (match) {
  const { date, level, service, message } = match.groups;
  console.log(`Parsed Log -> Date: ${date} | Level: ${level} | Service: ${service}`);
  console.log(`Message: "${message}"`);
}

// Lookaround example: match currency amounts
const text = "Item price is $45.00 and shipping is $5.50";
const prices = text.match(/(?<=\$)\d+\.\d{2}/g);
console.log("Extracted prices without dollar sign:", prices);
