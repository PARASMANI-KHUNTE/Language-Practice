"""
=============================================================================
Topic: Inheritance and Polymorphism
Concepts Covered:
  - Single inheritance
  - The super() function for parent initialization
  - Method overriding
  - Multiple inheritance and Method Resolution Order (MRO)
  - Polymorphism in action (duck typing & uniform interfaces)
=============================================================================
"""

# -----------------------------------------------------------------------------
# 1. Base Class (Parent)
# -----------------------------------------------------------------------------
class Employee:
    """Base Employee representation."""

    def __init__(self, emp_id: str, name: str, base_salary: float):
        self.emp_id = emp_id
        self.name = name
        self.base_salary = base_salary

    def calculate_pay(self) -> float:
        """Default base salary calculation."""
        return self.base_salary

    def get_details(self) -> str:
        return f"[{self.emp_id}] {self.name} - Pay: ${self.calculate_pay():,.2f}"


# -----------------------------------------------------------------------------
# 2. Derived Classes (Single Inheritance & Method Overriding)
# -----------------------------------------------------------------------------
class SalariedEmployee(Employee):
    """Employee with additional bonus."""

    def __init__(self, emp_id: str, name: str, base_salary: float, bonus: float):
        super().__init__(emp_id, name, base_salary)
        self.bonus = bonus

    def calculate_pay(self) -> float:
        # Overriding parent behavior
        return self.base_salary + self.bonus


class HourlyEmployee(Employee):
    """Employee paid per hour with overtime rate."""

    def __init__(self, emp_id: str, name: str, hourly_rate: float, hours_worked: float):
        super().__init__(emp_id, name, 0.0)
        self.hourly_rate = hourly_rate
        self.hours_worked = hours_worked

    def calculate_pay(self) -> float:
        if self.hours_worked <= 40:
            return self.hours_worked * self.hourly_rate
        regular = 40 * self.hourly_rate
        overtime = (self.hours_worked - 40) * (self.hourly_rate * 1.5)
        return regular + overtime


# -----------------------------------------------------------------------------
# 3. Multiple Inheritance & Diamond Problem / MRO
# -----------------------------------------------------------------------------
class Flyer:
    def travel(self):
        return "Flying through the sky"

class Swimmer:
    def travel(self):
        return "Swimming in the water"

class Duck(Flyer, Swimmer):
    """Inherits from both Flyer and Swimmer."""
    pass


# -----------------------------------------------------------------------------
# 4. Polymorphism Demonstration
# -----------------------------------------------------------------------------
def process_payroll(employees: list[Employee]) -> None:
    """
    Polymorphic function: works on any object implementing 'calculate_pay'
    and 'get_details', regardless of its specific concrete class.
    """
    total_payroll = 0.0
    print("--- Processing Payroll ---")
    for emp in employees:
        pay = emp.calculate_pay()
        total_payroll += pay
        print(emp.get_details())
    print(f"Total Payroll Outflow: ${total_payroll:,.2f}")


def main():
    staff = [
        SalariedEmployee("E01", "Alice Johnson", base_salary=80000, bonus=12000),
        HourlyEmployee("E02", "Bob Smith", hourly_rate=45.0, hours_worked=48),
        Employee("E03", "Charlie Davis", base_salary=50000),
    ]

    process_payroll(staff)

    print("\n--- Multiple Inheritance & MRO ---")
    duck = Duck()
    print("Duck travel():", duck.travel())
    print("Duck MRO:", [cls.__name__ for cls in Duck.__mro__])


if __name__ == "__main__":
    main()
