/**
 * Topic: Async/Await Syntax and Error Handling
 * Concepts Covered:
 *   - async function declaration and return behavior
 *   - await keyword
 *   - try / catch with async / await
 *   - Parallel execution with Promise.all
 */

const delay = ms => new Promise(res => setTimeout(res, ms));

async function fetchUser(id) {
  await delay(20);
  return { id, username: `user_${id}` };
}

async function fetchOrders(userId) {
  await delay(30);
  return [`ORD-${userId}-1`, `ORD-${userId}-2`];
}

async function getDashboardData(userId) {
  try {
    console.log("Fetching dashboard in parallel...");
    const [user, orders] = await Promise.all([
      fetchUser(userId),
      fetchOrders(userId)
    ]);
    return { user, orders };
  } catch (error) {
    console.error("Failed to load dashboard:", error);
    throw error;
  }
}

getDashboardData(101).then(data => console.log("Dashboard Loaded:", data));
