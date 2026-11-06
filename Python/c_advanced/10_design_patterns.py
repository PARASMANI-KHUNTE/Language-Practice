"""
Topic: Common Object-Oriented Design Patterns in Python
Concepts Covered:
  - Singleton pattern
  - Factory pattern
  - Observer (Publish/Subscribe) pattern
  - Strategy pattern
"""

class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class DatabaseConfig(metaclass=SingletonMeta):
    def __init__(self):
        self.host = "localhost"

# Strategy Pattern
class CompressionStrategy:
    def compress(self, data: str) -> str:
        raise NotImplementedError

class ZipCompression(CompressionStrategy):
    def compress(self, data: str) -> str:
        return f"[ZIP-COMPRESSED: {data}]"

class TarCompression(CompressionStrategy):
    def compress(self, data: str) -> str:
        return f"[TAR-COMPRESSED: {data}]"

class Compressor:
    def __init__(self, strategy: CompressionStrategy):
        self.strategy = strategy

    def archive(self, text: str) -> str:
        return self.strategy.compress(text)

if __name__ == "__main__":
    db1 = DatabaseConfig()
    db2 = DatabaseConfig()
    print("Singleton check (db1 is db2):", db1 is db2)

    c = Compressor(ZipCompression())
    print("Strategy output:", c.archive("Sample Project File"))
