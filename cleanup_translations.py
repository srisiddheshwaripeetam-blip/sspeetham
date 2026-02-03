
import os
import re

base_path = r"d:\misc'\sri-siddheswari-peetham-website"
langs = ['en', 'te', 'ta', 'hi']

for lang in langs:
    file_path = os.path.join(base_path, "lib", "translations", f"{lang}.ts")
    if not os.path.exists(file_path):
        continue
        
    print(f"Cleaning {lang}...")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for swami_id in range(1, 7):
        # Match "swamiN.long_description": "..."
        pattern = fr'("swami{swami_id}\.long_description":\s*")(?:\\.|[^"\\])*(")'
        content = re.sub(pattern, r'\1Loaded from external file\2', content, flags=re.DOTALL)
        
    with open(file_path, 'w', encoding='utf-8') as out:
        out.write(content)
    print(f"  Cleaned {lang}")
