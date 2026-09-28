import os
import re

WORKSPACE_DIR = r"c:\Users\Aryan\OneDrive\Documents\REXCHANGE"

def test_auth_header_state():
    with open(os.path.join(WORKSPACE_DIR, "app.js"), "r", encoding="utf-8") as f:
        app_js = f.read()

    with open(os.path.join(WORKSPACE_DIR, "index.html"), "r", encoding="utf-8") as f:
        index_html = f.read()

    # 1. Verify DOM elements in index.html
    assert 'id="nav-srm-badge"' in index_html, "nav-srm-badge missing in HTML"
    assert 'id="btn-reset-srm-demo"' in index_html, "btn-reset-srm-demo missing in HTML"
    assert '✓ Verified' in index_html, "Verified text missing in HTML"
    assert '🔒 Sign In / Gate' in index_html, "Sign In / Gate text missing in HTML"

    # 2. Verify handleAuthSession hides gate button and shows verified badge
    handle_session_block = re.search(r'async function handleAuthSession\(session\)\s*\{(.*?)\n\}', app_js, re.DOTALL)
    assert handle_session_block, "handleAuthSession function not found"
    body = handle_session_block.group(1)
    assert "navSrmBadge.style.display = 'inline-flex'" in body, "handleAuthSession must show navSrmBadge"
    assert "btnResetSrmDemo.style.display = 'none'" in body, "handleAuthSession must hide btnResetSrmDemo"
    assert "srmAccessGate.style.display = 'none'" in body, "handleAuthSession must hide srmAccessGate"

    # 3. Verify initSRMVerification handles getSession and onAuthStateChange
    init_auth_block = re.search(r'async function initSRMVerification\(\)\s*\{(.*?)\n\}', app_js, re.DOTALL)
    assert init_auth_block, "initSRMVerification function not found"
    body_init = init_auth_block.group(1)
    assert "client.auth.onAuthStateChange" in body_init, "onAuthStateChange listener required"
    assert "client.auth.getSession" in body_init, "getSession check required"
    assert "btnResetSrmDemo.style.display = 'inline-block'" in body_init, "Unauthenticated state must show btnResetSrmDemo"
    assert "navSrmBadge.style.display = 'none'" in body_init, "Unauthenticated state must hide navSrmBadge"

    # 4. Verify performLogout restores unauthenticated header
    logout_block = re.search(r'async function performLogout\(\)\s*\{(.*?)\n\}', app_js, re.DOTALL)
    assert logout_block, "performLogout function not found"
    body_logout = logout_block.group(1)
    assert "btnResetSrmDemo.style.display = 'inline-block'" in body_logout, "Logout must show btnResetSrmDemo"
    assert "navSrmBadge.style.display = 'none'" in body_logout, "Logout must hide navSrmBadge"
    assert "client.auth.signOut" in body_logout, "Logout must call signOut"

    print("ALL AUTH HEADER STATE TESTS PASSED SUCCESSFULLY!")

if __name__ == "__main__":
    test_auth_header_state()
