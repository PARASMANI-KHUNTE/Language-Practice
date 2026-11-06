/**
 * Topic: Fetch API and Network Requests
 * Concepts Covered:
 *   - fetch with async/await
 *   - HTTP methods: GET, POST
 *   - Setting headers and handling JSON response bodies
 *   - AbortController for request cancellation and timeouts
 */

async function mockFetch(url, options = {}) {
  // Mocking fetch network call
  return {
    ok: true,
    status: 200,
    json: async () => ({ endpoint: url, timestamp: Date.now(), method: options.method || 'GET' })
  };
}

async function fetchWithTimeout(url, timeoutMs = 2000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await mockFetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
    const data = await response.json();
    return data;
  } finally {
    clearTimeout(timeoutId);
  }
}

fetchWithTimeout("/api/v1/metrics").then(data => console.log("Fetch result:", data));
