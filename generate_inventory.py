import os
import json

# Path to the image folder
canon_path = os.path.join(os.getcwd(), "LAKHANI CANON")

cars = []

for folder in os.listdir(canon_path):
    folder_path = os.path.join(canon_path, folder)
    if os.path.isdir(folder_path):
        images = [f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
        if images:
            # Try to split folder name like "Harrier 2017 Canon"
            parts = folder.split()
            name = parts[0] if parts else "Unknown"
            year = next((p for p in parts if p.isdigit()), "Unknown")

            cars.append({
                "name": name,
                "year": year,
                "price": "N/A",     # You can update later
                "folder": "LAKHANI CANON/" + folder,
                "images": images
            })

# Save this into script.js
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
