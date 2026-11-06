/**
 * Topic: Asynchronous Types in TypeScript
 * Concepts Covered:
 *   - Typing Promises (Promise<T>)
 *   - The `Awaited<T>` utility type
 *   - Async Generator and Iterator types
 */

interface ServerResponse<T> {
  data: T;
  latencyMs: number;
}

async function fetchMetrics(): Promise<ServerResponse<{ cpu: number; mem: number }>> {
  return {
    data: { cpu: 22.4, mem: 68.1 },
    latencyMs: 14
  };
}

// Awaited deeply unwraps nested Promise types
type MetricsReturn = Awaited<ReturnType<typeof fetchMetrics>>;
type RawData = MetricsReturn["data"];

fetchMetrics().then(res => console.log("CPU:", res.data.cpu));
