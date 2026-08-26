# RExchange — Testing & Evaluation Suite Documentation

This document describes the automated test architecture, test cases, execution commands, and verified results for the **RExchange** campus peer-to-peer exchange platform with Supabase Google OAuth institutional authentication.

---

## 1. Overview & Evaluation Priorities

| Evaluation Category | Target Area | Implementation & Coverage |
| :--- | :--- | :--- |
| **Testing** | Automated suite | Unit tests, HTTP endpoint tests, security audits, and accessibility tests across 12 core functional areas. |
| **Authentication** | Supabase Google OAuth | One-click Google sign-in (`provider: 'google'`), strict `@srmist.edu.in` domain verification, immediate `signOut()` on unauthorized domains. |
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
| **3** | **Google OAuth Session** | Ingests session from Supabase OAuth and grants access for valid SRM email. | `PASS` |
| **4** | **Google OAuth Security** | Signs out unauthorized Google accounts (`@gmail.com`, etc.) and displays denial notice. | `PASS` |
| **5** | **Security & Sanitization** | Neutralizes `<script>`, `onerror`, and HTML injection vectors via `escapeHtml()`. | `PASS` |
| **6** | **Search (Exact Match)** | Querying `"DBMS"` returns the DBMS textbook listing. | `PASS` |
| **7** | **Search (Tag Match)** | Querying `"python"` returns Python Tutoring & DSA Practice. | `PASS` |
| **8** | **Search (Empty State)** | Querying nonexistent keywords returns empty array and displays clean empty state. | `PASS` |
| **9** | **Category: Items** | Filtering by `Item` returns only physical items (textbooks, calculators, hardware). | `PASS` |
| **10** | **Category: Skills** | Filtering by `Skill` returns only peer tutoring and skill exchanges. | `PASS` |
| **11** | **Category: Opportunities** | Filtering by `Opportunity` returns only hackathons and project collaborations. | `PASS` |
| **12** | **Category: All** | Filtering by `All` returns the complete 12+ listing registry. | `PASS` |
| **13** | **Saved Listings Toggle** | Bookmarking a listing adds it to `state.savedIds`; toggling again removes it. | `PASS` |
| **14** | **Saved Persistence** | Serializes `savedIds` to JSON and restores it accurately on load. | `PASS` |
| **15** | **AI Relevance Engine** | Calculates $>85\%$ match score for programming requests matching Python/DSA tutors. | `PASS` |
| **16** | **AI Assist Categorization** | Infers `Item` for books, `Skill` for tutoring, and `Opportunity` for hackathons. | `PASS` |
| **17** | **Inbox Threading** | Appends sent messages to conversation history and updates `lastMessage`. | `PASS` |
| **18** | **Notification Badges** | Counts unread notifications; `markAllAsRead()` resets unread counter to 0. | `PASS` |
| **19** | **Profile Completeness** | Computes 100% score for complete verified profile and 50% for partial profile. | `PASS` |
| **20** | **User Logout Workflow** | Clears session verification state via `supabase.auth.signOut()` and reveals login gate. | `PASS` |
| **21** | **HTTP Server (Static)** | Returns HTTP 200 for `/`, `/style.css`, and `/app.js`. | `PASS` |
| **22** | **AI Assist API Endpoint** | POST `/api/ai-assist` returns valid `{ title, category, description }` JSON. | `PASS` |
| **23** | **Frontend Secrets Audit** | Confirms 0 exposed Google Gemini / API keys in client-side code. | `PASS` |
| **24** | **Google OAuth UI** | Confirms `btn-google-login` and 'Continue with Google' button present in DOM. | `PASS` |
| **25** | **Legacy Flow Clean** | Confirms zero legacy email inputs or OTP elements remain in DOM. | `PASS` |
| **26** | **Accessibility: Focus** | Confirms `:focus-visible` styling is active for keyboard accessibility. | `PASS` |
| **27** | **Accessibility: Dialogs** | Confirms `role="dialog"` and `aria-modal="true"` on drawers and modals. | `PASS` |
| **28** | **Mobile Responsiveness** | Confirms `overflow-x: hidden !important` prevents horizontal scroll. | `PASS` |

---

## 4. Production Security Architecture

> [!IMPORTANT]
> **Supabase Google OAuth & Institutional Identity Architecture:**
> 1. Authentication is conducted via Supabase Google OAuth with `redirectTo: window.location.origin`.
> 2. The authenticated user's actual email address is retrieved directly from the Supabase session (`supabase.auth.getSession()` and `onAuthStateChange`).
> 3. Strict domain validation permits only `@srmist.edu.in` accounts.
> 4. Any unauthorized Google account (e.g., `@gmail.com`, `@srmist.com`) is immediately terminated via `supabase.auth.signOut()`, local storage is purged, and the exact denial message is shown:
>    `"Access restricted to SRM students."`
> 5. All backend Gemini AI keys remain securely in backend environment variables (`GEMINI_API_KEY`) and are never exposed to browser clients.
