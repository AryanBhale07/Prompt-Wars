import urllib.request
import traceback
import http.server
import os
import threading
import time

PORT = 8005

class RExchangeHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        clean_path = path.split('?')[0].rstrip('/')
        if not clean_path:
            clean_path = '/'
        routes = {'/', '/explore', '/categories', '/ai-match', '/post', '/inbox', '/saved', '/profile', '/notifications'}
        if clean_path in routes:
            path = '/index.html'
        return super().translate_path(path)

os.chdir(r"c:\Users\Aryan\OneDrive\Documents\REXCHANGE")
httpd = http.server.HTTPServer(("127.0.0.1", PORT), RExchangeHandler)
t = threading.Thread(target=httpd.serve_forever, daemon=True)
t.start()
time.sleep(0.5)

for route in ['/', '/explore', '/categories', '/ai-match', '/post', '/inbox', '/saved', '/profile', '/notifications', '/style.css']:
    try:
        url = f"http://127.0.0.1:{PORT}{route}"
        with urllib.request.urlopen(url, timeout=3) as resp:
            content = resp.read()
            print(f"Route {route} -> {resp.status} ({len(content)} bytes)")
    except Exception as e:
        print(f"Route {route} FAILED: {e}")
        traceback.print_exc()

httpd.shutdown()
