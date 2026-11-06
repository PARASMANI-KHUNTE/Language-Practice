"""
Topic: Embedded Relational Databases with `sqlite3`
Concepts Covered:
  - Establishing connections and cursors (in-memory & file-based)
  - Schema creation (CREATE TABLE)
  - Parameterized queries to prevent SQL Injection
  - CRUD operations: INSERT, SELECT, UPDATE, DELETE
  - Managing transactions: commit & rollback
"""

import sqlite3

def init_db(conn: sqlite3.Connection):
    with conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                email TEXT NOT NULL,
                points INTEGER DEFAULT 0
            )
        """)

def add_user(conn: sqlite3.Connection, username: str, email: str, points: int = 0):
    with conn:
        conn.execute(
            "INSERT INTO users (username, email, points) VALUES (?, ?, ?)",
            (username, email, points)
        )

def get_users(conn: sqlite3.Connection):
    cursor = conn.cursor()
    cursor.execute("SELECT id, username, email, points FROM users ORDER BY points DESC")
    return cursor.fetchall()

if __name__ == "__main__":
    connection = sqlite3.connect(':memory:')
    init_db(connection)

    add_user(connection, 'alex_g', 'alex@example.com', 120)
    add_user(connection, 'maria_k', 'maria@domain.com', 250)
    add_user(connection, 'chen_l', 'chen@work.org', 180)

    print("--- User Leaderboard ---")
    for uid, name, email, pts in get_users(connection):
        print(f"#{uid}: {name} ({email}) - {pts} pts")

    connection.close()
