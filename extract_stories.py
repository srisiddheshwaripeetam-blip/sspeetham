
import os
import re

base_path = r"d:\misc'\sri-siddheswari-peetham-website"
langs = ['en', 'te', 'ta', 'hi']
swamis = range(1, 7)

output_dir = os.path.join(base_path, "public", "content", "stories")
os.makedirs(output_dir, exist_ok=True)

for lang in langs:
    file_path = os.path.join(base_path, "lib", "translations", f"{lang}.ts")
    if not os.path.exists(file_path):
        continue
        
    print(f"Processing {lang}...")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for swami_id in swamis:
        # Match "swamiN.long_description": "..."
        # Using a regex that handles escaped quotes correctly
        pattern = fr'"swami{swami_id}\.long_description":\s*"((?:\\.|[^"\\])*)"'
        match = re.search(pattern, content, re.DOTALL)
        
        if match:
            text = match.group(1)
            # Unescape \" to "
            text = text.replace('\\"', '"')
            
            swami_dir = os.path.join(output_dir, f"swami{swami_id}")
            os.makedirs(swami_dir, exist_ok=True)
            
            with open(os.path.join(swami_dir, f"{lang}.txt"), 'w', encoding='utf-8') as out:
                out.write(text)
            print(f"  Extracted swami{swami_id} {lang}")
        else:
            print(f"  Could not find swami{swami_id} in {lang}")
