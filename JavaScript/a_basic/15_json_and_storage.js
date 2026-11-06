/**
 * Topic: JSON Serialization & Storage Concepts
 * Concepts Covered:
 *   - JSON.stringify (with replacer & spacing)
 *   - JSON.parse (with reviver)
 *   - Deep cloning objects via structuredClone / JSON
 *   - Web Storage (localStorage / sessionStorage) conceptual architecture
 */

const originalConfig = {
  theme: "dark",
  fontSize: 14,
  lastLogin: new Date(),
  shortcuts: ["ctrl+s", "ctrl+p"]
};

// Serialization
const jsonString = JSON.stringify(originalConfig, null, 2);
console.log("Serialized JSON:\n" + jsonString);

// Deserialization with reviver to restore Date object
const parsedConfig = JSON.parse(jsonString, (key, value) => {
  if (key === "lastLogin") return new Date(value);
  return value;
});

console.log("Parsed lastLogin instanceof Date:", parsedConfig.lastLogin instanceof Date);

// Deep Clone
const cloned = structuredClone(originalConfig);
cloned.theme = "light";
console.log("Original theme:", originalConfig.theme, "| Cloned theme:", cloned.theme);
