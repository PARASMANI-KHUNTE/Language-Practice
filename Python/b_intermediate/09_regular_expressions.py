"""
Topic: Regular Expressions (re module)
Concepts Covered:
  - Pattern compilation: re.compile
  - Searching and matching: re.search, re.match, re.findall, re.finditer
  - Capture groups and named capture groups
  - Substitution with re.sub
  - Flags (re.IGNORECASE, re.MULTILINE)
"""

import re

sample_text = """
Contact Information:
Email: support@example.com, john.doe@company.org, dev_team12@domain.co.uk
Phone numbers: +1 (555) 234-5678, (800) 555-0199, 555-123-4567
Orders: #ORD-2024-99182 (Status: Completed), #ORD-2024-11029 (Status: Pending)
"""

def extract_emails(text: str) -> list[str]:
    email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
    return re.findall(email_pattern, text)

def parse_orders(text: str):
    order_regex = re.compile(
        r'#(?P<order_id>ORD-\d{4}-\d+)\s+\(Status:\s+(?P<status>\w+)\)'
    )
    for match in order_regex.finditer(text):
        data = match.groupdict()
        print(f"Order: {data['order_id']} -> Status: {data['status']}")

def sanitize_phone_numbers(text: str) -> str:
    phone_pattern = r'\+?\d*\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}'
    return re.sub(phone_pattern, '[REDACTED PHONE]', text)

if __name__ == "__main__":
    print("--- Found Emails ---")
    print(extract_emails(sample_text))

    print("\n--- Parsed Orders ---")
    parse_orders(sample_text)

    print("\n--- Masked Text ---")
    print(sanitize_phone_numbers(sample_text))
