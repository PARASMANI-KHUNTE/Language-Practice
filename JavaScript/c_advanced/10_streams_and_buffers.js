/**
 * Topic: Streams and Buffers Architecture
 * Concepts Covered:
 *   - Node.js Buffer manipulation
 *   - Readable, Writable, and Transform streams concepts
 *   - Memory-efficient backpressure
 */

// Buffer demonstration (Node.js runtime)
if (typeof Buffer !== "undefined") {
  const buf = Buffer.from("JavaScript Systems Programming", "utf-8");
  console.log("Buffer length (bytes):", buf.length);
  console.log("Hex representation:", buf.toString("hex"));
  console.log("Base64 representation:", buf.toString("base64"));
} else {
  console.log("Running in environment without native Buffer; Uint8Array standard used.");
}
