# Codebase deep analysis for Security, Testing, Accessibility, Problem Alignment
import re
import json

with open("app.js", "r", encoding="utf-8") as f:
    js_code = f.read()

with open("index.html", "r", encoding="utf-8") as f:
    html_code = f.read()

with open("style.css", "r", encoding="utf-8") as f:
    css_code = f.read()

print("=================================================================")
print("RExchange Deep Quality & Security Inspection")
print("=================================================================")

# 1. Check innerHTML occurrences in app.js
inner_html_matches = [m.start() for m in re.finditer(r'\.innerHTML\s*=', js_code)]
print(f"[Analysis] Found {len(inner_html_matches)} instances of .innerHTML assignment in app.js")

# Print surrounding lines for each innerHTML assignment
lines = js_code.split('\n')
for idx, line in enumerate(lines, 1):
    if '.innerHTML' in line:
        print(f"  Line {idx:4d}: {line.strip()[:100]}")

# 2. Check localStorage calls
print("\n[Analysis] LocalStorage usages:")
for idx, line in enumerate(lines, 1):
    if 'localStorage' in line:
        print(f"  Line {idx:4d}: {line.strip()[:100]}")

# 3. Check SRM Email validation logic
print("\n[Analysis] SRM Email validation logic:")
for idx, line in enumerate(lines, 1):
    if 'srmist.edu.in' in line or 'validateEmail' in line or 'requireSRM' in line:
        print(f"  Line {idx:4d}: {line.strip()[:100]}")

# 4. Check Problem Alignment (Categories: Item, Skill, Opportunity)
print("\n[Analysis] Listing category balance:")
item_count = len(re.findall(r"category:\s*['\"]Item['\"]", js_code))
skill_count = len(re.findall(r"category:\s*['\"]Skill['\"]", js_code))
opp_count = len(re.findall(r"category:\s*['\"]Opportunity['\"]", js_code))
print(f"  Initial listings - Items: {item_count}, Skills: {skill_count}, Opportunities: {opp_count}")

# 5. Check Accessibility in HTML
print("\n[Analysis] Accessibility features in index.html:")
buttons_without_aria = []
for btn in re.finditer(r'<button([^>]+)>', html_code):
    btn_str = btn.group(1)
    if 'aria-label' not in btn_str and 'title' not in btn_str and '>' not in btn_str:
        pass
print(f"  Total buttons: {len(re.findall(r'<button', html_code))}")
print(f"  Total inputs: {len(re.findall(r'<input', html_code))}")
print(f"  Total form elements with labels: {len(re.findall(r'<label', html_code))}")
