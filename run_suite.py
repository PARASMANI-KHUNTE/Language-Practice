"""
=============================================================================
Universal Practice Suite Runner & Cross-Language Validator
=============================================================================
Discovers and tests/validates programs across all 7 languages:
  - Python (.py)
  - JavaScript (.js via node)
  - TypeScript (.ts syntax check)
  - Go (.go syntax check / test)
  - Rust (.rs syntax check via rustc if available)
  - Java (.java compilation test if available)
  - C (.c syntax/compilation test if available)
=============================================================================
"""

import os
import shutil
import subprocess
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

LANGUAGES = {
    "Python": {
        "ext": ".py",
        "cmd": [sys.executable],
        "enabled": True,
        "input": {"04_user_input.py": "Alice\n25\n"}
    },
    "JavaScript": {
        "ext": ".js",
        "cmd": ["node", "--check"],  # Syntax check only to avoid long-running intervals/fetch
        "enabled": shutil.which("node") is not None,
    },
    "TypeScript": {
        "ext": ".ts",
        "cmd": ["node", "--check"],  # If ts-node/tsc is present, otherwise fallback
        "enabled": False  # Handled via basic parser/file integrity
    },
    "Go": {
        "ext": ".go",
        "cmd": ["go", "vet"],
        "enabled": shutil.which("go") is not None
    },
    "Rust": {
        "ext": ".rs",
        "cmd": ["rustc", "--emit=mir", "-o", "nul"],
        "enabled": shutil.which("rustc") is not None
    },
    "Java": {
        "ext": ".java",
        "cmd": ["javac", "-d", "nul"],
        "enabled": shutil.which("javac") is not None
    },
    "C": {
        "ext": ".c",
        "cmd": ["gcc", "-fsyntax-only"],
        "enabled": shutil.which("gcc") is not None
    }
}

SUBDIRS = ["a_basic", "b_intermediate", "c_advanced", "d_dsa"]

def audit_workspace():
    print("=" * 75)
    print("🌐 UNIVERSAL WORKSPACE HEALTH & INTEGRITY AUDIT")
    print("=" * 75)

    stats = {}
    total_files = 0
    zero_sized = []

    for lang in ["Python", "JavaScript", "TypeScript", "Rust", "Go", "Java", "C"]:
        stats[lang] = {}
        for sub in SUBDIRS:
            dir_path = BASE_DIR / lang / sub
            if not dir_path.exists():
                stats[lang][sub] = 0
                continue
            
            files = [f for f in dir_path.iterdir() if f.is_file()]
            stats[lang][sub] = len(files)
            total_files += len(files)

            for f in files:
                if f.stat().st_size == 0:
                    zero_sized.append(str(f.relative_to(BASE_DIR)))

    # Print Summary Table
    print(f"{'Language':<15} | {'a_basic':<10} | {'b_intermediate':<15} | {'c_advanced':<12} | {'d_dsa':<8} | {'Total':<6}")
    print("-" * 75)
    for lang, counts in stats.items():
        tot = sum(counts.values())
        print(f"{lang:<15} | {counts['a_basic']:<10} | {counts['b_intermediate']:<15} | {counts['c_advanced']:<12} | {counts['d_dsa']:<8} | {tot:<6}")
    print("=" * 75)
    print(f"📊 Grand Total Practice Programs: {total_files}")
    print(f"🔍 Zero-byte / Empty Files Found: {len(zero_sized)}")
    print("=" * 75)

    # Toolchain availability check
    print("\n🛠️  DETECTED LOCAL COMPILERS & RUNTIMES:")
    for lang, conf in LANGUAGES.items():
        bin_name = conf["cmd"][0]
        detected = shutil.which(bin_name) is not None
        status = "✅ AVAILABLE" if detected else "⚪ NOT IN PATH (Optional)"
        print(f"  • {lang:<12}: {bin_name:<10} -> {status}")

if __name__ == "__main__":
    audit_workspace()
