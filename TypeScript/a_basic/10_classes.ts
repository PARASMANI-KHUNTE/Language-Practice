// ======================================================
// TOPIC: Classes — public/private/protected, implements, abstract
// ======================================================
// Key Concepts:
// - Class declarations with type annotations
// - Access modifiers (public, private, protected)
// - implements for interface compliance
// - Abstract classes and methods
// - Parameter properties shorthand

// --- 1. Basic Class ---
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hi, I'm ${this.name}, age ${this.age}`;
    }
}

const alice = new Person("Alice", 30);
console.log(alice.greet()); // Output: Hi, I'm Alice, age 30

// --- 2. Access Modifiers ---
class BankAccount {
    public owner: string;        // accessible everywhere (default)
    private balance: number;     // accessible only within this class
    protected accountId: string; // accessible in this class and subclasses

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
        this.accountId = `ACC-${Math.random().toString(36).substring(7)}`;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. Balance: ${this.balance}`);
    }

    public getBalance(): number {
        return this.balance;
    }

    private logTransaction(type: string, amount: number): void {
        console.log(`  [LOG] ${type}: ${amount}`);
    }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500);         // Output: Deposited 500. Balance: 1500
console.log(account.owner);  // Output: Alice
// account.balance;           // Error: 'balance' is private
// account.logTransaction();  // Error: 'logTransaction' is private

// --- 3. Parameter Properties (Shorthand) ---
// TypeScript shorthand: modifiers in constructor params auto-create properties
class Employee {
    constructor(
        public name: string,
        private salary: number,
        protected department: string,
        public readonly id: number
    ) {}
    // No explicit assignments needed!

    describe(): string {
        return `${this.name} (${this.department}) - ID: ${this.id}`;
    }
}

const emp = new Employee("Bob", 75000, "Engineering", 101);
console.log(emp.describe()); // Output: Bob (Engineering) - ID: 101
console.log(emp.name);       // Output: Bob
// emp.id = 102;              // Error: readonly

// --- 4. Inheritance ---
class Animal {
    constructor(public name: string) {}

    move(distance: number): void {
        console.log(`${this.name} moved ${distance}m`);
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name); // Must call super()
    }

    bark(): void {
        console.log(`${this.name} says: Woof!`);
    }

    // Override parent method
    move(distance: number): void {
        console.log(`${this.name} runs...`);
        super.move(distance); // Call parent's move
    }
}

const dog = new Dog("Rex", "Labrador");
dog.bark();   // Output: Rex says: Woof!
dog.move(10); // Output: Rex runs... \n Rex moved 10m

// --- 5. Implementing Interfaces ---
interface Printable {
    print(): void;
}

interface Serializable {
    serialize(): string;
}

class Document implements Printable, Serializable {
    constructor(
        public title: string,
        public content: string
    ) {}

    print(): void {
        console.log(`--- ${this.title} ---`);
        console.log(this.content);
    }

    serialize(): string {
        return JSON.stringify({ title: this.title, content: this.content });
    }
}

const doc = new Document("Report", "Annual metrics...");
doc.print();
// Output: --- Report ---
//         Annual metrics...
console.log(doc.serialize());
// Output: {"title":"Report","content":"Annual metrics..."}

// --- 6. Abstract Classes ---
// Cannot be instantiated directly; must be subclassed
abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;

    // Concrete method (shared by all subclasses)
    describe(): string {
        return `Area: ${this.area().toFixed(2)}, Perimeter: ${this.perimeter().toFixed(2)}`;
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class RectangleShape extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// const shape = new Shape(); // Error: Cannot instantiate abstract class
const circle = new Circle(5);
console.log(circle.describe());
// Output: Area: 78.54, Perimeter: 31.42

const rect = new RectangleShape(4, 6);
console.log(rect.describe());
// Output: Area: 24.00, Perimeter: 20.00

// --- 7. Static Members ---
class Counter {
    private static count: number = 0;

    static increment(): void {
        Counter.count++;
    }

    static getCount(): number {
        return Counter.count;
    }
}

Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // Output: 3

// --- 8. Getters and Setters ---
class Temperature {
    private _celsius: number;

    constructor(celsius: number) {
        this._celsius = celsius;
    }

    get fahrenheit(): number {
        return this._celsius * 9 / 5 + 32;
    }

    set fahrenheit(f: number) {
        this._celsius = (f - 32) * 5 / 9;
    }

    get celsius(): number {
        return this._celsius;
    }
}

const temp = new Temperature(100);
console.log(temp.fahrenheit); // Output: 212
temp.fahrenheit = 32;
console.log(temp.celsius);   // Output: 0

// --- 9. Class with Generics ---
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    get size(): number {
        return this.items.length;
    }
}

const numStack = new Stack<number>();
numStack.push(1);
numStack.push(2);
numStack.push(3);
console.log(numStack.pop());  // Output: 3
console.log(numStack.peek()); // Output: 2
console.log(numStack.size);   // Output: 2

console.log("--- End of Classes ---");
