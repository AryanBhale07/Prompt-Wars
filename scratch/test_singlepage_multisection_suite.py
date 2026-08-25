# Verification test suite for RExchange Single-Page Multi-View Interactive Experience
import urllib.request
import json
import time

BASE_URL = "http://127.0.0.1:8080"

print("=================================================================")
print("RExchange Single-Page Multi-Section Verification Suite")
print("=================================================================")

# 1. Test Server Connectivity & Static Files
print("\n[1] Testing Static Assets on Local HTTP Server...")
for path in ["/", "/style.css", "/app.js"]:
    url = f"{BASE_URL}{path}"
    with urllib.request.urlopen(url, timeout=3) as resp:
        content = resp.read()
        assert resp.status == 200, f"Failed GET {path}"
        print(f"[PASS] [{resp.status}] {path:14} -> OK ({len(content)} bytes)")

# 2. Test AI Assist API
print("\n[2] Testing AI Assist API...")
payload = json.dumps({"description": "I have old java books for first year students"}).encode("utf-8")
req = urllib.request.Request(
    f"{BASE_URL}/api/ai-assist",
    data=payload,
    headers={"Content-Type": "application/json"}
)
with urllib.request.urlopen(req, timeout=5) as resp:
    assert resp.status == 200, "AI assist endpoint failed"
    data = json.loads(resp.read().decode("utf-8"))
    assert "title" in data and "category" in data and "description" in data
    print(f"[PASS] AI Assist response: Title='{data['title']}', Category='{data['category']}'")

# 3. Test HTML Structure & Elements
print("\n[3] Testing HTML Structure & Single-Page Multi-View Components...")
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

required_html_elements = [
    # Navbar
    'id="nav-home-link"',
    'id="nav-explore-link"',
    'id="nav-ai-match-link"',
    'id="nav-post-link"',
    'id="nav-inbox-link"',
    'id="nav-saved-link"',
    'id="nav-profile-link"',
    'id="nav-post-btn"',
    'id="notif-bell-btn"',
    'id="nav-srm-badge"',
    'id="brand-logo-btn"',

    # Views
    'id="view-home"',
    'id="view-explore"',
    'id="view-ai-match"',
    'id="view-activity"',

    # Home View Components
    'id="categories"',
    'id="home-featured-grid"',
    'id="student-recommendations-section"',
    'id="how-it-works"',
    'id="pulse-new-listings"',
    'id="btn-home-view-all-explore"',

    # Explore View Components
    'id="explore"',
    'id="search-input"',
    'id="filter-bar"',
    'id="listings-feed"',
    'id="empty-state"',

    # AI Match View Components
    'id="ai-match"',
    'id="ai-match-input"',
    'id="ai-matches-grid"',
    'id="ai-processing-state"',
    'id="ai-results-area"',

    # Activity View Components
    'id="activity"',
    'id="activity-feed-list"',
    'id="activity-filters-bar"',

    # Drawers & Modals
    'id="saved"',
    'id="saved-listings-feed"',
    'id="inbox"',
    'id="inbox-conversations-list"',
    'id="chat-messages-stream"',
    'id="profile"',
    'id="profile-completeness-bar"',
    'id="post"',
    'id="listing-modal"',
    'id="profile-edit-modal"',
    'id="srm-access-gate"'
]

for el in required_html_elements:
    assert el in html, f"Missing HTML element: {el}"
    print(f"[PASS] HTML element {el:32} -> Present")

# 4. Test CSS Rules
print("\n[4] Testing CSS Single-Page View Transitions & Card Visuals...")
with open("style.css", "r", encoding="utf-8") as f:
    css = f.read()

required_css_classes = [
    ".app-view",
    ".app-view.active-view",
    ".app-view.view-anim-out",
    ".nav-link.active::after",
    ".card-media-banner",
    ".banner-item-theme",
    ".banner-skill-theme",
    ".banner-opp-theme",
    ".card-media-icon",
    ".card-media-watermark",
    ".home-featured-section",
    ".btn-view-all-link"
]

for cls in required_css_classes:
    assert cls in css, f"Missing CSS rule: {cls}"
    print(f"[PASS] CSS Rule {cls:28} -> Defined")

# 5. Test JavaScript Logic
print("\n[5] Testing JavaScript Router, View Switcher & Methods...")
with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

required_js_symbols = [
    "function switchView(",
    "function renderHomeFeatured(",
    "function getListingVisualTheme(",
    "function createListingCardHTML(",
    "function renderListings(",
    "function renderSavedListings(",
    "function renderProfile(",
    "function renderNotifications(",
    "function renderInboxConversations(",
    "function renderActiveChat(",
    "function findMatches(",
    "function requireSRMVerification("
]

for sym in required_js_symbols:
    assert sym in js, f"Missing JS function: {sym}"
    print(f"[PASS] JS Function {sym:34} -> Implemented")

print("\n=================================================================")
print("SUCCESS: ALL SINGLE-PAGE MULTI-VIEW VERIFICATIONS PASSED!")
print("=================================================================")
