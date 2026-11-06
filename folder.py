from pathlib import Path

base_dir = Path(__file__).resolve().parent
subfolders = ["Basic", "Intermediate", "Advanced"]

rename_map = {
    "basic": "a_basic",
    "intermediate": "b_intermediate",
    "advanced": "c_advanced"
}

for item in base_dir.iterdir():
    if item.is_dir():
        for old_name, new_name in rename_map.items():
            old_path = item / old_name
            new_path = item / new_name
            
            if old_path.exists() and old_path.is_dir():
                old_path.rename(new_path)