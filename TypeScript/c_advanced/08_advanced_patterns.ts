/**
 * Topic: Type-Level State Machines & Phantom Types
 * Concepts Covered:
 *   - Phantom types (types not used at runtime)
 *   - Enforcing finite state machine transitions at compile time
 */

type Draft = "Draft";
type Published = "Published";

class Document<State> {
  private constructor(public content: string) {}

  static create(content: string): Document<Draft> {
    return new Document<Draft>(content);
  }

  edit(this: Document<Draft>, newContent: string): Document<Draft> {
    this.content = newContent;
    return this;
  }

  publish(this: Document<Draft>): Document<Published> {
    return new Document<Published>(this.content);
  }
}

const doc = Document.create("Initial draft content");
doc.edit("Updated draft content");
const pubDoc = doc.publish();
// pubDoc.edit("Cannot edit published doc!"); // Compile error!
console.log("Published Document:", pubDoc.content);
