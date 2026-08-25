# Verification test script for FINAL REXCHANGE UI POLISH PASS
import urllib.request
import json

BASE_URL = "http://127.0.0.1:8080"

print("=================================================================")
print("RExchange Final UI Polish Pass - Verification Suite")
print("=================================================================")

# 1. Test Static Assets
for path in ["/", "/style.css", "/app.js"]:
    url = f"{BASE_URL}{path}"
    with urllib.request.urlopen(url, timeout=3) as resp:
        content = resp.read()
        assert resp.status == 200, f"Failed GET {path}"
        print(f"[PASS] [{resp.status}] {path:14} -> OK ({len(content)} bytes)")

# 2. Check HTML Polish Elements
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

required_html_polish = [
    # Floating Hero Badges
    'class="hero-floating-badges-wrap"',
    'badge-pos-top-left',
    'badge-pos-top-right',
    'badge-pos-bottom-left',
    'badge-pos-bottom-right',
    'New textbook shared',
    'Python tutoring available',
    'Hackathon opportunity posted',
    'AI found a 94% match',

    # How It Works
    'class="how-it-works-section',
    'class="steps-connector-line"',
    '01',
    '02',
    '03',
    '04',
    'Post',
    'Discover',
    'Connect',
    'Exchange & Thrive',
    'pulse-new-listings',
    'pulse-skills-shared',
    'pulse-opportunities'
]

for item in required_html_polish:
    assert item in html, f"Missing HTML item: {item}"
    print(f"[PASS] HTML Polish Check: {item:35} -> Present")

# 3. Check CSS Polish Elements
with open("style.css", "r", encoding="utf-8") as f:
    css = f.read()

required_css_polish = [
    ".hero-floating-badges-wrap",
    ".hero-floating-badge",
    "@keyframes heroFloat",
    "@keyframes heroFadeUp",
    "@keyframes aiBoxGlow",
    "@keyframes sparkleRotate",
    ".steps-connector-line",
    ".step-card-modern:hover",
    ".pulse-stat-pill:hover",
    "@keyframes bookmarkPop",
    "@keyframes modalScaleIn",
    "overflow-x: hidden !important"
]

for item in required_css_polish:
    assert item in css, f"Missing CSS item: {item}"
    print(f"[PASS] CSS Polish Check: {item:35} -> Defined")

# 4. Check JS Polish Elements
with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

required_js_polish = [
    "ROTATING_AI_PLACEHOLDERS",
    "initRotatingPlaceholders()",
    "initPulseAnimation()",
    "easeProgress = 1 - Math.pow(1 - progress, 3)",
    "switchView(",
    "renderHomeFeatured()",
    "renderListings()",
    "renderNotifications()"
]

for item in required_js_polish:
    assert item in js, f"Missing JS item: {item}"
    print(f"[PASS] JS Polish Check: {item:35} -> Implemented")

print("\n=================================================================")
print("SUCCESS: ALL FINAL UI POLISH PASS VERIFICATIONS PASSED!")
print("=================================================================")
