/**
 * Topic: Advanced Destructuring and Spread Syntax
 * Concepts Covered:
 *   - Nested object & array destructuring
 *   - Renaming variables and setting default values
 *   - Rest parameters and spread operator in object cloning/merging
 */

const userConfig = {
  id: 42,
  profile: {
    firstName: "Elena",
    lastName: "Rostova",
    socials: { twitter: "@elena_dev" }
  },
  roles: ["admin", "developer"]
};

// Deep destructuring with aliases and defaults
const {
  id: userId,
  profile: {
    firstName,
    socials: { twitter: twitterHandle = "N/A" }
  },
  roles: [primaryRole, ...otherRoles]
} = userConfig;

console.log(`User ID: ${userId}, Name: ${firstName}, Twitter: ${twitterHandle}`);
console.log(`Primary Role: ${primaryRole}, Other: ${otherRoles}`);

// Immutably updating nested properties
const updatedConfig = {
  ...userConfig,
  profile: {
    ...userConfig.profile,
    lastName: "Petrov"
  }
};
console.log("Updated config last name:", updatedConfig.profile.lastName);
