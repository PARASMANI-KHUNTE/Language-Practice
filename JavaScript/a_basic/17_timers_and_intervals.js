// ============================================================
// TOPIC: Timers and Intervals in JavaScript
// Key Concepts: setTimeout, clearTimeout, setInterval,
//               clearInterval, nested timeouts, practical
//               patterns, requestAnimationFrame concept
// ============================================================

// --- 1. setTimeout — Execute Once After a Delay ---
// setTimeout(callback, delayInMs, ...args)
// Returns a timer ID that can be used to cancel it

console.log("--- setTimeout ---");
console.log("Script starts:", new Date().toLocaleTimeString());

// Basic usage: run a function after 1 second (1000ms)
setTimeout(() => {
    console.log("1) Executed after 1 second");
}, 1000);

// Passing arguments to the callback
setTimeout((name, greeting) => {
    console.log(`2) ${greeting}, ${name}! (after 1.5s)`);
}, 1500, "Alice", "Hello");

// Zero-delay setTimeout: doesn't run immediately!
// It goes to the task queue and runs after the current call stack clears
setTimeout(() => {
    console.log("4) setTimeout(0) — runs after sync code finishes");
}, 0);

console.log("3) This prints BEFORE the setTimeout(0) callback ^");

// --- 2. clearTimeout — Cancel a Pending Timer ---
console.log("\n--- clearTimeout ---");

const timerId = setTimeout(() => {
    console.log("This will NEVER print — it was cancelled!");
}, 2000);

clearTimeout(timerId); // Cancel before it fires
console.log("Timer cancelled with clearTimeout");

// Practical: cancel if a condition is met
function fetchWithTimeout(url, timeoutMs) {
    let didTimeout = false;

    const timer = setTimeout(() => {
        didTimeout = true;
        console.log(`Request to ${url} timed out after ${timeoutMs}ms`);
    }, timeoutMs);

    // Simulating a fast response
    setTimeout(() => {
        if (!didTimeout) {
            clearTimeout(timer);
            console.log(`Response from ${url} received — timeout cleared`);
        }
    }, 500); // Response arrives in 500ms, before timeout
}
fetchWithTimeout("https://api.example.com", 3000);

// --- 3. setInterval — Execute Repeatedly at Fixed Intervals ---
// setInterval(callback, intervalInMs, ...args)
console.log("\n--- setInterval ---");

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval tick #${count}`);
    if (count >= 3) {
        clearInterval(intervalId); // Stop after 3 ticks
        console.log("Interval stopped after 3 ticks\n");
    }
}, 1000);

// --- 4. clearInterval — Stop a Running Interval ---
// Always store the interval ID so you can clean up!

// Countdown timer example
function countdown(seconds) {
    let remaining = seconds;
    console.log(`Countdown: ${remaining}`);

    const id = setInterval(() => {
        remaining--;
        if (remaining > 0) {
            console.log(`Countdown: ${remaining}`);
        } else {
            console.log("Countdown: DONE! 🎉");
            clearInterval(id);
        }
    }, 1000);

    return id; // Return ID in case caller wants to cancel early
}

// Start a 5-second countdown (runs in background)
const countdownId = countdown(5);
// clearInterval(countdownId); // Uncomment to cancel early

// --- 5. Nested Timeouts (Alternative to setInterval) ---
// Using recursive setTimeout instead of setInterval gives more control.
// The next call is only scheduled after the current one completes,
// so there's no risk of overlapping executions.

console.log("\n--- Nested Timeouts ---");

let nestedCount = 0;

function repeatingTask() {
    nestedCount++;
    console.log(`Nested timeout iteration #${nestedCount}`);

    if (nestedCount < 3) {
        // Schedule next execution AFTER current one finishes
        setTimeout(repeatingTask, 1000);
    } else {
        console.log("Nested timeout series complete");
    }
}

// Delayed start
setTimeout(repeatingTask, 6000); // Start after countdown finishes

// --- 6. setInterval vs Nested setTimeout ---
// setInterval: fires every N ms regardless of callback duration
//   |--callback--|    |--callback--|    |--callback--|
//   ^            ^    ^            ^    ^            ^
//   0ms       100ms 200ms              400ms
//
// Nested setTimeout: waits N ms AFTER callback completes
//   |--callback--|    |--callback--|    |--callback--|
//   ^            ^         ^            ^         ^
//   0ms       100ms     200ms       300ms      400ms
//
// Nested setTimeout guarantees at least N ms between executions

// --- 7. Practical Patterns ---

// Pattern 1: Debounce — delay execution until input stops
function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);  // Reset timer on each call
        timerId = setTimeout(() => fn.apply(this, args), delay);
    };
}

const handleSearch = debounce((query) => {
    console.log(`Searching for: "${query}"`);
}, 300);

// Simulating rapid keystrokes — only the last fires
handleSearch("h");
handleSearch("he");
handleSearch("hel");
handleSearch("hell");
handleSearch("hello"); // Only this one will execute after 300ms

// Pattern 2: Throttle — execute at most once per interval
function throttle(fn, interval) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= interval) {
            lastTime = now;
            fn.apply(this, args);
        }
    };
}

const handleScroll = throttle(() => {
    console.log("Scroll handler fired at:", Date.now());
}, 200);

// Pattern 3: Polling — periodically check a condition
function pollForCondition(checkFn, intervalMs, timeoutMs) {
    const startTime = Date.now();

    const pollId = setInterval(() => {
        if (checkFn()) {
            console.log("Polling: condition met!");
            clearInterval(pollId);
        } else if (Date.now() - startTime > timeoutMs) {
            console.log("Polling: timed out");
            clearInterval(pollId);
        } else {
            console.log("Polling: still waiting...");
        }
    }, intervalMs);
}

// Simulate: condition becomes true after ~2.5 seconds
let ready = false;
setTimeout(() => { ready = true; }, 12500);
pollForCondition(() => ready, 1000, 15000);

// --- 8. requestAnimationFrame Concept ---
// Note: requestAnimationFrame is a BROWSER API, not available in Node.js
// It's used for smooth 60fps animations

// Concept (browser code, won't run in Node):
/*
function animate(timestamp) {
    // Update positions, styles, canvas, etc.
    element.style.left = (timestamp / 10) + 'px';

    // Schedule next frame (~16ms for 60fps)
    if (timestamp < 5000) { // Run for 5 seconds
        requestAnimationFrame(animate);
    }
}
requestAnimationFrame(animate);

// Cancel with:
const animId = requestAnimationFrame(callback);
cancelAnimationFrame(animId);
*/

// Why requestAnimationFrame over setInterval for animations:
// 1. Syncs with display refresh rate (usually 60fps)
// 2. Pauses when tab is inactive (saves CPU/battery)
// 3. Browser optimizes rendering — no jank
// 4. Provides high-resolution timestamp

console.log("\n--- Summary ---");
console.log("setTimeout(fn, ms)     → run once after delay");
console.log("setInterval(fn, ms)    → run repeatedly every ms");
console.log("clearTimeout(id)       → cancel a pending timeout");
console.log("clearInterval(id)      → stop a running interval");
console.log("Nested setTimeout      → safer alternative to setInterval");
console.log("requestAnimationFrame  → browser API for smooth animations");
