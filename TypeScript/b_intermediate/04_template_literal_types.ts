/**
 * Topic: Template Literal Types
 * Concepts Covered:
 *   - String union combinations
 *   - Intrinsic string manipulation types (Uppercase, Lowercase, Capitalize)
 *   - Event handler naming conventions
 *   - Type-safe CSS/Route patterns
 */

type HTTPMethod = "GET" | "POST" | "DELETE";
type Endpoint = "/users" | "/orders";

type APIRoute = `${HTTPMethod} ${Endpoint}`;
// "GET /users" | "GET /orders" | "POST /users" | ...

type EventName = "click" | "hover" | "focus";
type EventHandler = `on${Capitalize<EventName>}`;
// "onClick" | "onHover" | "onFocus"

// Type-safe CSS measurement
type Unit = "px" | "rem" | "%";
type CSSLength = `${number}${Unit}`;
const spacing: CSSLength = "16px";
