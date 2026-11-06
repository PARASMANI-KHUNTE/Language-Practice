"""
Topic: Magic / Dunder Methods in Python
Concepts Covered:
  - String conversion: __str__, __repr__
  - Length and indexing: __len__, __getitem__, __setitem__
  - Operator overloading: __add__, __sub__, __mul__, __eq__, __lt__
  - Callable objects: __call__
"""

class Vector2D:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def __repr__(self) -> str:
        return f"Vector2D({self.x}, {self.y})"

    def __str__(self) -> str:
        return f"({self.x}, {self.y})"

    def __add__(self, other: 'Vector2D') -> 'Vector2D':
        if not isinstance(other, Vector2D):
            return NotImplemented
        return Vector2D(self.x + other.x, self.y + other.y)

    def __sub__(self, other: 'Vector2D') -> 'Vector2D':
        if not isinstance(other, Vector2D):
            return NotImplemented
        return Vector2D(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar: float) -> 'Vector2D':
        return Vector2D(self.x * scalar, self.y * scalar)

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Vector2D):
            return False
        return self.x == other.x and self.y == other.y

    def __lt__(self, other: 'Vector2D') -> bool:
        return (self.x**2 + self.y**2) < (other.x**2 + other.y**2)

    def __call__(self, multiplier: float) -> 'Vector2D':
        return self * multiplier


class CustomPlaylist:
    def __init__(self, name: str):
        self.name = name
        self._tracks = []

    def add(self, track: str):
        self._tracks.append(track)

    def __len__(self) -> int:
        return len(self._tracks)

    def __getitem__(self, index):
        return self._tracks[index]

    def __setitem__(self, index, value):
        self._tracks[index] = value


if __name__ == "__main__":
    v1 = Vector2D(2, 3)
    v2 = Vector2D(5, 7)
    print("v1 + v2 =", v1 + v2)
    print("v1 * 3 =", v1 * 3)
    print("v1 == v2:", v1 == v2)
    print("v1 < v2 (magnitude):", v1 < v2)
    print("v1 callable:", v1(4))

    pl = CustomPlaylist("Focus Beats")
    pl.add("Ambient Track 1")
    pl.add("LoFi Study Beat")
    print(f"Playlist has {len(pl)} songs. First song: {pl[0]}")
