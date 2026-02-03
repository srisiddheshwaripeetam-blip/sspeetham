
import os
import re
import json

base_path = r"d:\misc'\sri-siddheswari-peetham-website"
langs = ['en', 'te', 'ta', 'hi']

def format_to_html(text):
    if not text: return ""
    # Unescape common JS/TS string escapes
    text = text.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
    
    # Split by double newlines for paragraphs
    paragraphs = re.split(r'\n\n+', text)
    html_parts = []
    
    for p in paragraphs:
        p = p.strip()
        if not p: continue
        
        # Handle list items
        if p.startswith('•') or p.startswith('- '):
            items = p.split('\n')
            list_html = '<ul class="list-disc pl-5 space-y-2 mb-4 marker:text-amber-500">'
            for item in items:
                item_text = re.sub(r'^[•-]\s*', '', item).strip()
                if item_text:
                    # Bold within list items
                    item_text = re.sub(r'\*\*(.*?)\*\*', r'<strong class="text-amber-900">\1</strong>', item_text)
                    list_html += f'<li class="pl-1">{item_text}</li>'
            list_html += '</ul>'
            html_parts.append(list_html)
            
        # Handle headers
        elif (p.startswith('**') and p.endswith('**')) or (p.startswith('**') and p.endswith('**:')):
            header = p.strip('* :')
            html_parts.append(f'<h3 class="text-xl font-bold text-amber-900 mt-6 mb-3 font-serif">{header}</h3>')
            
        # Standard paragraph
        else:
            # Bold markers
            p = re.sub(r'\*\*(.*?)\*\*', r'<strong class="text-amber-900">\1</strong>', p)
            # Line breaks
            p = p.replace('\n', '<br/>')
            html_parts.append(f'<p class="leading-relaxed text-neutral-700 mb-4 text-justify">{p}</p>')
            
    return "".join(html_parts)

output_dir = os.path.join(base_path, "public", "content")
os.makedirs(output_dir, exist_ok=True)

for lang in langs:
    file_path = os.path.join(base_path, "lib", "translations", f"{lang}.ts")
    if not os.path.exists(file_path):
        continue
        
    print(f"Processing {lang}...")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    biographies = {}
    
    for swami_id in range(1, 7):
        # Extract long_description
        pattern = fr'"swami{swami_id}\.long_description":\s*"((?:\\.|[^"\\])*)"'
        match = re.search(pattern, content, re.DOTALL)
        
        if match:
            raw_text = match.group(1)
            html_text = format_to_html(raw_text)
            biographies[f"swami{swami_id}"] = html_text
            print(f"  Extracted swami{swami_id}")
            
    # Save to JSON
    with open(os.path.join(output_dir, f"biographies_{lang}.json"), 'w', encoding='utf-8') as out:
        json.dump(biographies, out, ensure_ascii=False, indent=2)
    
    # Clean the translation file
    for swami_id in range(1, 7):
        content = re.sub(fr'("swami{swami_id}\.long_description":\s*")(?:\\.|[^"\\])*(")', r'\1Externalized\2', content, flags=re.DOTALL)
        
    with open(file_path, 'w', encoding='utf-8') as out:
        out.write(content)
    print(f"  Cleaned {lang}")

print("Optimization complete.")
