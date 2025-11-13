import os
import json

# Path to the parent cars folder
cars_path = os.path.join(os.getcwd(), "assets", "images", "cars")

cars = []

for folder in os.listdir(cars_path):
    folder_path = os.path.join(cars_path, folder)
    if os.path.isdir(folder_path):
        images = [f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
        if images:
            # Attempt to parse name and year from folder name
            parts = folder.split()
            name = " ".join(parts[:-1]) if len(parts) > 1 else parts[0]
            year = parts[-1] if parts[-1].isdigit() else "Unknown"

            cars.append({
                "name": name,
                "year": year,
                "price": "N/A",     # Optional: update later
                "folder": os.path.join("assets", "images", "cars", folder).replace("\\", "/"),
                "images": images
            })

# Update script.js
script_path = os.path.join(os.getcwd(), "script.js")

with open(script_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if line.strip().startswith("const cars ="):
        new_lines.append("const cars = " + json.dumps(cars, indent=2) + ";\n")
    else:
        new_lines.append(line)

with open(script_path, "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print("✅ Inventory updated! Now open index.html to see your cars.")
