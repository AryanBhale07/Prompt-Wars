# Verification test script for FINAL REXCHANGE UI POLISH PASS
import os
import sys
import urllib.request
import json
import socket
import threading
import socketserver

WORKSPACE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, WORKSPACE_DIR)
os.chdir(WORKSPACE_DIR)

print("=================================================================")
print("RExchange Final UI Polish Pass - Verification Suite")
print("=================================================================")

# 1. Test Server Connectivity & Static Files
test_server = None
base_url = "http://127.0.0.1:8000"

def get_free_port():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        return s.getsockname()[1]

server_running = False
try:
    with urllib.request.urlopen(f"{base_url}/", timeout=1) as resp:
        if resp.status == 200:
            server_running = True
except Exception:
    server_running = False

if not server_running:
    try:
        from server import RExchangeHandler
        test_port = get_free_port()
        base_url = f"http://127.0.0.1:{test_port}"
        
        class TestTCPServer(socketserver.TCPServer):
            allow_reuse_address = True

        test_server = TestTCPServer(("", test_port), RExchangeHandler)
        server_thread = threading.Thread(target=test_server.serve_forever, daemon=True)
        server_thread.start()
        server_running = True
    except Exception as e:
        print(f"  [Notice] Could not start in-process server: {e}")

for path in ["/", "/style.css", "/app.js"]:
    url = f"{base_url}{path}"
    with urllib.request.urlopen(url, timeout=3) as resp:
        content = resp.read()
        assert resp.status == 200, f"Failed GET {path}"
        print(f"[PASS] [{resp.status}] {path:14} -> OK ({len(content)} bytes)")

if test_server:
    test_server.shutdown()
    test_server.server_close()

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
