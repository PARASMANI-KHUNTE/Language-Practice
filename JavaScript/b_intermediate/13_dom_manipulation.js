/**
 * Topic: DOM Manipulation and Event Delegation (Conceptual & Web)
 * Concepts Covered:
 *   - Selecting elements: querySelector, querySelectorAll
 *   - Creating and modifying DOM nodes: createElement, appendChild
 *   - Event bubbling, capturing, and event delegation
 */

// Simulation of DOM operations
class MockElement {
  constructor(tag) {
    this.tag = tag;
    this.children = [];
    this.classes = new Set();
    this.attributes = {};
  }
  addClass(name) { this.classes.add(name); return this; }
  append(child) { this.children.push(child); return this; }
}

function buildUserProfileCard(username, role) {
  const card = new MockElement("div").addClass("card").addClass("profile");
  const heading = new MockElement("h3");
  heading.text = username;
  const badge = new MockElement("span").addClass("badge");
  badge.text = role;

  card.append(heading).append(badge);
  return card;
}

const card = buildUserProfileCard("Dan Abramov", "React Core");
console.log("Mock DOM Node Card tag:", card.tag, "Classes:", Array.from(card.classes));
