"""
Topic: Advanced Comprehensions and Walrus Operator
Concepts Covered:
  - Nested list comprehensions (matrix flattening and transposing)
  - Dictionary comprehensions with filtering and transformations
  - Set comprehensions for uniqueness extraction
  - The walrus operator (:=) inside comprehensions
"""

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
flattened = [val for row in matrix for val in row]

user_roles = {'alice': 'admin', 'bob': 'editor', 'charlie': 'viewer', 'david': 'admin'}
roles_to_users = {}
for user, role in user_roles.items():
    roles_to_users.setdefault(role, []).append(user)

data_stream = ['15', 'N/A', '42', 'error', '108', '-7']
valid_numbers = [num for item in data_stream if (num := item.lstrip('-')).isdigit()]

if __name__ == "__main__":
    print("Original Matrix:", matrix)
    print("Transposed Matrix:", transposed)
    print("Flattened Matrix:", flattened)
    print("Inverted Roles:", roles_to_users)
    print("Extracted Numbers:", valid_numbers)
