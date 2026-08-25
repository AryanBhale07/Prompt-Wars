# RExchange — Testing & Evaluation Suite Documentation

This document describes the automated test architecture, test cases, execution commands, and verified results for the **RExchange** campus peer-to-peer exchange platform.

---

## 1. Overview & Evaluation Priorities

| Evaluation Category | Target Area | Implementation & Coverage |
| :--- | :--- | :--- |
| **Testing** | Automated suite | Unit tests, HTTP endpoint tests, security audits, and accessibility tests across 11 core functional areas. |
| **Security** | XSS & Auth | Input sanitization (`escapeHtml`, `sanitizeText`), protected localStorage, zero exposed frontend secrets, institutional `@srmist.edu.in` validation. |
| **Problem Alignment** | Value Proposition | Clear partition across **Items**, **Skills**, and **Opportunities** with verified campus listings. |
| **Accessibility (a11y)**| WCAG AA Compliance | Visible `:focus-visible` focus rings, dialog semantics (`role="dialog"`, `aria-modal="true"`), and `aria-label` tags on all icon controls. |
| **Code Quality** | Maintainability | Single source of truth for student registries, modular error handling, and memory-efficient DOM listeners. |

---

## 2. Test Execution Commands

### Run Full Test Suite (Python CLI Test Runner)
```bash
python tests/run_tests.py
```

### Run Node.js JavaScript Core Logic Suite
```bash
node tests/test_core_suite.js
```

### Run Single-Page Multi-View Regression Suite
```bash
python scratch/test_singlepage_multisection_suite.py
```

### Run UI Polish & Animation Suite
```bash
python scratch/test_final_ui_polish_suite.py
```

---

## 3. Test Matrix & Results

| # | Test Area | Description & Expected Result | Actual Result |
| :---: | :--- | :--- | :---: |
| **1** | **SRM Verification (Valid)** | Accepts `@srmist.edu.in` emails with normalization and trimming. | `PASS` |
| **2** | **SRM Verification (Invalid)** | Rejects non-SRM domains (`@gmail.com`, `@srmist.com`, spoofed subdomains). | `PASS` |
| **3** | **Security & Sanitization** | Neutralizes `<script>`, `onerror`, and HTML injection vectors via `escapeHtml()`. | `PASS` |
| **4** | **Search (Exact Match)** | Querying `"DBMS"` returns the DBMS textbook listing. | `PASS` |
| **5** | **Search (Tag Match)** | Querying `"python"` returns Python Tutoring & DSA Practice. | `PASS` |
| **6** | **Search (Empty State)** | Querying nonexistent keywords returns empty array and displays clean empty state. | `PASS` |
| **7** | **Category: Items** | Filtering by `Item` returns only physical items (textbooks, calculators, hardware). | `PASS` |
| **8** | **Category: Skills** | Filtering by `Skill` returns only peer tutoring and skill exchanges. | `PASS` |
| **9** | **Category: Opportunities** | Filtering by `Opportunity` returns only hackathons and project collaborations. | `PASS` |
| **10** | **Category: All** | Filtering by `All` returns the complete 12+ listing registry. | `PASS` |
| **11** | **Saved Listings Toggle** | Bookmarking a listing adds it to `state.savedIds`; toggling again removes it. | `PASS` |
| **12** | **Saved Persistence** | Serializes `savedIds` to JSON and restores it accurately on load. | `PASS` |
| **13** | **AI Relevance Engine** | Calculates $>85\%$ match score for programming requests matching Python/DSA tutors. | `PASS` |
| **14** | **AI Assist Categorization** | Infers `Item` for books, `Skill` for tutoring, and `Opportunity` for hackathons. | `PASS` |
| **15** | **Inbox Threading** | Appends sent messages to conversation history and updates `lastMessage`. | `PASS` |
| **16** | **Notification Badges** | Counts unread notifications; `markAllAsRead()` resets unread counter to 0. | `PASS` |
| **17** | **Profile Completeness** | Computes 100% score for complete verified profile and 50% for partial profile. | `PASS` |
| **18** | **HTTP Server (Static)** | Returns HTTP 200 for `/`, `/style.css`, and `/app.js`. | `PASS` |
| **19** | **AI Assist API Endpoint** | POST `/api/ai-assist` returns valid `{ title, category, description }` JSON. | `PASS` |
| **20** | **Frontend Secrets Audit** | Confirms 0 exposed Google Gemini / API keys in client-side code. | `PASS` |
| **21** | **Accessibility: Focus** | Confirms `:focus-visible` styling is active for keyboard accessibility. | `PASS` |
| **22** | **Accessibility: Dialogs** | Confirms `role="dialog"` and `aria-modal="true"` on drawers and modals. | `PASS` |
| **23** | **Mobile Responsiveness** | Confirms `overflow-x: hidden !important` prevents horizontal scroll. | `PASS` |

---

## 4. Production Security Architecture Note

> [!IMPORTANT]
> **Production Deployment Requirement for Institutional Identity:**
> In this frontend client prototype, email verification performs strict domain normalization and format validation for the `@srmist.edu.in` institutional domain.
> In a production deployment, frontend checks MUST be paired with server-side authentication:
> 1. Sending a cryptographic One-Time Password (OTP) or magic link to the user's `@srmist.edu.in` inbox.
> 2. Verifying the token against a rate-limited, authenticated backend API.
> 3. Storing a cryptographically signed session token (e.g., HTTP-only JWT) rather than a plain localStorage key.
> 4. All AI API keys (Google Gemini) remain securely stored in backend environment variables (`GEMINI_API_KEY`) and are never exposed to browser clients.
