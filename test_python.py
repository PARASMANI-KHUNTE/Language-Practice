"""
=============================================================================
Topic: Python Practice Suite - Automated Runner and Validator
=============================================================================
Runs and validates all Python scripts in:
  - a_basic
  - b_intermediate
  - c_advanced
  - d_dsa
=============================================================================
"""

import os
import subprocess
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent / "Python"
SUBDIRS = ["a_basic", "b_intermediate", "c_advanced", "d_dsa"]

# Interactive or long-running scripts to skip or provide simulated input
SKIP_OR_INPUT = {
    "04_user_input.py": "Alice\n25\n"
}

def run_suite():
    total = 0
    passed = 0
    failed = []

    print("=" * 70)
    print("🚀 RUNNING PYTHON PRACTICE & DSA VALIDATION SUITE")
    print("=" * 70)

    for sub in SUBDIRS:
        sub_path = BASE_DIR / sub
        if not sub_path.exists():
            continue
        
        py_files = sorted([f for f in sub_path.glob("*.py")])
        print(f"\n📂 [{sub.upper()}] ({len(py_files)} files)")
        print("-" * 70)

        for fpath in py_files:
            total += 1
            fname = fpath.name
            sim_input = SKIP_OR_INPUT.get(fname, None)

            try:
                result = subprocess.run(
                    [sys.executable, str(fpath)],
                    input=sim_input,
                    capture_output=True,
                    text=True,
                    timeout=5,
                    check=False
                )
                if result.returncode == 0:
                    passed += 1
                    print(f"  ✅ [PASS] {fname}")
                else:
                    failed.append((str(fpath.relative_to(BASE_DIR)), result.stderr.strip() or result.stdout.strip()))
                    print(f"  ❌ [FAIL] {fname}")
            except subprocess.TimeoutExpired:
                failed.append((str(fpath.relative_to(BASE_DIR)), "Timed out after 5s"))
                print(f"  ⏳ [TIMEOUT] {fname}")
            except Exception as e:
                failed.append((str(fpath.relative_to(BASE_DIR)), str(e)))
                print(f"  ⚠️ [ERR] {fname}: {e}")

    print("\n" + "=" * 70)
    print(f"🏁 SUMMARY: {passed}/{total} Passed ({(passed/total)*100:.1f}%)")
    print("=" * 70)

    if failed:
        print("\n❌ Failed scripts:")
        for name, err in failed:
            print(f"\n--- {name} ---")
            lines = err.splitlines()
            print("\n".join(lines[-4:] if len(lines) > 4 else lines))

if __name__ == "__main__":
    run_suite()
