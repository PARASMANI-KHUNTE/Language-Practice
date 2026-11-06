"""
=============================================================================
Topic: Object-Oriented Programming (OOP) - Classes and Objects
Concepts Covered:
  - Defining classes and instantiating objects
  - The __init__ constructor and 'self' parameter
  - Instance attributes vs Class attributes
  - Instance methods, modifying state
  - String representation (__str__ and __repr__)
=============================================================================
"""

# -----------------------------------------------------------------------------
# 1. Basic Class Definition and Instantiation
# -----------------------------------------------------------------------------
class Car:
    """Represents a simple car entity."""
    
    # Class attribute (shared by all instances)
    wheels = 4

    def __init__(self, make: str, model: str, year: int):
        """
        Constructor / Initializer method.
        'self' refers to the specific instance being created.
        """
        # Instance attributes (unique to each instance)
        self.make = make
        self.model = model
        self.year = year
        self.odometer = 0
        self.is_running = False

    def start_engine(self) -> str:
        """Instance method modifying object state."""
        if not self.is_running:
            self.is_running = True
            return f"The {self.make} {self.model}'s engine purrs to life."
        return f"The {self.make} {self.model}'s engine is already running."

    def drive(self, miles: float) -> None:
        """Updates internal mileage state."""
        if not self.is_running:
            print("Cannot drive! Start engine first.")
            return
        if miles > 0:
            self.odometer += miles
            print(f"Drove {miles} miles. Odometer: {self.odometer} miles.")
        else:
            print("Miles driven must be positive.")

    def __str__(self) -> str:
        """User-friendly string representation."""
        return f"{self.year} {self.make} {self.model} (Odo: {self.odometer} mi)"

    def __repr__(self) -> str:
        """Official unambiguous representation for debugging."""
        return f"Car(make='{self.make}', model='{self.model}', year={self.year})"


# -----------------------------------------------------------------------------
# 2. Demonstration & Verification
# -----------------------------------------------------------------------------
def main():
    print("--- 1. Creating Instances ---")
    car1 = Car("Toyota", "Corolla", 2022)
    car2 = Car("Tesla", "Model 3", 2024)

    print("car1:", car1)
    print("car2 repr:", repr(car2))
    print(f"Total wheels on {car1.make}: {car1.wheels}")

    print("\n--- 2. Manipulating State via Methods ---")
    print(car1.start_engine())
    car1.drive(45.5)
    car1.drive(12.3)

    print("\n--- 3. Class vs Instance Attributes ---")
    print(f"Car.wheels: {Car.wheels}")
    # Modifying via class changes default for new objects
    Car.wheels = 4
    # Modifying on instance creates an instance-level shadow attribute
    car2.wheels = 3  # Custom trike mod
    print(f"car1 wheels: {car1.wheels}, car2 wheels: {car2.wheels}, Car.wheels: {Car.wheels}")


if __name__ == "__main__":
    main()
