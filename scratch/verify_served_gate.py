import urllib.request
import re

url = "http://127.0.0.1:8000/"
try:
    with urllib.request.urlopen(url) as resp:
        html = resp.read().decode("utf-8")
except Exception as e:
    print(f"Error connecting to server: {e}")
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()

legacy_terms = [
    "Send Verification Code",
    "Send Access Link",
    "Verification Code",
    "verification code",
    "OTP",
    "signInWithOtp",
    "verifyOtp",
    "srm-email-input",
    "srm-code-input",
    "btn-verify-email",
    "btn-verify-code",
    "btn-resend-code",
    "resend-countdown",
    "gate-step-email",
    "gate-step-code",
    "requestEmailOtp",
    "switchGateStep"
]

print("=== CHECKING SERVED HTML FOR LEGACY STRINGS ===")
all_clean = True
for term in legacy_terms:
    found = term.lower() in html.lower()
    status = "FOUND (ERROR)" if found else "NOT FOUND (CLEAN)"
    if found:
        all_clean = False
    print(f"  [{status}] Term: '{term}'")

# Also check app.js served over HTTP
try:
    with urllib.request.urlopen("http://127.0.0.1:8000/app.js") as resp:
        app_js = resp.read().decode("utf-8")
except Exception:
    with open("app.js", "r", encoding="utf-8") as f:
        app_js = f.read()

print("\n=== CHECKING SERVED APP.JS FOR LEGACY STRINGS ===")
for term in legacy_terms:
    found = term.lower() in app_js.lower()
    status = "FOUND (ERROR)" if found else "NOT FOUND (CLEAN)"
    if found:
        all_clean = False
    print(f"  [{status}] Term in app.js: '{term}'")

# Extract the exact inner HTML of srm-access-gate
gate_start = html.find('id="srm-access-gate"')
if gate_start != -1:
    gate_end = html.find('<!-- ===', gate_start + 10)
    print("\n=== EXACT SERVED LOGIN GATE HTML ===")
    gate_html = html[gate_start - 6:gate_end].strip()
    # Print with utf-8 or ascii fallback
    print(gate_html.encode('ascii', errors='replace').decode('ascii'))

print(f"\nOVERALL CLEAN STATUS: {'100% CLEAN - NO LEGACY AUTH FOUND' if all_clean else 'FAILED - REMNANTS FOUND'}")
