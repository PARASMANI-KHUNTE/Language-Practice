"""
Topic: Unit Testing with Python's built-in `unittest`
Concepts Covered:
  - Creating test cases inheriting from unittest.TestCase
  - Assertions: assertEqual, assertTrue, assertFalse, assertRaises
  - setUp and tearDown fixture hooks
  - Running test suites programmatically
"""

import unittest

def add(a: float, b: float) -> float:
    return a + b

def divide(a: float, b: float) -> float:
    if b == 0:
        raise ZeroDivisionError("Division by zero is not allowed")
    return a / b

class TestMathOperations(unittest.TestCase):
    def setUp(self):
        self.dataset = [10, 20, 30]

    def tearDown(self):
        self.dataset.clear()

    def test_add_positive(self):
        self.assertEqual(add(2, 3), 5)

    def test_add_negative(self):
        self.assertEqual(add(-5, -5), -10)

    def test_divide_valid(self):
        self.assertEqual(divide(10, 2), 5.0)

    def test_divide_by_zero_exception(self):
        with self.assertRaises(ZeroDivisionError):
            divide(10, 0)

if __name__ == "__main__":
    unittest.main(verbosity=2)
