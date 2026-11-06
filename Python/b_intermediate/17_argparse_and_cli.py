"""
Topic: Command-Line Interfaces with `argparse`
Concepts Covered:
  - ArgumentParser creation
  - Positional vs optional arguments
  - Type casting, choices, and default values
  - Flags and booleans (action='store_true')
  - Parsing and running CLI commands
"""

import argparse

def create_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Data processing command line utility",
        epilog="Example: python script.py data.csv --mode fast --verbose"
    )
    parser.add_argument('filename', type=str, help='Target input file path')
    parser.add_argument('-m', '--mode', choices=['fast', 'accurate', 'balanced'], default='balanced', help='Execution mode')
    parser.add_argument('-t', '--threshold', type=float, default=0.75, help='Confidence threshold')
    parser.add_argument('-v', '--verbose', action='store_true', help='Enable verbose output')
    return parser

if __name__ == "__main__":
    parser = create_parser()
    sample_args = ['metrics.json', '--mode', 'fast', '--threshold', '0.9', '--verbose']
    parsed = parser.parse_args(sample_args)

    print("Parsed CLI Arguments:")
    print(f"  Target File: {parsed.filename}")
    print(f"  Selected Mode: {parsed.mode}")
    print(f"  Threshold: {parsed.threshold}")
    print(f"  Verbose: {parsed.verbose}")
