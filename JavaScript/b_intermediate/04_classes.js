/**
 * Topic: ES6+ Classes and Object-Oriented Patterns
 * Concepts Covered:
 *   - class, constructor, extends, super
 *   - Private fields (#field) and static members
 *   - Getters and setters
 */

class Vehicle {
  #vin; // Truly private field

  constructor(make, model, vin) {
    this.make = make;
    this.model = model;
    this.#vin = vin;
  }

  static getCategory() {
    return "Transportation";
  }

  get details() {
    return `${this.make} ${this.model}`;
  }

  getVinLastFour() {
    return this.#vin.slice(-4);
  }
}

class ElectricCar extends Vehicle {
  constructor(make, model, vin, batteryKwh) {
    super(make, model, vin);
    this.batteryKwh = batteryKwh;
  }

  get details() {
    return `${super.details} [${this.batteryKwh} kWh]`;
  }
}

const tesla = new ElectricCar("Tesla", "Model Y", "5YJSA1E21HF009921", 75);
console.log("Details:", tesla.details);
console.log("VIN snippet:", tesla.getVinLastFour());
console.log("Static category:", Vehicle.getCategory());
