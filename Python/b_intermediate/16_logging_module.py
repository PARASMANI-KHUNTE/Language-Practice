"""
Topic: Application Logging with the `logging` Module
Concepts Covered:
  - Standard log levels: DEBUG, INFO, WARNING, ERROR, CRITICAL
  - Custom formatters and stream handlers
  - Logger hierarchies and namespacing
  - Formatting timestamps and exception tracebacks
"""

import logging
import sys

def setup_logger(name: str) -> logging.Logger:
    logger = logging.getLogger(name)
    logger.setLevel(logging.DEBUG)

    handler = logging.StreamHandler(sys.stdout)
    formatter = logging.Formatter(
        '[%(asctime)s] [%(levelname)s] [%(name)s]: %(message)s',
        datefmt='%H:%M:%S'
    )
    handler.setFormatter(formatter)
    if not logger.handlers:
        logger.addHandler(handler)
    return logger

logger = setup_logger("AppCore")

def execute_risky_task(divisor: int):
    logger.debug(f"Starting calculation with divisor={divisor}")
    try:
        res = 100 / divisor
        logger.info(f"Calculation successful: result = {res}")
        return res
    except ZeroDivisionError:
        logger.error("Failed to compute division due to zero input!", exc_info=True)

if __name__ == "__main__":
    logger.info("System booting up...")
    execute_risky_task(5)
    execute_risky_task(0)
    logger.warning("Memory usage approaching threshold (85%)")
    logger.critical("Security alert: Multiple invalid login attempts!")
