"""
Topic: Working with JSON and CSV Data
Concepts Covered:
  - JSON serialization: dump, dumps, load, loads
  - Custom JSON encoder for non-serializable objects (datetime, custom classes)
  - CSV reading and writing with csv.reader, csv.writer
  - CSV DictReader and DictWriter for structured access
"""

import json
import csv
import io
from datetime import datetime

class UserProfile:
    def __init__(self, username: str, joined_at: datetime):
        self.username = username
        self.joined_at = joined_at

class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        if isinstance(obj, UserProfile):
            return {'username': obj.username, 'joined_at': obj.joined_at.isoformat()}
        return super().default(obj)

def demo_json():
    u = UserProfile("dev_guru", datetime(2024, 1, 15, 10, 30))
    json_text = json.dumps(u, cls=CustomJSONEncoder, indent=2)
    print("Serialized JSON:\n", json_text)
    decoded = json.loads(json_text)
    print("Decoded username:", decoded['username'])

def demo_csv():
    output = io.StringIO()
    fieldnames = ['id', 'product', 'price', 'quantity']
    writer = csv.DictWriter(output, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerow({'id': 1, 'product': 'Keyboard', 'price': 89.99, 'quantity': 2})
    writer.writerow({'id': 2, 'product': 'Mouse', 'price': 49.99, 'quantity': 5})

    csv_data = output.getvalue()
    print("\nGenerated CSV:\n" + csv_data)

    reader = csv.DictReader(io.StringIO(csv_data))
    for row in reader:
        print(f"Item: {row['product']} | Total: ${float(row['price']) * int(row['quantity']):.2f}")

if __name__ == "__main__":
    demo_json()
    demo_csv()
