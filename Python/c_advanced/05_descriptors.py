"""
Topic: Descriptors Protocol
Concepts Covered:
  - The descriptor protocol: __get__, __set__, __delete__
  - Data descriptors vs Non-data descriptors
  - Building reusable attribute validators (TypeChecked, Bounded)
  - Descriptors power behind @property, classmethod, staticmethod
"""

class NonNegative:
    """Data descriptor that enforces positive numerical attributes."""
    def __set_name__(self, owner, name):
        self.private_name = f"_{name}"

    def __get__(self, instance, owner):
        if instance is None:
            return self
        return getattr(instance, self.private_name, 0.0)

    def __set__(self, instance, value):
        if value < 0:
            raise ValueError(f"Value cannot be negative for '{self.private_name[1:]}'")
        setattr(instance, self.private_name, value)

class Product:
    price = NonNegative()
    stock = NonNegative()

    def __init__(self, name: str, price: float, stock: int):
        self.name = name
        self.price = price
        self.stock = stock

if __name__ == "__main__":
    prod = Product("Mechanical Keyboard", 129.99, 15)
    print(f"Product: {prod.name}, Price: ${prod.price}, Stock: {prod.stock}")
    try:
        prod.price = -10
    except ValueError as e:
        print("Descriptor caught validation error:", e)
