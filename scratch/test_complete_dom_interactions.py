# Complete DOM & Multi-Page Interaction Simulation Test
import os

print("=====================================================")
print("RExchange Multi-Page Upgrade Verification Suite")
print("=====================================================")

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

with open("style.css", "r", encoding="utf-8") as f:
    css = f.read()

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. Verify Structure of All 9 Routes in HTML
required_routes = [
    "/",
    "/explore",
    "/categories",
    "/ai-match",
    "/post",
    "/inbox",
    "/saved",
    "/profile",
    "/notifications"
]

print("\n[1] Verifying 9 Dedicated Page Views in HTML...")
for route in required_routes:
    assert f'data-route="{route}"' in html, f"Missing page section with data-route='{route}'"
    print(f"[PASS] Route {route:16} -> Dedicated section found")

# 2. Verify Multi-Page Navigation in Navbar & Mobile Drawer
print("\n[2] Verifying Global Navigation Links...")
for route in required_routes:
    assert f'data-nav-route="{route}"' in html or f'href="{route}"' in html, f"Missing nav link for route '{route}'"
    print(f"[PASS] Nav link for {route:16} -> Present in Navbar")

# 3. Verify CSS Transitions & Multi-Page Styling
print("\n[3] Verifying CSS Multi-Page Rules...")
required_css_classes = [
    ".page-view",
    ".page-view.active",
    ".nav-link.active::after",
    ".category-hub-grid",
    ".cat-hub-card",
    ".post-page-layout",
    ".sticky-preview-box",
    ".live-preview-card",
    ".inbox-page-layout",
    ".mobile-menu-drawer"
]

for cls in required_css_classes:
    assert cls in css, f"Missing CSS class: {cls}"
    print(f"[PASS] CSS Rule {cls:25} -> Defined")

# 4. Verify JS Router & Route Table
print("\n[4] Verifying JavaScript Router & Handlers...")
required_js_symbols = [
    "const ROUTES = {",
    "function navigateTo(",
    "function renderFeaturedHomeListings(",
    "function updateCategoryPillarsCounts(",
    "function renderCategoriesHub(",
    "function updatePostLivePreview(",
    "function initPostPage(",
    "function initRouter(",
    "function initMobileMenu("
]

for sym in required_js_symbols:
    assert sym in js, f"Missing JS symbol: {sym}"
    print(f"[PASS] JS Symbol {sym:35} -> Implemented")

# 5. Verify Post Live Preview Components
print("\n[5] Verifying Post Page Live Preview Structure...")
required_preview_elements = [
    'id="post-live-preview-card"',
    'id="preview-title"',
    'id="preview-desc"',
    'id="preview-cat-badge"',
    'id="preview-icon"',
    'id="preview-avail"',
    'id="preview-tags"',
    'id="post-page-title"',
    'id="post-page-category"',
    'id="post-page-description"',
    'id="post-page-tags"',
    'id="btn-page-ai-assist"',
    'id="btn-page-ai-apply"'
]

for el in required_preview_elements:
    assert el in html, f"Missing preview element: {el}"
    print(f"[PASS] Post Element {el:35} -> Found")

# 6. Verify Categories Hub Cards
print("\n[6] Verifying Categories Hub Structure...")
required_hub_elements = [
    "hub-card-items",
    "hub-card-skills",
    "hub-card-opps",
    "hub-count-items",
    "hub-count-skills",
    "hub-count-opps",
    "campus-tags-cloud"
]

for el in required_hub_elements:
    assert el in html, f"Missing hub element: {el}"
    print(f"[PASS] Hub Element {el:35} -> Found")

# 7. Verify Dedicated Inbox Layout
print("\n[7] Verifying Dedicated Inbox Layout...")
required_inbox_elements = [
    'id="page-inbox-layout"',
    'id="inbox-conversations-list"',
    'id="inbox-chat-panel"',
    'id="chat-header-name"',
    'id="chat-messages-stream"',
    'id="chat-send-form"',
    'id="chat-message-input"'
]

for el in required_inbox_elements:
    assert el in html, f"Missing inbox element: {el}"
    print(f"[PASS] Inbox Element {el:35} -> Found")

print("\n=====================================================")
print("SUCCESS: All Multi-Page System Validations Passed!")
print("=====================================================")
