// ==========================================================================
// RExchange — Core Application Logic & Explore Directory
// ==========================================================================

// 12 Realistic Demo Listings across Items, Skills, and Opportunities
const INITIAL_LISTINGS = [
  // --- ITEMS ---
  {
    id: 'listing-item-1',
    title: 'DBMS Textbook (Database System Concepts 7th Ed)',
    category: 'Item',
    description: 'Offering an old Database Management Systems (DBMS) 7th edition textbook in great condition. No highlights, tears, or missing pages. Willing to trade for a Python data science book or give away for free to anyone taking CS205.',
    studentName: 'Alex Chen',
    avatar: 'AC',
    contact: 'alex.chen@campus.edu / Discord @alex_chen',
    tags: ['#textbook', '#dbms', '#cs205', '#free', '#trade'],
    availability: 'Available',
    isFree: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 25) // 25 mins ago
  },
  {
    id: 'listing-item-2',
    title: 'Operating Systems Notes & Exam Prep Sheets',
    category: 'Item',
    description: 'Comprehensive handwritten & typed study notes covering OS processes, threads, virtual memory, scheduling algorithms, semaphores, and file systems. Free to good home or exchange for Algorithms study materials.',
    studentName: 'Rachel Torres',
    avatar: 'RT',
    contact: 'rachel.t@campus.edu',
    tags: ['#notes', '#os', '#cs301', '#free'],
    availability: 'Available',
    isFree: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 95) // 1.5 hours ago
  },
  {
    id: 'listing-item-3',
    title: 'Scientific Calculator (TI-84 Plus CE Graphing)',
    category: 'Item',
    description: 'TI-84 Plus CE Color Graphing Calculator in mint condition with rechargeable battery and USB charging cable. Perfect for Calculus, Linear Algebra, Statistics, and Physics coursework.',
    studentName: 'Jordan Miller',
    avatar: 'JM',
    contact: 'jordan.m@campus.edu / @jordan_math',
    tags: ['#calculator', '#ti84', '#math', '#engineering'],
    availability: 'Available',
    isFree: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 180) // 3 hours ago
  },
  {
    id: 'listing-item-4',
    title: 'Arduino Starter Kit (Complete with Sensors & Breadboard)',
    category: 'Item',
    description: 'Complete Arduino Uno Rev3 starter kit with breadboard, ultrasonic sensors, jumper wires, servo motor, and resistor pack. Used for one robotics lab, in perfect working order. Open to trading for Raspberry Pi accessories.',
    studentName: 'David Kim',
    avatar: 'DK',
    contact: 'david.k@campus.edu',
    tags: ['#arduino', '#hardware', '#robotics', '#electronics', '#trade'],
    availability: 'Available',
    isFree: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 300) // 5 hours ago
  },

  // --- SKILLS ---
  {
    id: 'listing-skill-1',
    title: 'Python Tutoring (Data Structures & Algorithmic Practice)',
    category: 'Skill',
    description: 'Junior CS major offering 1-on-1 peer tutoring in Python, JavaScript, React, and Data Structures. Looking to exchange for Spanish conversational practice or beginner guitar lessons. Available in the library or online.',
    studentName: 'Sarah Martinez',
    avatar: 'SM',
    contact: 'sarah.m@campus.edu',
    tags: ['#python', '#dsa', '#tutoring', '#peerhelp'],
    availability: 'Available',
    isFree: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 45) // 45 mins ago
  },
  {
    id: 'listing-skill-2',
    title: 'Java OOP Mentoring & Architecture Review',
    category: 'Skill',
    description: 'Offering guidance on Object-Oriented Programming principles, design patterns, inheritance, polymorphism, unit testing, and clean Java code architecture for CS110/CS210 students.',
    studentName: 'Liam Patel',
    avatar: 'LP',
    contact: 'liam.p@campus.edu / @liam_dev',
    tags: ['#java', '#oop', '#mentoring', '#free'],
    availability: 'Available',
    isFree: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 120) // 2 hours ago
  },
  {
    id: 'listing-skill-3',
    title: 'UI/UX Design Help & Portfolio Wireframe Reviews',
    category: 'Skill',
    description: 'Design senior ready to review student app prototypes, Figma wireframes, and usability flows. Happy to help you prep design case studies or exchange for frontend web dev help.',
    studentName: 'Chloe Vance',
    avatar: 'CV',
    contact: 'chloe.design@campus.edu',
    tags: ['#uiux', '#design', '#portfolio', '#wireframing'],
    availability: 'Available',
    isFree: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 240) // 4 hours ago
  },
  {
    id: 'listing-skill-4',
    title: 'Figma Mentoring (Auto Layout, Tokens & Interactive Prototyping)',
    category: 'Skill',
    description: 'Senior design student offering 1-on-1 mentorship in Figma, wireframing, Auto Layout 5.0, variables, design tokens, and interactive component prototyping. Happy to trade for coding help.',
    studentName: 'Elena Rostova',
    avatar: 'ER',
    contact: 'elena.r@campus.edu',
    tags: ['#figma', '#components', '#autolayout', '#design'],
    availability: 'Available',
    isFree: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 360) // 6 hours ago
  },

  // --- OPPORTUNITIES ---
  {
    id: 'listing-opp-1',
    title: 'Hackathon Team Looking for Frontend Developer',
    category: 'Opportunity',
    description: 'Our 3-person team (2 backend engineers + 1 product designer) is looking for a frontend developer familiar with React/Tailwind for the upcoming 36-hour campus hackathon. Goal is building an AI student study tool!',
    studentName: 'Marcus Wright',
    avatar: 'MW',
    contact: 'marcus.dev@campus.edu / @marcus_hacks',
    tags: ['#hackathon', '#react', '#frontend', '#ai', '#team'],
    availability: 'Available',
    isFree: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 30) // 30 mins ago
  },
  {
    id: 'listing-opp-2',
    title: 'College Coding Workshop (Git, GitHub & Open Source)',
    category: 'Opportunity',
    description: 'Free hands-on Git & Open Source collaboration workshop this Thursday at 6 PM in Turing Hall Room 302. Learn branching, pull requests, and open source contributing. Pizza provided!',
    studentName: 'Dev Club Leads',
    avatar: 'DC',
    contact: 'devclub@campus.edu',
    tags: ['#workshop', '#opensource', '#github', '#free', '#event'],
    availability: 'Available',
    isFree: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60) // 1 hour ago
  },
  {
    id: 'listing-opp-3',
    title: 'Student Project Collaboration (Campus Carpool & Rideshare App)',
    category: 'Opportunity',
    description: 'Developing a student-only campus rideshare & carpool optimization app for commuters. Seeking a backend developer with FastAPI or Node experience and a mobile dev interested in Flutter/React Native.',
    studentName: 'Aiden Scott',
    avatar: 'AS',
    contact: 'aiden.s@campus.edu',
    tags: ['#project', '#machinelearning', '#datascience', '#collab'],
    availability: 'Available',
    isFree: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 210) // 3.5 hours ago
  },
  {
    id: 'listing-opp-4',
    title: 'Design Competition (Annual Campus Arts & Festival Branding)',
    category: 'Opportunity',
    description: 'Annual campus spring festival poster & merchandise design competition. Open to all students. Top 3 submissions receive cash awards, exhibition features, and campus merchandise credits.',
    studentName: 'Campus Arts Society',
    avatar: 'CA',
    contact: 'arts.society@campus.edu',
    tags: ['#competition', '#graphicdesign', '#prizes', '#campus'],
    availability: 'Available',
    isFree: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 480) // 8 hours ago
  }
];

// App State
const state = {
  listings: [...INITIAL_LISTINGS],
  activeFilter: 'All', // 'All', 'Item', 'Skill', 'Opportunity'
  sortBy: 'newest',    // 'newest', 'relevant'
  filterType: 'all',   // 'all', 'free', 'available'
  searchQuery: '',
  savedIds: new Set(),
  currentAiSuggestion: null,
  activeModalListing: null
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
const clearSearchBtn = document.getElementById('clear-search-btn');
const filterButtons = document.querySelectorAll('#filter-bar .filter-btn');
const secFilterButtons = document.querySelectorAll('.sec-filter-btn');
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
const exploreAiBtn = document.getElementById('explore-ai-btn');

// Listing Details Modal Elements
const listingModal = document.getElementById('listing-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCloseActionBtn = document.getElementById('modal-close-action-btn');
const modalCategoryBadge = document.getElementById('modal-category-badge');
const modalAvailBadge = document.getElementById('modal-avail-badge');
const modalTitle = document.getElementById('modal-title');
const modalAvatar = document.getElementById('modal-avatar');
const modalAuthorName = document.getElementById('modal-author-name');
const modalPostedTime = document.getElementById('modal-posted-time');
const modalDesc = document.getElementById('modal-desc');
const modalTags = document.getElementById('modal-tags');
const modalContact = document.getElementById('modal-contact');
const modalCopyBtn = document.getElementById('modal-copy-btn');
const modalSaveBtn = document.getElementById('modal-save-btn');
const modalSaveText = document.getElementById('modal-save-text');

// Post Form AI Assist Elements
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

// Toast Notification
const toast = document.getElementById('toast');

// Helper to escape HTML characters for safe rendering
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

// Show Toast Notification
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2200);
}

// Format timestamp for display
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

// Set active primary category filter
function setActiveFilter(filterName) {
  state.activeFilter = filterName;

  filterButtons.forEach((btn) => {
    const isActive = btn.getAttribute('data-filter') === filterName;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  renderListings();
}

// Render listings matching current filter, sort, and search query to the 3-column grid
function renderListings() {
  const query = state.searchQuery.trim().toLowerCase();

  // 1. Filter
  let filtered = state.listings.filter((listing) => {
    // Category match
    const matchesCategory = state.activeFilter === 'All' || listing.category === state.activeFilter;

    // Search query match across Title, Description, Category, Tags, Student Name
    let matchesSearch = true;
    if (query) {
      const titleMatch = listing.title.toLowerCase().includes(query);
      const descMatch = listing.description.toLowerCase().includes(query);
      const catMatch = listing.category.toLowerCase().includes(query);
      const nameMatch = (listing.studentName || '').toLowerCase().includes(query);
      const tagsMatch = Array.isArray(listing.tags) && listing.tags.some(t => t.toLowerCase().includes(query));

      matchesSearch = titleMatch || descMatch || catMatch || nameMatch || tagsMatch;
    }

    // Secondary Filter match
    let matchesSecondary = true;
    if (state.filterType === 'free') {
      matchesSecondary = listing.isFree || /\b(free|giveaway|give away)\b/i.test(listing.description + ' ' + listing.title);
    } else if (state.filterType === 'available') {
      matchesSecondary = (listing.availability || 'Available').toLowerCase() === 'available';
    }

    return matchesCategory && matchesSearch && matchesSecondary;
  });

  // 2. Sort
  if (state.sortBy === 'newest') {
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (state.sortBy === 'relevant') {
    if (query) {
      filtered.sort((a, b) => {
        const aScore = (a.title.toLowerCase().includes(query) ? 3 : 0) + (a.description.toLowerCase().includes(query) ? 1 : 0);
        const bScore = (b.title.toLowerCase().includes(query) ? 3 : 0) + (b.description.toLowerCase().includes(query) ? 1 : 0);
        return bScore - aScore;
      });
    } else {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }

  // Update listing count indicator
  if (listingCountTag) {
    listingCountTag.textContent = `${filtered.length} Listing${filtered.length === 1 ? '' : 's'}`;
  }

  updateCategoryCounts();

  // Handle Empty State
  if (filtered.length === 0) {
    emptyTitle.textContent = 'No matches found';
    emptyDesc.textContent = 'Try searching for textbooks, tutoring, events or opportunities.';
    emptyState.style.display = 'block';
    listingsFeed.innerHTML = '';
    return;
  }

  emptyState.style.display = 'none';

  // Construct Responsive Cards Grid markup (3-column on desktop)
  listingsFeed.innerHTML = filtered
    .map((listing) => {
      const safeId = escapeHtml(listing.id);
      const safeTitle = escapeHtml(listing.title);
      const safeDescription = escapeHtml(listing.description);
      const safeCategory = escapeHtml(listing.category);
      const safeAuthor = escapeHtml(listing.studentName || 'Student Member');
      const safeAvatar = escapeHtml(listing.avatar || safeAuthor.slice(0, 2).toUpperCase());
      const safeAvail = escapeHtml(listing.availability || 'Available');
      const badgeClass = getBadgeClass(listing.category);
      const formattedTime = formatTimestamp(listing.createdAt);
      const isSaved = state.savedIds.has(listing.id);

      const tagsHtml = (listing.tags || ['#campus', `#${listing.category.toLowerCase()}`])
        .map(tag => `<span class="tag-pill" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</span>`)
        .join('');

      return `
        <article class="listing-card-modern" data-id="${safeId}">
          <div class="card-top-row">
            <div class="card-badges-left">
              <span class="badge ${badgeClass}">${safeCategory}</span>
              <span class="badge-avail">🟢 ${safeAvail}</span>
            </div>
            <button type="button" class="btn-card-save ${isSaved ? 'is-saved' : ''}" data-id="${safeId}" title="${isSaved ? 'Saved' : 'Save listing'}" aria-label="Save listing">
              ${isSaved ? '🔖' : '☆'}
            </button>
          </div>

          <h3 class="card-listing-title">${safeTitle}</h3>
          <p class="card-listing-desc">${safeDescription}</p>

          <div class="card-tags-row">
            ${tagsHtml}
          </div>

          <div class="card-author-footer">
            <div class="author-profile-left">
              <div class="author-avatar">${safeAvatar}</div>
              <div class="author-details">
                <span class="author-name">${safeAuthor}</span>
                <span class="author-time">${formattedTime}</span>
              </div>
            </div>
            <button type="button" class="btn-card-view" data-id="${safeId}">View →</button>
          </div>
        </article>
      `;
    })
    .join('');

  attachCardListeners();
}

// Attach card event listeners
function attachCardListeners() {
  // Save Buttons
  document.querySelectorAll('.btn-card-save').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const listingId = btn.getAttribute('data-id');
      toggleSaveListing(listingId);
    });
  });

  // View Buttons & Card Clicks
  document.querySelectorAll('.btn-card-view').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const listingId = btn.getAttribute('data-id');
      openListingModal(listingId);
    });
  });

  document.querySelectorAll('.listing-card-modern').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.tag-pill') || e.target.closest('.btn-card-save')) return;
      const listingId = card.getAttribute('data-id');
      openListingModal(listingId);
    });
  });

  // Tag Clicks
  document.querySelectorAll('.tag-pill').forEach((pill) => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const tagText = pill.getAttribute('data-tag').replace(/^#/, '');
      if (searchInput) searchInput.value = tagText;
      state.searchQuery = tagText;
      if (searchClearBtn) searchClearBtn.style.display = 'flex';
      renderListings();
      const exploreSection = document.getElementById('explore');
      if (exploreSection) exploreSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Toggle Save Listing
function toggleSaveListing(listingId) {
  if (state.savedIds.has(listingId)) {
    state.savedIds.delete(listingId);
    showToast('Removed from saved.');
  } else {
    state.savedIds.add(listingId);
    showToast('🔖 Saved listing!');
  }

  if (state.activeModalListing && state.activeModalListing.id === listingId) {
    const isSaved = state.savedIds.has(listingId);
    if (modalSaveText) modalSaveText.textContent = isSaved ? 'Saved 🔖' : 'Save Listing';
  }

  renderListings();
}

// Open Listing Modal Details
function openListingModal(listingId) {
  const listing = state.listings.find(l => l.id === listingId);
  if (!listing || !listingModal) return;

  state.activeModalListing = listing;

  modalCategoryBadge.textContent = listing.category;
  modalCategoryBadge.className = `badge ${getBadgeClass(listing.category)}`;
  modalAvailBadge.textContent = `🟢 ${listing.availability || 'Available'}`;
  modalTitle.textContent = listing.title;
  
  const authorName = listing.studentName || 'Student Member';
  modalAvatar.textContent = listing.avatar || authorName.slice(0, 2).toUpperCase();
  modalAuthorName.textContent = authorName;
  modalPostedTime.textContent = `Posted ${formatTimestamp(listing.createdAt)}`;
  modalDesc.textContent = listing.description;
  modalContact.textContent = listing.contact;

  const tagsHtml = (listing.tags || ['#campus', `#${listing.category.toLowerCase()}`])
    .map(tag => `<span class="tag-pill">${escapeHtml(tag)}</span>`)
    .join('');
  modalTags.innerHTML = tagsHtml;

  const isSaved = state.savedIds.has(listing.id);
  if (modalSaveText) modalSaveText.textContent = isSaved ? 'Saved 🔖' : 'Save Listing';

  listingModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Close Listing Modal
function closeListingModal() {
  if (listingModal) {
    listingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    state.activeModalListing = null;
  }
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeListingModal);
if (modalCloseActionBtn) modalCloseActionBtn.addEventListener('click', closeListingModal);

if (listingModal) {
  listingModal.addEventListener('click', (e) => {
    if (e.target === listingModal) closeListingModal();
  });
}

// Modal Copy Contact
if (modalCopyBtn) {
  modalCopyBtn.addEventListener('click', () => {
    if (state.activeModalListing) {
      navigator.clipboard.writeText(state.activeModalListing.contact);
      showToast('📋 Contact info copied!');
    }
  });
}

// Modal Save Button
if (modalSaveBtn) {
  modalSaveBtn.addEventListener('click', () => {
    if (state.activeModalListing) {
      toggleSaveListing(state.activeModalListing.id);
    }
  });
}

// Primary Category Filter Buttons Listener
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filterName = btn.getAttribute('data-filter');
    setActiveFilter(filterName);
  });
});

// Secondary Filter Buttons Listener
secFilterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const sortType = btn.getAttribute('data-sort');
    const filterType = btn.getAttribute('data-filter-type');

    if (sortType) {
      state.sortBy = sortType;
      document.querySelectorAll('.sec-filter-btn[data-sort]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    } else if (filterType) {
      if (state.filterType === filterType) {
        state.filterType = 'all';
        btn.classList.remove('active');
      } else {
        state.filterType = filterType;
        document.querySelectorAll('.sec-filter-btn[data-filter-type]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    }

    renderListings();
  });
});

// Clear Search Button
if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    state.searchQuery = '';
    state.activeFilter = 'All';
    state.sortBy = 'newest';
    state.filterType = 'all';
    if (searchInput) searchInput.value = '';
    if (searchClearBtn) searchClearBtn.style.display = 'none';

    filterButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'All'));
    secFilterButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-sort') === 'newest'));

    renderListings();
  });
}

// Search Input Listener in Explore
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

// Category Feature Cards (Pillars section) click handler
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

// Hero Search Bar & Prompt Chips Handler
function executeHeroSearch(queryText) {
  if (!queryText) return;

  state.searchQuery = queryText;
  if (searchInput) {
    searchInput.value = queryText;
    if (searchClearBtn) searchClearBtn.style.display = 'flex';
  }

  if (/python tutor|guitar lesson|tutoring|figma|java/i.test(queryText)) {
    setActiveFilter('Skill');
  } else if (/textbook|book|fridge|calculator|notes|arduino/i.test(queryText)) {
    setActiveFilter('Item');
  } else if (/hackathon|teammate|project|competition/i.test(queryText)) {
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

// Explore AI button click (visual hint)
if (exploreAiBtn) {
  exploreAiBtn.addEventListener('click', () => {
    if (searchInput) {
      searchInput.focus();
      showToast('✨ Type what you need to search listings');
    }
  });
}

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
  animatePulseCounters();
}

// Smart context-aware client fallback generator for AI Assist
function generateFallbackAiSuggestion(roughText) {
  const textClean = roughText.trim();
  const textLower = textClean.toLowerCase();

  const isOpportunity = /\b(hackathon|teammate|team member|join (our|my|a) team|looking for (a |an )?(partner|teammate|developer|dev|designer|collaborator|co-founder)|collaborat(e|or|ion)|startup|roommate|club recruiting|hiring|internship|workshop|competition)\b/i.test(textLower);

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

  const knownSubjects = [
    { name: 'DBMS Textbook', regex: /\bdbms\b|database/i },
    { name: 'Arduino Starter Kit', regex: /\barduino\b|microcontroller/i },
    { name: 'Operating Systems Notes', regex: /\boperating systems?\b|\bos notes\b/i },
    { name: 'DSA / Data Structures', regex: /\bdsa\b|data structures?/i },
    { name: 'OOP / Java', regex: /\boop\b|object oriented/i },
    { name: 'Calculus', regex: /\bcalculus\b|\bcalc\b/i },
    { name: 'Linear Algebra', regex: /\blinear algebra\b/i },
    { name: 'Python', regex: /\bpython\b/i },
    { name: 'Figma / UI/UX', regex: /\bfigma\b|ui\/ux|ui design/i },
    { name: 'JavaScript / Web Dev', regex: /\bjavascript\b|\bjs\b|\bweb dev\b|\breact\b/i },
    { name: 'TI-84 Graphing Calculator', regex: /\bti-?84\b|\bgraphing calculator\b/i }
  ];

  let detectedSubject = null;
  for (const s of knownSubjects) {
    if (s.regex.test(textLower)) {
      detectedSubject = s.name;
      break;
    }
  }

  const tradeMatch = textLower.match(/\btrade (?:it )?(?:for|with) (?:a |an )?([^,.\n]+?)(?=\s+(?:or|and|for free|give|to)\b|[.,;]|$)/i);
  let tradeTarget = tradeMatch ? tradeMatch[1].trim() : null;

  const isGiveaway = /\b(give (it )?away|giving away|free|free to good home|don't need)\b/i.test(textLower);

  let title = '';
  let description = '';

  if (category === 'Item') {
    const baseTitle = detectedSubject || 'Campus Item';
    if (tradeTarget && isGiveaway) {
      title = `${baseTitle} (Trade for ${tradeTarget} or Giveaway)`;
    } else if (tradeTarget) {
      title = `${baseTitle} (Trade for ${tradeTarget})`;
    } else if (isGiveaway) {
      title = `${baseTitle} (Free Giveaway)`;
    } else {
      title = `${baseTitle} for Exchange`;
    }
    description = `Offering ${baseTitle.toLowerCase()} in great condition. ${textClean} Open for quick on-campus meetup or exchange.`;
  } else if (category === 'Skill') {
    const subj = detectedSubject || 'Peer';
    title = `${subj} Tutoring & Skill Sharing`;
    description = `Offering 1-on-1 peer tutoring and guidance in ${subj}. ${textClean} Reach out to connect!`;
  } else {
    const subj = detectedSubject || 'Campus Project';
    title = `${subj} Collaboration Opportunity`;
    description = `Looking for motivated student collaborators to team up on ${subj}. ${textClean} Reach out if interested!`;
  }

  return { title, category, description, source: 'smart_fallback' };
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

function hideAiSuggestions() {
  aiSuggestionBox.style.display = 'none';
  state.currentAiSuggestion = null;
}

if (aiAssistBtn) {
  aiAssistBtn.addEventListener('click', async () => {
    const rawDescription = descriptionInput.value.trim();

    if (!rawDescription) {
      aiFeedbackMsg.textContent = '💡 Please type a rough description first (e.g. "trading my DBMS book for python notes")';
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

if (aiApplyBtn) {
  aiApplyBtn.addEventListener('click', () => {
    if (!state.currentAiSuggestion) return;

    const { title, category, description } = state.currentAiSuggestion;

    titleInput.value = title;
    categorySelect.value = category;
    descriptionInput.value = description;

    [titleInput, categorySelect, descriptionInput].forEach((el) => {
      el.classList.remove('field-flash');
      void el.offsetWidth;
      el.classList.add('field-flash');
    });

    hideAiSuggestions();
    contactInput.focus();
  });
}

if (aiIgnoreBtn) aiIgnoreBtn.addEventListener('click', hideAiSuggestions);
if (aiDismissBtn) aiDismissBtn.addEventListener('click', hideAiSuggestions);

// Form Validation & Submission
function validateForm(title, category, description, contact) {
  if (!title) return 'Please enter a title for your listing.';
  if (!category) return 'Please select a category (Item, Skill, or Opportunity).';
  if (!description) return 'Please provide a description for your listing.';
  if (!contact) return 'Please provide your contact info so others can reach you.';
  return null;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const category = categorySelect.value;
  const description = descriptionInput.value.trim();
  const contact = contactInput.value.trim();

  const error = validateForm(title, category, description, contact);
  if (error) {
    errorMessage.textContent = error;
    errorMessage.style.display = 'block';
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }

  errorMessage.textContent = '';
  errorMessage.style.display = 'none';

  const titleWords = title.toLowerCase().split(/\s+/).filter(w => w.length > 3).slice(0, 2);
  const autoTags = [`#${category.toLowerCase()}`, ...titleWords.map(w => `#${w}`)];
  if (/\bfree\b/i.test(description + ' ' + title)) autoTags.push('#free');

  const newListing = {
    id: `listing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title,
    category,
    description,
    studentName: 'You (Campus Member)',
    avatar: 'YOU',
    contact,
    tags: autoTags,
    availability: 'Available',
    isFree: /\bfree\b/i.test(description + ' ' + title),
    createdAt: new Date()
  };

  state.listings.unshift(newListing);

  if (state.activeFilter !== 'All' && state.activeFilter !== category) {
    setActiveFilter('All');
  } else {
    renderListings();
  }

  hideAiSuggestions();
  form.reset();
  showToast('🎉 Your listing is live on campus!');

  const exploreSection = document.getElementById('explore');
  if (exploreSection) {
    exploreSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Initial Render
renderListings();
