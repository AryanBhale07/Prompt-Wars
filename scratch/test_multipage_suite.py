import urllib.request
import urllib.parse
import json
import re

BASE_URL = "http://127.0.0.1:8080"

import time

def test_routes():
    routes = [
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
    
    print("========================================")
    print("Testing 9 Clean SPA Routes on Server...")
    print("========================================")
    for route in routes:
        url = f"{BASE_URL}{route}"
        req = urllib.request.Request(url)
        for attempt in range(5):
            try:
                with urllib.request.urlopen(req, timeout=5) as response:
                    status = response.status
                    content = response.read().decode('utf-8')
                    assert status == 200, f"Route {route} failed with status {status}"
                    assert "<!DOCTYPE html>" in content, f"Route {route} didn't return index.html"
                    assert f'data-route="{route}"' in content, f"Route {route} page-view section not found in content"
                    print(f"[PASS] [{status}] {route:15} -> OK (Served index.html containing section data-route='{route}')")
                    break
            except Exception as e:
                if attempt == 4:
                    raise e
                time.sleep(0.5)


def test_static_assets():
    print("\n========================================")
    print("Testing Static Asset Endpoints...")
    print("========================================")
    assets = ["/style.css", "/app.js"]
    for asset in assets:
        url = f"{BASE_URL}{asset}"
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as response:
            status = response.status
            content = response.read().decode('utf-8')
            assert status == 200, f"Asset {asset} failed with status {status}"
            print(f"[PASS] [{status}] {asset:15} -> OK ({len(content)} bytes)")

def test_ai_assist_api():
    print("\n========================================")
    print("Testing AI Assist POST API...")
    print("========================================")
    url = f"{BASE_URL}/api/ai-assist"
    data = json.dumps({"description": "I have old java books for first year students"}).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'}, method='POST')
    with urllib.request.urlopen(req) as response:
        status = response.status
        content = json.loads(response.read().decode('utf-8'))
        assert status == 200, f"AI assist API failed with status {status}"
        assert "title" in content, "AI assist response missing title"
        assert "category" in content, "AI assist response missing category"
        assert "tags" in content, "AI assist response missing tags"
        assert "description" in content, "AI assist response missing description"
        print(f"[PASS] [{status}] /api/ai-assist -> OK")
        print(f"   Title: {content['title']}")
        print(f"   Category: {content['category']}")
        print(f"   Tags: {content['tags']}")

def test_dom_structure():
    print("\n========================================")
    print("Testing DOM Elements & Multi-Page Views...")
    print("========================================")
    req = urllib.request.Request(f"{BASE_URL}/")
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')

    required_ids = [
        "page-home",
        "page-explore",
        "page-categories",
        "page-ai-match",
        "page-post",
        "page-inbox",
        "page-saved",
        "page-profile",
        "page-notifications",
        "home-featured-grid",
        "campus-tags-cloud",
        "post-live-preview-card",
        "preview-title",
        "preview-desc",
        "preview-cat-badge",
        "post-page-title",
        "btn-page-ai-assist",
        "page-inbox-layout",
        "inbox-conversations-list",
        "chat-messages-stream",
        "saved-listings-feed",
        "profile-completeness-bar",
        "activity-feed-list",
        "listing-modal",
        "mobile-menu-drawer",
        "mobile-menu-btn"
    ]

    for elem_id in required_ids:
        assert f'id="{elem_id}"' in html, f"Missing element with id='{elem_id}'"
        print(f"[PASS] Found element #{elem_id}")

    print("\n[SUCCESS] ALL MULTI-PAGE UPGRADE TESTS PASSED!")


if __name__ == "__main__":
    test_routes()
    test_static_assets()
    test_ai_assist_api()
    test_dom_structure()
