"""
Topic: Modules and Packages Architecture
Concepts Covered:
  - Python module search path (sys.path)
  - The `__name__ == '__main__'` guard
  - Creating reusable module utilities
  - Dynamic imports with importlib
  - Understanding package __init__.py role
"""

import sys
import importlib

def calculate_metrics(values: list[float]) -> dict:
    if not values:
        return {'count': 0, 'mean': 0.0, 'min': None, 'max': None}
    return {
        'count': len(values),
        'mean': sum(values) / len(values),
        'min': min(values),
        'max': max(values)
    }

def inspect_sys_path():
    print(f"Active Python Executable: {sys.executable}")
    print("Top module search paths:")
    for p in sys.path[:3]:
        print(f"  - {p}")

def dynamic_import_example():
    math_module = importlib.import_module('math')
    print(f"Dynamically imported math.pi: {math_module.pi}")
    print(f"Dynamically imported math.sqrt(144): {math_module.sqrt(144)}")

if __name__ == "__main__":
    print("Module executing directly as __main__")
    sample_data = [12.5, 45.2, 78.9, 10.1, 99.4]
    print("Metrics:", calculate_metrics(sample_data))
    print()
    inspect_sys_path()
    print()
    dynamic_import_example()
