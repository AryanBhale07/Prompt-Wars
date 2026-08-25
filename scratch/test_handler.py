import http.server
import os
import urllib.parse

class TestHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        clean_path = path.split('?')[0].rstrip('/')
        if not clean_path:
            clean_path = '/'
        routes = {'/', '/explore', '/categories', '/ai-match', '/post', '/inbox', '/saved', '/profile', '/notifications'}
        if clean_path in routes:
            path = '/index.html'
        return super().translate_path(path)

h = TestHandler
os.chdir(r"c:\Users\Aryan\OneDrive\Documents\REXCHANGE")
for r in ['/', '/explore', '/categories', '/ai-match', '/post', '/inbox', '/saved', '/profile', '/notifications', '/style.css']:
    try:
        t = h(None, ('127.0.0.1', 8000), None).translate_path(r)
        print(f"Route {r} -> {t} (exists: {os.path.exists(t)})")
    except Exception as e:
        print(f"Error for {r}: {e}")
