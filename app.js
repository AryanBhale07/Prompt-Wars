// 6 Realistic Demo Listings as requested
const INITIAL_LISTINGS = [
  {
    id: 'listing-demo-1',
    title: 'DBMS Textbook (Trade for Python Book or Giveaway)',
    category: 'Item',
    description: 'Offering an old Database Management Systems (DBMS) 7th edition textbook in great condition. No highlights or missing pages. Willing to trade for a Python data science book or give it away for free to anyone taking CS205.',
    contact: 'alex.chen@campus.edu / Discord @alex_chen',
    createdAt: new Date(Date.now() - 1000 * 60 * 25)
  },
  {
    id: 'listing-demo-2',
    title: 'Python Tutoring (Seeking Spanish Practice)',
    category: 'Skill',
    description: 'Junior CS major offering 1-on-1 peer tutoring in Python, JavaScript, React, and Data Structures. Looking to exchange for Spanish conversational practice or beginner guitar lessons. Available in the library or online.',
    contact: 'sarah.m@campus.edu',
    createdAt: new Date(Date.now() - 1000 * 60 * 95)
  },
  {
    id: 'listing-demo-3',
    title: 'Arduino Starter Kit (Complete with Sensors & Breadboard)',
    category: 'Item',
    description: 'Complete Arduino Uno starter kit with breadboard, jumper wires, LED pack, and ultrasonic sensors. Used for one robotics lab, in perfect working order. Open to trading for Raspberry Pi accessories.',
    contact: 'david.k@campus.edu',
    createdAt: new Date(Date.now() - 1000 * 60 * 180)
  },
  {
    id: 'listing-demo-4',
    title: 'Hackathon Team Looking for Frontend Developer',
    category: 'Opportunity',
    description: 'Our 3-person team (2 backend engineers + 1 product designer) is looking for a frontend developer familiar with React/Tailwind for the upcoming 36-hour campus hackathon. Goal is building an AI student study tool!',
    contact: 'marcus.dev@campus.edu / @marcus_hacks',
    createdAt: new Date(Date.now() - 1000 * 60 * 360)
  },
  {
    id: 'listing-demo-5',
    title: 'Operating Systems Notes & Exam Prep Sheets',
    category: 'Item',
    description: 'Comprehensive handwritten & typed study notes covering OS processes, threads, virtual memory, scheduling algorithms, and file systems. Free to good home or exchange for Algorithms study materials.',
    contact: 'rachel.t@campus.edu',
    createdAt: new Date(Date.now() - 1000 * 60 * 720)
  },
  {
    id: 'listing-demo-6',
    title: 'Figma Mentoring & UI/UX Portfolio Review',
    category: 'Skill',
    description: 'Senior design student offering 1-on-1 mentorship in Figma, wireframing, interactive prototyping, and design systems. Willing to trade for frontend web development help or calculus tutoring.',
    contact: 'chloe.design@campus.edu',
    createdAt: new Date(Date.now() - 1000 * 60 * 1440)
  }
];

// State to store listings, active filter, search query, and AI suggestion
const state = {
  listings: [...INITIAL_LISTINGS],
  activeFilter: 'All',
  searchQuery: '',
  currentAiSuggestion: null
};

// DOM Elements
const form = document.getElementById('listing-form');
const titleInput = document.getElementById('title');
const categorySelect = document.getElementById('category');
const descriptionInput = document.getElementById('description');
const contactInput = document.getElementById('contact');
const errorMessage = document.getElementById('error-message');
const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const listingsFeed = document.getElementById('listings-feed');
const emptyState = document.getElementById('empty-state');
const emptyTitle = document.getElementById('empty-title');
const emptyDesc = document.getElementById('empty-desc');
const filterButtons = document.querySelectorAll('.filter-btn');
const listingCountTag = document.getElementById('listing-count-tag');

// Category Card Count Badges
const countItemsBadge = document.getElementById('count-items');
const countSkillsBadge = document.getElementById('count-skills');
const countOppsBadge = document.getElementById('count-opportunities');

// Hero Interactive Elements
const heroAiSearch = document.getElementById('hero-ai-search');
const heroSearchBtn = document.getElementById('hero-search-btn');
const promptChips = document.querySelectorAll('.prompt-chip');
const categoryFeatureCards = document.querySelectorAll('.feature-cat-card');

// AI Assist Elements
const aiAssistBtn = document.getElementById('ai-assist-btn');
const aiBtnText = document.getElementById('ai-btn-text');
const aiFeedbackMsg = document.getElementById('ai-feedback-msg');
const aiSuggestionBox = document.getElementById('ai-suggestion-box');
const aiSuggestedTitle = document.getElementById('ai-suggested-title');
const aiSuggestedCategory = document.getElementById('ai-suggested-category');
const aiSuggestedDescription = document.getElementById('ai-suggested-description');
const aiApplyBtn = document.getElementById('ai-apply-btn');
const aiIgnoreBtn = document.getElementById('ai-ignore-btn');
const aiDismissBtn = document.getElementById('ai-dismiss-btn');

// Helper to escape HTML characters for safe rendering
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

// Format timestamp for display (relative if recent, formatted otherwise)
function formatTimestamp(date) {
  const now = new Date();
  const diffMs = now - new Date(date);
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min${diffMins === 1 ? '' : 's'} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(date));
}

// Get badge CSS class by category
function getBadgeClass(category) {
  switch (category) {
    case 'Item':
      return 'badge-item';
    case 'Skill':
      return 'badge-skill';
    case 'Opportunity':
      return 'badge-opportunity';
    default:
      return 'badge-item';
  }
}

// Update category count indicators
function updateCategoryCounts() {
  const itemsCount = state.listings.filter((l) => l.category === 'Item').length;
  const skillsCount = state.listings.filter((l) => l.category === 'Skill').length;
  const oppsCount = state.listings.filter((l) => l.category === 'Opportunity').length;

  if (countItemsBadge) countItemsBadge.textContent = `${itemsCount} Listing${itemsCount === 1 ? '' : 's'}`;
  if (countSkillsBadge) countSkillsBadge.textContent = `${skillsCount} Listing${skillsCount === 1 ? '' : 's'}`;
  if (countOppsBadge) countOppsBadge.textContent = `${oppsCount} Listing${oppsCount === 1 ? '' : 's'}`;
}

// Set active filter and update UI
function setActiveFilter(filterName) {
  state.activeFilter = filterName;

  filterButtons.forEach((btn) => {
    const isActive = btn.getAttribute('data-filter') === filterName;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  renderListings();
}

// Render listings matching current filter and search query to the feed
function renderListings() {
  const query = state.searchQuery.trim().toLowerCase();

  const filteredListings = state.listings.filter((listing) => {
    const matchesCategory = state.activeFilter === 'All' || listing.category === state.activeFilter;
    const matchesSearch = !query ||
      listing.title.toLowerCase().includes(query) ||
      listing.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Update listing count indicators
  if (listingCountTag) {
    listingCountTag.textContent = `${filteredListings.length} Active Listing${filteredListings.length === 1 ? '' : 's'}`;
  }

  updateCategoryCounts();

  if (filteredListings.length === 0) {
    if (state.listings.length === 0) {
      emptyTitle.textContent = 'No listings yet';
      emptyDesc.textContent = 'Be the first to post an item, skill, or opportunity above!';
    } else if (query && state.activeFilter !== 'All') {
      emptyTitle.textContent = 'No matching listings found';
      emptyDesc.textContent = `No listings in "${state.activeFilter}" match "${state.searchQuery}". Try clearing your search or category filter.`;
    } else if (query) {
      emptyTitle.textContent = 'No results found';
      emptyDesc.textContent = `No listings found matching "${state.searchQuery}". Try searching for something else.`;
    } else {
      emptyTitle.textContent = `No ${state.activeFilter} listings found`;
      emptyDesc.textContent = `There are currently no listings in the "${state.activeFilter}" category.`;
    }
    emptyState.style.display = 'block';
    listingsFeed.innerHTML = '';
    return;
  }

  emptyState.style.display = 'none';

  // Construct listings markup
  listingsFeed.innerHTML = filteredListings
    .map((listing) => {
      const safeTitle = escapeHtml(listing.title);
      const safeDescription = escapeHtml(listing.description);
      const safeContact = escapeHtml(listing.contact);
      const safeCategory = escapeHtml(listing.category);
      const badgeClass = getBadgeClass(listing.category);
      const formattedTime = formatTimestamp(listing.createdAt);

      return `
        <article class="listing-card" data-id="${escapeHtml(listing.id)}">
          <div class="card-header">
            <h3 class="card-title">${safeTitle}</h3>
            <span class="badge ${badgeClass}">${safeCategory}</span>
          </div>
          <div class="card-meta">
            <span>Posted ${formattedTime}</span>
          </div>
          <p class="card-description">${safeDescription}</p>
          <div class="card-footer">
            <span class="contact-label">Contact:</span> ${safeContact}
          </div>
        </article>
      `;
    })
    .join('');
}

// Validate form fields
function validateForm(title, category, description, contact) {
  if (!title) {
    return 'Please enter a title for your listing.';
  }
  if (!category) {
    return 'Please select a category (Item, Skill, or Opportunity).';
  }
  if (!description) {
    return 'Please provide a description for your listing.';
  }
  if (!contact) {
    return 'Please provide your contact info so others can reach you.';
  }
  return null;
}

// Filter button click event listeners
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filterName = btn.getAttribute('data-filter');
    setActiveFilter(filterName);
  });
});

// Category Feature Cards click listeners
categoryFeatureCards.forEach((card) => {
  card.addEventListener('click', () => {
    const cat = card.getAttribute('data-category');
    if (cat) {
      setActiveFilter(cat);
      const exploreSection = document.getElementById('explore');
      if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

// Search input event listeners in Feed
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (searchClearBtn) {
      searchClearBtn.style.display = state.searchQuery.length > 0 ? 'flex' : 'none';
    }
    renderListings();
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener('click', () => {
    state.searchQuery = '';
    searchInput.value = '';
    searchClearBtn.style.display = 'none';
    searchInput.focus();
    renderListings();
  });
}

// Hero Search Bar & Prompt Chips Handler
function executeHeroSearch(queryText) {
  if (!queryText) return;

  state.searchQuery = queryText;
  if (searchInput) {
    searchInput.value = queryText;
    if (searchClearBtn) searchClearBtn.style.display = 'flex';
  }

  if (/python tutor|guitar lesson|tutoring|figma/i.test(queryText)) {
    setActiveFilter('Skill');
  } else if (/textbook|book|fridge|calculator|notes|arduino/i.test(queryText)) {
    setActiveFilter('Item');
  } else if (/hackathon|teammate|project/i.test(queryText)) {
    setActiveFilter('Opportunity');
  } else {
    setActiveFilter('All');
  }

  renderListings();

  const exploreSection = document.getElementById('explore');
  if (exploreSection) {
    exploreSection.scrollIntoView({ behavior: 'smooth' });
  }
}

if (heroSearchBtn && heroAiSearch) {
  heroSearchBtn.addEventListener('click', () => {
    executeHeroSearch(heroAiSearch.value.trim());
  });

  heroAiSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeHeroSearch(heroAiSearch.value.trim());
    }
  });
}

promptChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const query = chip.getAttribute('data-query');
    if (heroAiSearch) heroAiSearch.value = query;
    executeHeroSearch(query);
  });
});

// Animated Counter for Campus Pulse
function animatePulseCounters() {
  const metricElements = document.querySelectorAll('.metric-number[data-target]');
  const duration = 1400; // ms

  metricElements.forEach((el) => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * target);

      el.textContent = currentVal;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

// Observe when Campus Pulse section enters the viewport
const pulseSection = document.getElementById('pulse');
if (pulseSection && 'IntersectionObserver' in window) {
  let counterAnimated = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counterAnimated) {
          counterAnimated = true;
          animatePulseCounters();
        }
      });
    },
    { threshold: 0.25 }
  );
  observer.observe(pulseSection);
} else {
  // Fallback if IntersectionObserver is not supported
  animatePulseCounters();
}

// Smart context-aware client fallback generator for AI Assist
function generateFallbackAiSuggestion(roughText) {
  const textClean = roughText.trim();
  const textLower = textClean.toLowerCase();

  // 1. Detect Category Cues
  const isOpportunity = /\b(hackathon|teammate|team member|join (our|my|a) team|looking for (a |an )?(partner|teammate|developer|dev|designer|collaborator|co-founder)|collaborat(e|or|ion)|startup|roommate|club recruiting|hiring|internship)\b/i.test(textLower);

  const isSkill = /\b(tutor(ing)?|teach(ing)?|lessons?|coach(ing)?|mentor(ing)?|can explain|help you (learn|study|code)|willing to teach|offer(ing)? (peer )?(tutoring|lessons|coaching))\b/i.test(textLower);

  const isItem = /\b(textbook|book|notes|flashcards|calculator|laptop|macbook|ipad|tablet|monitor|desk|chair|lamp|fridge|bike|bicycle|scooter|hoodie|jacket|clothes|shoes|ticket|pass|charger|headphones|backpack|bed|mattress|furniture|arduino|sensor|give(ing)? away|don't need|have an? (old|used|extra|spare)|selling|for sale|trade (it )?(for|with) (a |an )?(book|textbook|item|calculator))\b/i.test(textLower);

  let category = 'Item';
  if (isOpportunity && !(isItem && /\b(selling|give away|have an? old|have an? used)\b/i.test(textLower))) {
    category = 'Opportunity';
  } else if (isItem && !(isSkill && /\b(teach|tutor|give lessons)\b/i.test(textLower) && !/\b(have an?|selling|give away|don't need)\b/i.test(textLower))) {
    category = 'Item';
  } else if (isSkill) {
    category = 'Skill';
  } else {
    category = 'Item';
  }

  // 2. Extract Specific Entities & Subjects
  const knownSubjects = [
    { name: 'DBMS Textbook', regex: /\bdbms\b|database/i },
    { name: 'Arduino Starter Kit', regex: /\barduino\b|microcontroller/i },
    { name: 'Operating Systems Notes', regex: /\boperating systems?\b|\bos notes\b/i },
    { name: 'DSA / Data Structures', regex: /\bdsa\b|data structures?/i },
    { name: 'OOP / Java', regex: /\boop\b|object oriented/i },
    { name: 'Calculus', regex: /\bcalculus\b|\bcalc\b/i },
    { name: 'Linear Algebra', regex: /\blinear algebra\b/i },
    { name: 'Organic Chemistry', regex: /\borganic chem(istry)?\b|\borgo\b/i },
    { name: 'Chemistry', regex: /\bchem(istry)?\b/i },
    { name: 'Physics', regex: /\bphysics\b/i },
    { name: 'Biology', regex: /\bbiology\b|\bbio\b/i },
    { name: 'Economics', regex: /\becon(omics)?\b/i },
    { name: 'Psychology', regex: /\bpsych(ology)?\b/i },
    { name: 'Python', regex: /\bpython\b/i },
    { name: 'Figma / UI/UX', regex: /\bfigma\b|ui\/ux|ui design/i },
    { name: 'JavaScript / Web Dev', regex: /\bjavascript\b|\bjs\b|\bweb dev\b|\breact\b/i },
    { name: 'Machine Learning / AI', regex: /\bmachine learning\b|\bml\b|\bai\b/i },
    { name: 'Guitar', regex: /\bguitar\b/i },
    { name: 'Piano', regex: /\bpiano\b/i },
    { name: 'TI-84 Graphing Calculator', regex: /\bti-?84\b|\bgraphing calculator\b/i },
    { name: 'Mini Fridge', regex: /\b(mini )?fridge\b|\brefrigerator\b/i },
    { name: 'Bicycle', regex: /\b(road |mountain )?bike\b|\bbicycle\b/i },
    { name: 'Computer Monitor', regex: /\bmonitor\b|\bdisplay\b/i },
    { name: 'MacBook / Laptop', regex: /\bmacbook\b|\blaptop\b/i },
    { name: 'iPad / Tablet', regex: /\bipad\b|\btablet\b/i },
    { name: 'Dorm Furniture', regex: /\b(desk|chair|lamp|fan|mattress|bed frame|mirror|furniture)\b/i },
    { name: 'Campus Event Ticket', regex: /\b(homecoming|concert|football|event) tickets?\b/i }
  ];

  let detectedSubject = null;
  for (const s of knownSubjects) {
    if (s.regex.test(textLower)) {
      detectedSubject = s.name;
      break;
    }
  }

  // Extract Trade Target if any (e.g. "trade for a Python book")
  const tradeMatch = textLower.match(/\btrade (?:it )?(?:for|with) (?:a |an )?([^,.\n]+?)(?=\s+(?:or|and|for free|give|to)\b|[.,;]|$)/i);
  let tradeTarget = tradeMatch ? tradeMatch[1].trim() : null;
  if (tradeTarget && tradeTarget.length > 30) {
    tradeTarget = tradeTarget.substring(0, 30).trim();
  }

  const isGiveaway = /\b(give (it )?away|giving away|free|free to good home|don't need)\b/i.test(textLower);
  const isSale = /\b(selling|for sale|\$\d+)\b/i.test(textLower);

  let title = '';
  let description = '';

  if (category === 'Item') {
    const itemNoun = /\btextbook\b/i.test(textLower) ? 'Textbook' : (/\bbook\b/i.test(textLower) ? 'Book' : (/\bnotes\b/i.test(textLower) ? 'Notes' : (/\bcalculator\b/i.test(textLower) ? 'Calculator' : (/\bkit\b/i.test(textLower) ? 'Kit' : null))));

    let baseTitle = 'Campus Item';
    if (detectedSubject) {
      if (itemNoun && !detectedSubject.toLowerCase().includes(itemNoun.toLowerCase())) {
        baseTitle = `${detectedSubject} ${itemNoun}`;
      } else {
        baseTitle = detectedSubject;
      }
    } else if (itemNoun) {
      baseTitle = `Course ${itemNoun}`;
    } else {
      const stopWords = /^(i|have|an?|the|my|don't|need|it|some|giving|give|away|for|free|selling|sell|want|to|trade|looking|old|used)$/i;
      const words = textClean.split(/\s+/).filter(w => !stopWords.test(w.replace(/[.,;:!?]/g, '')));
      baseTitle = words.slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Campus Item';
    }

    if (tradeTarget && isGiveaway) {
      const formattedTarget = tradeTarget.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      title = `${baseTitle} (Trade for ${formattedTarget} or Giveaway)`;
    } else if (tradeTarget) {
      const formattedTarget = tradeTarget.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      title = `${baseTitle} (Trade for ${formattedTarget})`;
    } else if (isGiveaway) {
      title = `${baseTitle} (Free Giveaway)`;
    } else if (isSale) {
      title = `${baseTitle} (For Sale / Trade)`;
    } else {
      title = `${baseTitle} for Exchange`;
    }

    if (isGiveaway && tradeTarget) {
      description = `Offering this ${baseTitle.toLowerCase()} in good condition. Willing to trade for a ${tradeTarget} or give it away for free to any student who needs it. Open for quick on-campus pickup or exchange.`;
    } else if (isGiveaway) {
      description = `Giving away ${baseTitle.toLowerCase()} for free to any student who needs it. In good condition. Please reach out for on-campus pickup.`;
    } else if (tradeTarget) {
      description = `Available for exchange: ${baseTitle}. Looking to trade for ${tradeTarget} or comparable course materials. Contact for on-campus meetup.`;
    } else {
      description = `${baseTitle} available for campus trade or exchange. ${textClean} Reach out if interested!`;
    }
  } else if (category === 'Skill') {
    const subj = detectedSubject || 'Peer';
    if (tradeTarget) {
      const formattedTarget = tradeTarget.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      title = `${subj} Tutoring & Coaching (Trade for ${formattedTarget})`;
      description = `Offering peer tutoring and collaborative study sessions in ${subj}. Open to trading for ${tradeTarget} or other skills. Flexible scheduling on campus or online.`;
    } else {
      title = `${subj} Tutoring & Skill Sharing`;
      description = `Offering 1-on-1 peer tutoring and guidance in ${subj}. Happy to exchange for help in other subjects or campus resources. Reach out to connect!`;
    }
  } else { // Opportunity
    const subj = detectedSubject || 'Campus Project';
    const roleMatch = textLower.match(/\b(developer|dev|designer|frontend|backend|engineer|roommate|co-founder)\b/i);
    const role = roleMatch ? roleMatch[1].charAt(0).toUpperCase() + roleMatch[1].slice(1) : 'Teammates';

    if (/hackathon/i.test(textLower)) {
      title = `Hackathon Team: ${role} Needed (${subj})`;
    } else if (/startup|project/i.test(textLower)) {
      title = `${subj} Project — Seeking ${role}`;
    } else {
      title = `${subj} Opportunity: Looking for ${role}`;
    }

    description = `Looking for motivated student collaborators to team up on ${subj}. ${textClean} Reach out if you'd like to collaborate and build together!`;
  }

  return {
    title,
    category,
    description,
    source: 'smart_fallback'
  };
}

// Display AI Suggestions card
function displayAiSuggestions(suggestion) {
  state.currentAiSuggestion = suggestion;

  aiSuggestedTitle.textContent = suggestion.title;
  aiSuggestedCategory.textContent = suggestion.category;
  aiSuggestedCategory.className = `badge ${getBadgeClass(suggestion.category)}`;
  aiSuggestedDescription.textContent = suggestion.description;

  aiSuggestionBox.style.display = 'block';
  aiSuggestionBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Hide AI Suggestions card
function hideAiSuggestions() {
  aiSuggestionBox.style.display = 'none';
  state.currentAiSuggestion = null;
}

// Handle AI Assist button click
if (aiAssistBtn) {
  aiAssistBtn.addEventListener('click', async () => {
    const rawDescription = descriptionInput.value.trim();

    if (!rawDescription) {
      aiFeedbackMsg.textContent = '💡 Please type a rough description first (e.g., "selling my calc 2 book for 20 or trade for notes")';
      aiFeedbackMsg.style.display = 'block';
      descriptionInput.focus();
      return;
    }

    aiFeedbackMsg.style.display = 'none';
    aiAssistBtn.disabled = true;
    if (aiBtnText) aiBtnText.textContent = 'Generating...';

    try {
      const response = await fetch('/api/ai-assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: rawDescription })
      });

      if (response.ok) {
        const data = await response.json();
        displayAiSuggestions(data);
      } else {
        const fallbackData = generateFallbackAiSuggestion(rawDescription);
        displayAiSuggestions(fallbackData);
      }
    } catch (err) {
      const fallbackData = generateFallbackAiSuggestion(rawDescription);
      displayAiSuggestions(fallbackData);
    } finally {
      aiAssistBtn.disabled = false;
      if (aiBtnText) aiBtnText.textContent = 'AI Assist';
    }
  });
}

// Apply AI suggestions to form inputs
if (aiApplyBtn) {
  aiApplyBtn.addEventListener('click', () => {
    if (!state.currentAiSuggestion) return;

    const { title, category, description } = state.currentAiSuggestion;

    titleInput.value = title;
    categorySelect.value = category;
    descriptionInput.value = description;

    // Trigger visual pulse animation on auto-filled inputs
    [titleInput, categorySelect, descriptionInput].forEach((el) => {
      el.classList.remove('field-flash');
      void el.offsetWidth;
      el.classList.add('field-flash');
    });

    hideAiSuggestions();
    contactInput.focus();
  });
}

// Dismiss / Ignore AI suggestions
if (aiIgnoreBtn) {
  aiIgnoreBtn.addEventListener('click', hideAiSuggestions);
}

if (aiDismissBtn) {
  aiDismissBtn.addEventListener('click', hideAiSuggestions);
}

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const category = categorySelect.value;
  const description = descriptionInput.value.trim();
  const contact = contactInput.value.trim();

  // Validate fields
  const error = validateForm(title, category, description, contact);
  if (error) {
    errorMessage.textContent = error;
    errorMessage.style.display = 'block';
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }

  // Clear any existing error message
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';

  // Create new listing object
  const newListing = {
    id: `listing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title,
    category,
    description,
    contact,
    createdAt: new Date()
  };

  // Add listing to the beginning of the list (newest first)
  state.listings.unshift(newListing);

  // If the active filter would hide the new listing, reset filter to 'All'
  if (state.activeFilter !== 'All' && state.activeFilter !== category) {
    setActiveFilter('All');
  } else {
    renderListings();
  }

  // Hide AI suggestions if open
  hideAiSuggestions();

  // Reset form
  form.reset();

  // Scroll smoothly to feed to show the newly posted listing
  const feedSection = document.getElementById('explore');
  if (feedSection) {
    feedSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Initial render
renderListings();
