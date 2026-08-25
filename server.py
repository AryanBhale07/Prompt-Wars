"""
RExchange - Local Development Server with Gemini AI Assist Endpoint
Secure server-side handling for Gemini API key via environment variable.
"""

import http.server
import json
import os
import re
import socketserver
import urllib.request
import urllib.error

PORT = int(os.environ.get("PORT", 8000))
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "").strip()

# Try loading from local .env if present
if not GEMINI_API_KEY and os.path.exists(".env"):
    try:
        with open(".env", "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("GEMINI_API_KEY="):
                    GEMINI_API_KEY = line.split("=", 1)[1].strip().strip("\"'")
                    break
    except Exception:
        pass


def generate_smart_suggestion(text: str) -> dict:
    """
    Intelligent context-aware fallback generator.
    Accurately analyzes items vs skills vs opportunities based on semantic cues.
    """
    text_clean = text.strip()
    text_lower = text_clean.lower()

    # 1. Detect Category
    is_opportunity = bool(re.search(
        r'\b(hackathon|teammate|team member|join (our|my|a) team|looking for (a |an )?(partner|teammate|developer|dev|designer|collaborator|co-founder)|collaborat(e|or|ion)|startup|roommate|club recruiting|hiring|internship)\b',
        text_lower
    ))

    is_skill = bool(re.search(
        r'\b(tutor(ing)?|teach(ing)?|lessons?|coach(ing)?|mentor(ing)?|can explain|help you (learn|study|code)|willing to teach|offer(ing)? (peer )?(tutoring|lessons|coaching))\b',
        text_lower
    ))

    is_item = bool(re.search(
        r'\b(textbook|book|notes|flashcards|calculator|laptop|macbook|ipad|tablet|monitor|desk|chair|lamp|fridge|bike|bicycle|scooter|hoodie|jacket|clothes|shoes|ticket|pass|charger|headphones|backpack|bed|mattress|furniture|give(ing)? away|don\'t need|have an? (old|used|extra|spare)|selling|for sale|trade (it )?(for|with) (a |an )?(book|textbook|item|calculator))\b',
        text_lower
    ))

    # Disambiguate Category
    if is_opportunity and not (is_item and re.search(r'\b(selling|give away|have an? old|have an? used)\b', text_lower)):
        category = "Opportunity"
    elif is_item and not (is_skill and re.search(r'\b(teach|tutor|give lessons)\b', text_lower) and not re.search(r'\b(have an?|selling|give away|don\'t need)\b', text_lower)):
        category = "Item"
    elif is_skill:
        category = "Skill"
    else:
        category = "Item"

    # 2. Extract Specific Entities & Subjects
    known_subjects = [
        ("DBMS Textbook", r'\bdbms\b|database'),
        ("DSA / Data Structures", r'\bdsa\b|data structures?'),
        ("OOP / Java", r'\boop\b|object oriented'),
        ("Calculus", r'\bcalculus\b|\bcalc\b'),
        ("Linear Algebra", r'\blinear algebra\b'),
        ("Organic Chemistry", r'\borganic chem(istry)?\b|\borgo\b'),
        ("Chemistry", r'\bchem(istry)?\b'),
        ("Physics", r'\bphysics\b'),
        ("Biology", r'\bbiology\b|\bbio\b'),
        ("Economics", r'\becon(omics)?\b'),
        ("Psychology", r'\bpsych(ology)?\b'),
        ("Python", r'\bpython\b'),
        ("JavaScript / Web Dev", r'\bjavascript\b|\bjs\b|\bweb dev\b|\breact\b'),
        ("Machine Learning / AI", r'\bmachine learning\b|\bml\b|\bai\b'),
        ("Guitar", r'\bguitar\b'),
        ("Piano", r'\bpiano\b'),
        ("TI-84 Graphing Calculator", r'\bti-?84\b|\bgraphing calculator\b'),
        ("Mini Fridge", r'\b(mini )?fridge\b|\brefrigerator\b'),
        ("Bicycle", r'\b(road |mountain )?bike\b|\bbicycle\b'),
        ("Computer Monitor", r'\bmonitor\b|\bdisplay\b'),
        ("MacBook / Laptop", r'\bmacbook\b|\blaptop\b'),
        ("iPad / Tablet", r'\bipad\b|\btablet\b'),
        ("Dorm Furniture", r'\b(desk|chair|lamp|fan|mattress|bed frame|mirror|furniture)\b'),
        ("Campus Event Ticket", r'\b(homecoming|concert|football|event) tickets?\b')
    ]

    detected_subject = None
    for name, pattern in known_subjects:
        if re.search(pattern, text_lower):
            detected_subject = name
            break

    # Extract Trade Target if any (e.g. "trade for a Python book")
    trade_match = re.search(r'\btrade (?:it )?(?:for|with) (?:a |an )?([^,.\n]+?)(?=\s+(?:or|and|for free|give|to)\b|[.,;]|$)', text_lower)
    trade_target = trade_match.group(1).strip() if trade_match else None
    if trade_target and len(trade_target) > 30:
        trade_target = trade_target[:30].strip()

    is_giveaway = bool(re.search(r'\b(give (it )?away|giving away|free|free to good home|don\'t need)\b', text_lower))
    is_sale = bool(re.search(r'\b(selling|for sale|\$\d+)\b', text_lower))

    # 3. Formulate Title & Description
    if category == "Item":
        # Identify specific item noun if not in detected_subject
        item_noun = "Textbook" if "textbook" in text_lower else ("Book" if "book" in text_lower else ("Notes" if "notes" in text_lower else ("Calculator" if "calculator" in text_lower else None)))

        if detected_subject:
            if item_noun and item_noun.lower() not in detected_subject.lower():
                base_title = f"{detected_subject} {item_noun}"
            else:
                base_title = detected_subject
        elif item_noun:
            base_title = f"Course {item_noun}"
        else:
            stop_words = {"i", "have", "an", "a", "the", "my", "don't", "need", "it", "some", "giving", "give", "away", "for", "free", "selling", "sell", "want", "to", "trade", "looking", "old", "used"}
            words = [w for w in text_clean.split() if w.lower().strip(".,;:!?") not in stop_words]
            base_title = " ".join(words[:3]).title() if words else "Campus Item"

        # Refined Title with intent
        if trade_target and is_giveaway:
            title = f"{base_title} (Trade for {trade_target.title()} or Giveaway)"
        elif trade_target:
            title = f"{base_title} (Trade for {trade_target.title()})"
        elif is_giveaway:
            title = f"{base_title} (Free Giveaway)"
        elif is_sale:
            title = f"{base_title} (For Sale / Trade)"
        else:
            title = f"{base_title} for Exchange"

        # Polished Description
        if is_giveaway and trade_target:
            desc = f"Offering this {base_title.lower()} in good condition. Willing to trade for a {trade_target} or give it away for free to any student who needs it. Open for quick on-campus pickup or exchange."
        elif is_giveaway:
            desc = f"Giving away {base_title.lower()} for free to any student who needs it. In good condition. Please reach out for on-campus pickup."
        elif trade_target:
            desc = f"Available for exchange: {base_title}. Looking to trade for {trade_target} or comparable course materials. Contact for on-campus meetup."
        else:
            desc = f"{base_title} available for campus trade or exchange. {text_clean} Reach out if interested!"

    elif category == "Skill":
        subj = detected_subject if detected_subject else "Peer"
        if trade_target:
            title = f"{subj} Tutoring & Coaching (Trade for {trade_target.title()})"
            desc = f"Offering peer tutoring and collaborative study sessions in {subj}. Open to trading for {trade_target} or other skills. Flexible scheduling on campus or online."
        else:
            title = f"{subj} Tutoring & Skill Sharing"
            desc = f"Offering 1-on-1 peer tutoring and guidance in {subj}. Happy to exchange for help in other subjects or campus resources. Reach out to connect!"

    else: # Opportunity
        subj = detected_subject if detected_subject else "Campus Project"
        role_match = re.search(r'\b(developer|dev|designer|frontend|backend|engineer|roommate|co-founder)\b', text_lower)
        role = role_match.group(1).title() if role_match else "Teammates"
        
        if "hackathon" in text_lower:
            title = f"Hackathon Team: {role} Needed ({subj})"
        elif "startup" in text_lower or "project" in text_lower:
            title = f"{subj} Project — Seeking {role}"
        else:
            title = f"{subj} Opportunity: Looking for {role}"

        desc = f"Looking for motivated student collaborators to team up on {subj}. {text_clean} Reach out if you'd like to collaborate and build together!"

    return {
        "title": title,
        "category": category,
        "description": desc,
        "source": "smart_mock"
    }


def call_gemini_api(description: str) -> dict:
    """Call Google Gemini API server-side using the environment variable key."""
    if not GEMINI_API_KEY:
        return generate_smart_suggestion(description)

    prompt = f"""You are an assistant for 'RExchange', a university campus community exchange platform.
Analyze the student's informal/rough description below and produce a structured JSON object.

CRITICAL CATEGORY RULES:
- "Item": Physical goods being offered, traded, sold, or given away (e.g. textbooks, books, calculators, electronics, notes, furniture, tickets). Even if the book is about a programming language or math (e.g. "DBMS textbook", "Python book"), if it is a physical book/textbook/notes, it MUST be category "Item".
- "Skill": Services, tutoring, teaching, coaching, or lessons (e.g. "I can tutor you in Python", "offering guitar lessons").
- "Opportunity": Collaborators, hackathon teams, club recruitment, roommates, or projects (e.g. "looking for frontend dev for hackathon").

EXAMPLES:
1. Input: "I have an old DBMS textbook, don't need it, want to trade for a Python book or give it away"
   Output: {{"title": "DBMS Textbook (Trade for Python Book or Giveaway)", "category": "Item", "description": "Offering a DBMS textbook in good condition. Open to trading for a Python book or giving it away for free to anyone who needs it. Reach out for easy on-campus pickup!"}}

2. Input: "Willing to teach beginner Python in exchange for Spanish conversation practice"
   Output: {{"title": "Python Tutoring (Seeking Spanish Practice)", "category": "Skill", "description": "Offering beginner Python peer tutoring and coding guidance. Looking to exchange for Spanish conversation practice. Flexible schedule on campus!"}}

Student's rough notes:
\"\"\"{description}\"\"\"

Return ONLY a valid JSON object matching this schema:
{{
  "title": "string (concise polished title reflecting the specific item/skill/opportunity)",
  "category": "Item" | "Skill" | "Opportunity",
  "description": "string (polite, polished 2-3 sentence description)"
}}"""

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"

    payload = {
        "contents": [
            {
                "parts": [
                    {"text": prompt}
                ]
            }
        ],
        "generationConfig": {
            "responseMimeType": "application/json",
            "temperature": 0.2
        }
    }

    try:
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            url,
            data=data,
            headers={"Content-Type": "application/json"}
        )
        with urllib.request.urlopen(req, timeout=12) as response:
            res_body = response.read().decode("utf-8")
            res_json = json.loads(res_body)
            
            candidates = res_json.get("candidates", [])
            if candidates:
                part_text = candidates[0].get("content", {}).get("parts", [{}])[0].get("text", "{}")
                parsed = json.loads(part_text)
                
                valid_cat = parsed.get("category", "Item")
                if valid_cat not in ["Item", "Skill", "Opportunity"]:
                    valid_cat = "Item"

                return {
                    "title": str(parsed.get("title", "Campus Listing")),
                    "category": valid_cat,
                    "description": str(parsed.get("description", description)),
                    "source": "gemini"
                }
    except Exception as e:
        print(f"[Gemini API Warning]: {e}. Falling back to smart mock generator.")

    return generate_smart_suggestion(description)


class RExchangeHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == "/api/ai-assist":
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode("utf-8"))
                description = data.get("description", "").strip()

                if not description:
                    self.send_response(400)
                    self.send_header("Content-Type", "application/json")
                    self.send_header("Access-Control-Allow-Origin", "*")
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": "Description is required"}).encode("utf-8"))
                    return

                suggestion = call_gemini_api(description)

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps(suggestion).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), RExchangeHandler) as httpd:
        print(f"RExchange server running at http://localhost:{PORT}")
        if GEMINI_API_KEY:
            print("Gemini API key loaded from environment.")
        else:
            print("No GEMINI_API_KEY detected. Server will use context-aware smart mock suggestions.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
