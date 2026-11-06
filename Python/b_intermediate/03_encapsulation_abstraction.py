"""
=============================================================================
Topic: Encapsulation and Abstraction
Concepts Covered:
  - Private (_single_underscore) and Name Mangling (__double_underscore)
  - Getters, Setters, and Deleters using @property
  - Data validation inside setters
  - Abstract Base Classes (ABCs) using `abc.ABC` and `@abstractmethod`
  - Enforcing interface contracts across subclasses
=============================================================================
"""

from abc import ABC, abstractmethod


# -----------------------------------------------------------------------------
# 1. Encapsulation with Properties
# -----------------------------------------------------------------------------
class BankAccount:
    """Demonstrates data hiding and attribute validation."""

    def __init__(self, owner: str, initial_balance: float = 0.0):
        self.owner = owner
        self._account_number = "ACC-9921"  # Protected convention
        self.__balance = 0.0               # Private (name-mangled)
        self.balance = initial_balance     # Uses setter validation

    @property
    def balance(self) -> float:
        """Getter for balance."""
        return self.__balance

    @balance.setter
    def balance(self, value: float) -> None:
        """Setter with validation."""
        if value < 0:
            raise ValueError("Balance cannot be negative.")
        self.__balance = value

    def deposit(self, amount: float) -> None:
        if amount <= 0:
            raise ValueError("Deposit must be strictly positive.")
        self.__balance += amount

    def withdraw(self, amount: float) -> None:
        if amount <= 0:
            raise ValueError("Withdrawal must be strictly positive.")
        if amount > self.__balance:
            raise ValueError(f"Insufficient funds: available ${self.__balance:,.2f}")
        self.__balance -= amount


# -----------------------------------------------------------------------------
# 2. Abstraction using Abstract Base Classes (ABC)
# -----------------------------------------------------------------------------
class PaymentProcessor(ABC):
    """Abstract interface defining required contract for payment providers."""

    @abstractmethod
    def authenticate(self, api_key: str) -> bool:
        """Must be implemented by concrete classes."""
        pass

    @abstractmethod
    def process_payment(self, amount: float) -> str:
        """Must be implemented by concrete classes."""
        pass


class StripeProcessor(PaymentProcessor):
    def authenticate(self, api_key: str) -> bool:
        print(f"Authenticating with Stripe using {api_key[:4]}****")
        return True

    def process_payment(self, amount: float) -> str:
        return f"Successfully charged ${amount:.2f} via Stripe charge token #ch_991"


class PayPalProcessor(PaymentProcessor):
    def authenticate(self, api_key: str) -> bool:
        print("Authenticating with PayPal OAuth2 token")
        return True

    def process_payment(self, amount: float) -> str:
        return f"Successfully sent ${amount:.2f} invoice via PayPal"


# -----------------------------------------------------------------------------
# 3. Execution & Verification
# -----------------------------------------------------------------------------
def main():
    print("--- 1. Encapsulation & Properties ---")
    account = BankAccount("Sarah Conner", 500.0)
    print(f"Initial balance: ${account.balance:.2f}")

    account.deposit(250.0)
    print(f"After deposit: ${account.balance:.2f}")

    account.withdraw(100.0)
    print(f"After withdrawal: ${account.balance:.2f}")

    # Name mangling demo: __balance becomes _BankAccount__balance
    print("Name mangled attribute exists:", hasattr(account, "_BankAccount__balance"))

    print("\n--- 2. Abstraction Contract ---")
    processors: list[PaymentProcessor] = [StripeProcessor(), PayPalProcessor()]
    for p in processors:
        p.authenticate("sk_live_secret123456")
        result = p.process_payment(99.99)
        print("Transaction:", result)


if __name__ == "__main__":
    main()
