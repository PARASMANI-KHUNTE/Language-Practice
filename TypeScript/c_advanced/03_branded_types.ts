/**
 * Topic: Branded Types & Nominal Typing
 * Concepts Covered:
 *   - Structural vs Nominal type systems
 *   - Creating opaque / branded types using unique symbols
 *   - Safe primitives (UserId vs OrderId, USD vs EUR)
 */

declare const BrandSymbol: unique symbol;

type Brand<T, B> = T & { readonly [BrandSymbol]: B };

type UserId = Brand<string, "UserId">;
type OrderId = Brand<string, "OrderId">;

function createUserId(id: string): UserId {
  return id as UserId;
}

function createOrderId(id: string): OrderId {
  return id as OrderId;
}

function fetchUser(id: UserId) {
  console.log("Fetching user:", id);
}

const uid = createUserId("usr_9918");
const oid = createOrderId("ord_1234");

fetchUser(uid); // Valid
// fetchUser(oid); // Error! Argument of type 'OrderId' is not assignable to 'UserId'
