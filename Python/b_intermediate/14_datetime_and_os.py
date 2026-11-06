"""
Topic: Datetime Manipulation and Modern Path Handling (pathlib)
Concepts Covered:
  - datetime, date, time, timedelta calculations
  - Formatting and parsing dates (strftime, strptime)
  - Timezone awareness (timezone, UTC)
  - Object-oriented path operations with pathlib.Path
"""

from datetime import datetime, timedelta, timezone
from pathlib import Path

def demo_datetime():
    now_utc = datetime.now(timezone.utc)
    print("Current UTC Time:", now_utc.strftime('%Y-%m-%d %H:%M:%S %Z'))

    future_deadline = now_utc + timedelta(days=14, hours=6)
    print("Deadline (+14d 6h):", future_deadline.isoformat())

    date_str = "2025-12-31 23:59:59"
    parsed_date = datetime.strptime(date_str, '%Y-%m-%d %H:%M:%S')
    print("Parsed Date object:", parsed_date)

def demo_pathlib():
    current_dir = Path(__file__).resolve().parent
    print(f"Current Directory: {current_dir}")
    print(f"Parent Directory: {current_dir.parent.name}")

    fake_path = current_dir / "temp_sample.txt"
    print(f"Constructed Path: {fake_path}")
    print(f"File suffix: {fake_path.suffix}, stem: {fake_path.stem}")

if __name__ == "__main__":
    demo_datetime()
    print()
    demo_pathlib()
