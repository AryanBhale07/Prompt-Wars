// ==========================================================================
// RExchange — Core Application Logic (Single-Page Interactive Campus OS)
// ==========================================================================

// 12 Rich Demo Listings for SRM Campus Community
const INITIAL_LISTINGS = [
  // --- ITEMS ---
  {
    id: 'listing-item-1',
    title: 'DBMS Textbook (Database System Concepts 7th Ed)',
    category: 'Item',
    description: 'Offering an old Database Management Systems (DBMS) 7th edition textbook in great condition. No highlights, tears, or missing pages. Willing to trade for a Python data science book or give away for free to anyone taking CS205.',
    studentName: 'Rahul Sharma',
    department: 'Computer Science & Engineering',
    year: '2nd Year CSE',
    avatar: 'RS',
    contact: 'rahul.sharma@srmist.edu.in / Discord @rahul_cse',
    tags: ['#textbook', '#dbms', '#cs205', '#free', '#trade'],
    availability: 'Available',
    isFree: true,
    icon: '📖',
    matchScore: 94,
    matchReason: 'Matches your interests in DBMS and computer science coursework.',
    createdAt: new Date(Date.now() - 1000 * 60 * 25) // 25 mins ago
  },
  {
    id: 'listing-item-2',
    title: 'Operating Systems Notes & Exam Prep Sheets',
    category: 'Item',
    description: 'Comprehensive handwritten & typed study notes covering OS processes, threads, virtual memory, scheduling algorithms, semaphores, and file systems. Free to good home or exchange for Algorithms study materials.',
    studentName: 'Rachel Torres',
    department: 'Software Engineering',
    year: '3rd Year SE',
    avatar: 'RT',
    contact: 'rachel.t@srmist.edu.in',
    tags: ['#notes', '#os', '#cs301', '#free'],
    availability: 'Available',
    isFree: true,
    icon: '📝',
    matchScore: 91,
    matchReason: 'Matches your core CSE syllabus and exam preparation focus.',
    createdAt: new Date(Date.now() - 1000 * 60 * 95) // 1.5 hours ago
  },
  {
    id: 'listing-item-3',
    title: 'Scientific Calculator (TI-84 Plus CE Graphing)',
    category: 'Item',
    description: 'TI-84 Plus CE Color Graphing Calculator in mint condition with rechargeable battery and USB charging cable. Perfect for Calculus, Linear Algebra, Statistics, and Physics coursework.',
    studentName: 'Jordan Miller',
    department: 'Mathematics & Computing',
    year: '2nd Year Math',
    avatar: 'JM',
    contact: 'jordan.m@srmist.edu.in / @jordan_math',
    tags: ['#calculator', '#ti84', '#math', '#engineering'],
    availability: 'Available',
    isFree: false,
    icon: '🧮',
    matchScore: 89,
    matchReason: 'Recommended for Engineering Mathematics and lab calculations.',
    createdAt: new Date(Date.now() - 1000 * 60 * 180) // 3 hours ago
  },
  {
    id: 'listing-item-4',
    title: 'Arduino Starter Kit (Complete with Sensors & Breadboard)',
    category: 'Item',
    description: 'Complete Arduino Uno Rev3 starter kit with breadboard, ultrasonic sensors, jumper wires, servo motor, and resistor pack. Used for one robotics lab, in perfect working order. Open to trading for Raspberry Pi accessories.',
    studentName: 'David Kim',
    department: 'Electronics & Communication',
    year: '3rd Year ECE',
    avatar: 'DK',
    contact: 'david.k@srmist.edu.in',
    tags: ['#arduino', '#hardware', '#robotics', '#electronics', '#trade'],
    availability: 'Available',
    isFree: false,
    icon: '⚡',
    matchScore: 93,
    matchReason: 'High affinity for IoT hardware labs and microcontroller projects.',
    createdAt: new Date(Date.now() - 1000 * 60 * 300) // 5 hours ago
  },

  // --- SKILLS ---
  {
    id: 'listing-skill-1',
    title: 'Python Tutoring (Data Structures & Algorithmic Practice)',
    category: 'Skill',
    description: 'Junior CS major offering 1-on-1 peer tutoring in Python, JavaScript, React, and Data Structures. Looking to exchange for Spanish conversational practice or beginner guitar lessons. Available in the library or online.',
    studentName: 'Priya Nair',
    department: 'Computer Science',
    year: '3rd Year CSE',
    avatar: 'PN',
    contact: 'priya.nair@srmist.edu.in',
    tags: ['#python', '#dsa', '#tutoring', '#peerhelp'],
    availability: 'Available',
    isFree: true,
    icon: '🐍',
    matchScore: 96,
    matchReason: 'Matches your programming track and upcoming technical interview practice.',
    createdAt: new Date(Date.now() - 1000 * 60 * 45) // 45 mins ago
  },
  {
    id: 'listing-skill-2',
    title: 'Java OOP Mentoring & Architecture Review',
    category: 'Skill',
    description: 'Offering guidance on Object-Oriented Programming principles, design patterns, inheritance, polymorphism, unit testing, and clean Java code architecture for CS110/CS210 students.',
    studentName: 'Liam Patel',
    department: 'Information Technology',
    year: '4th Year IT',
    avatar: 'LP',
    contact: 'liam.p@srmist.edu.in / @liam_dev',
    tags: ['#java', '#oop', '#mentoring', '#free'],
    availability: 'Available',
    isFree: true,
    icon: '☕',
    matchScore: 92,
    matchReason: 'Direct alignment with Object-Oriented System Design modules.',
    createdAt: new Date(Date.now() - 1000 * 60 * 120) // 2 hours ago
  },
  {
    id: 'listing-skill-3',
    title: 'UI/UX Design Help & Portfolio Wireframe Reviews',
    category: 'Skill',
    description: 'Design senior ready to review student app prototypes, Figma wireframes, and usability flows. Happy to help you prep design case studies or exchange for frontend web dev help.',
    studentName: 'Chloe Vance',
    department: 'Human-Centered Design',
    year: '4th Year Design',
    avatar: 'CV',
    contact: 'chloe.design@srmist.edu.in',
    tags: ['#uiux', '#design', '#portfolio', '#wireframing'],
    availability: 'Available',
    isFree: false,
    icon: '🎨',
    matchScore: 90,
    matchReason: 'Great companion skill for web and mobile product development.',
    createdAt: new Date(Date.now() - 1000 * 60 * 240) // 4 hours ago
  },
  {
    id: 'listing-skill-4',
    title: 'Figma Mentoring (Auto Layout, Tokens & Interactive Prototyping)',
    category: 'Skill',
    description: 'Senior design student offering 1-on-1 mentorship in Figma, wireframing, Auto Layout 5.0, variables, design tokens, and interactive component prototyping. Happy to trade for coding help.',
    studentName: 'Meera Shah',
    department: 'Product Design & UI/UX',
    year: '3rd Year Design',
    avatar: 'MS',
    contact: 'meera.shah@srmist.edu.in',
    tags: ['#figma', '#components', '#autolayout', '#design'],
    availability: 'Available',
    isFree: false,
    icon: '📐',
    matchScore: 88,
    matchReason: 'Valuable for hackathon pitch decks and design systems.',
    createdAt: new Date(Date.now() - 1000 * 60 * 360) // 6 hours ago
  },

  // --- OPPORTUNITIES ---
  {
    id: 'listing-opp-1',
    title: 'Hackathon Team Looking for Frontend Developer',
    category: 'Opportunity',
    description: 'Our 3-person team (2 backend engineers + 1 product designer) is looking for a frontend developer familiar with React/Tailwind for the upcoming 36-hour campus hackathon. Goal is building an AI student study tool!',
    studentName: 'Arjun Kumar',
    department: 'Computer Science',
    year: '3rd Year CSE',
    avatar: 'AK',
    contact: 'arjun.k@srmist.edu.in / @arjun_dev',
    tags: ['#hackathon', '#react', '#frontend', '#ai', '#team'],
    availability: 'Available',
    isFree: true,
    icon: '🚀',
    matchScore: 97,
    matchReason: 'Top match based on your React, Frontend, and Hackathon collaboration profile.',
    createdAt: new Date(Date.now() - 1000 * 60 * 30) // 30 mins ago
  },
  {
    id: 'listing-opp-2',
    title: 'College Coding Workshop (Git, GitHub & Open Source)',
    category: 'Opportunity',
    description: 'Free hands-on Git & Open Source collaboration workshop this Thursday at 6 PM in Turing Hall Room 302. Learn branching, pull requests, and open source contributing. Pizza provided!',
    studentName: 'Dev Club Leads',
    department: 'Campus Developer Society',
    year: 'Student Organization',
    avatar: 'DC',
    contact: 'devclub@srmist.edu.in',
    tags: ['#workshop', '#opensource', '#github', '#free', '#event'],
    availability: 'Available',
    isFree: true,
    icon: '👥',
    matchScore: 95,
    matchReason: 'Recommended campus open source event with free peer learning.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60) // 1 hour ago
  },
  {
    id: 'listing-opp-3',
    title: 'Student Project Collaboration (Campus Carpool & Rideshare App)',
    category: 'Opportunity',
    description: 'Developing a student-only campus rideshare & carpool optimization app for commuters. Seeking a backend developer with FastAPI or Node experience and a mobile dev interested in Flutter/React Native.',
    studentName: 'Aiden Scott',
    department: 'Data Science & AI',
    year: '2nd Year AI',
    avatar: 'AS',
    contact: 'aiden.s@srmist.edu.in',
    tags: ['#project', '#machinelearning', '#datascience', '#collab'],
    availability: 'Available',
    isFree: true,
    icon: '🚗',
    matchScore: 92,
    matchReason: 'Strong alignment with collaborative fullstack campus projects.',
    createdAt: new Date(Date.now() - 1000 * 60 * 210) // 3.5 hours ago
  },
  {
    id: 'listing-opp-4',
    title: 'Design Competition (Annual Campus Arts & Festival Branding)',
    category: 'Opportunity',
    description: 'Annual campus spring festival poster & merchandise design competition. Open to all students. Top 3 submissions receive cash awards, exhibition features, and campus merchandise credits.',
    studentName: 'Campus Arts Society',
    department: 'SRM Fine Arts & Media',
    year: 'Campus Council',
    avatar: 'CA',
    contact: 'arts.society@srmist.edu.in',
    tags: ['#competition', '#graphicdesign', '#prizes', '#campus'],
    availability: 'Available',
    isFree: true,
    icon: '🏆',
    matchScore: 87,
    matchReason: 'Open campus creative competition with verified student awards.',
    createdAt: new Date(Date.now() - 1000 * 60 * 480) // 8 hours ago
  }
];

// Initial Demo Conversations for Inbox
const INITIAL_CONVERSATIONS = [
  {
    id: 'convo-1',
    studentName: 'Rahul Sharma',
    avatar: 'RS',
    department: '2nd Year CSE',
    listingId: 'listing-item-1',
    listingTitle: 'DBMS Textbook (Database System Concepts 7th Ed)',
    category: 'Item',
    icon: '📖',
    unread: true,
    messages: [
      { sender: 'other', text: 'Hey, is the DBMS textbook still available?', time: '10:15 AM' },
      { sender: 'me', text: "Yes, it's available.", time: '10:18 AM' },
      { sender: 'other', text: 'Great, when can we meet on campus?', time: '10:22 AM' }
    ]
  },
  {
    id: 'convo-2',
    studentName: 'Priya Nair',
    avatar: 'PN',
    department: '3rd Year CSE',
    listingId: 'listing-skill-1',
    listingTitle: 'Python Tutoring (Data Structures & Algorithmic Practice)',
    category: 'Skill',
    icon: '🐍',
    unread: true,
    messages: [
      { sender: 'other', text: 'Hi! Are you still offering Python peer tutoring for CS students?', time: '9:30 AM' },
      { sender: 'me', text: 'Yes! What topics are you currently working on?', time: '9:45 AM' },
      { sender: 'other', text: 'Mainly binary trees and graph traversal algorithms.', time: '9:50 AM' }
    ]
  },
  {
    id: 'convo-3',
    studentName: 'Arjun Kumar',
    avatar: 'AK',
    department: '3rd Year CSE',
    listingId: 'listing-opp-1',
    listingTitle: 'Hackathon Team Looking for Frontend Developer',
    category: 'Opportunity',
    icon: '🚀',
    unread: false,
    messages: [
      { sender: 'other', text: "Hey, saw you're looking for frontend devs for the hackathon. Is the spot still open?", time: 'Yesterday' },
      { sender: 'me', text: "Hey Arjun! Yes, we're building an AI study tool in React. Have you worked with Tailwind before?", time: 'Yesterday' },
      { sender: 'other', text: 'Yeah, built 2 hackathon projects with React and Tailwind last semester!', time: 'Yesterday' }
    ]
  },
  {
    id: 'convo-4',
    studentName: 'Meera Shah',
    avatar: 'MS',
    department: '3rd Year Design',
    listingId: 'listing-skill-4',
    listingTitle: 'Figma Mentoring (Auto Layout, Tokens & Interactive Prototyping)',
    category: 'Skill',
    icon: '📐',
    unread: false,
    messages: [
      { sender: 'me', text: 'Hi Meera, would love to get your feedback on our app wireframes if you have time.', time: '2 days ago' },
      { sender: 'other', text: 'Sure! Send over the Figma link or we can meet at the tech lounge tomorrow.', time: '2 days ago' }
    ]
  }
];

// Initial Demo Notifications
const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-1',
    type: 'matches',
    icon: '✨',
    title: 'AI Match Found',
    desc: 'RExchange found a 94% match for your DBMS coursework search.',
    time: '15 mins ago',
    unread: true,
    targetId: 'listing-item-1',
    actionType: 'open-listing'
  },
  {
    id: 'notif-2',
    type: 'messages',
    icon: '💬',
    title: 'New Message',
    desc: 'Rahul Sharma replied to your DBMS Textbook conversation.',
    time: '25 mins ago',
    unread: true,
    targetId: 'convo-1',
    actionType: 'open-inbox'
  },
  {
    id: 'notif-3',
    type: 'opportunities',
    icon: '🚀',
    title: 'New Opportunity',
    desc: 'A new Hackathon Team Looking for Frontend Developer was posted.',
    time: '1 hour ago',
    unread: true,
    targetId: 'listing-opp-1',
    actionType: 'open-listing'
  },
  {
    id: 'notif-4',
    type: 'listings',
    icon: '🔖',
    title: 'Listing Saved',
    desc: 'Priya Nair saved your campus listing.',
    time: '2 hours ago',
    unread: false,
    targetId: 'listing-skill-1',
    actionType: 'open-listing'
  },
  {
    id: 'notif-5',
    type: 'listings',
    icon: '✓',
    title: 'SRM Verified',
    desc: 'Your official @srmist.edu.in student verification is active.',
    time: '1 day ago',
    unread: false,
    targetId: 'profile',
    actionType: 'open-profile'
  }
];

const DEFAULT_PROFILE = {
  name: 'Aryan Sharma',
  avatar: 'AS',
  department: 'Computer Science & Engineering',
  year: '3rd Year',
  email: 'aryan.s@srmist.edu.in',
  bio: 'Passionate about full-stack web development, AI student tools, and UI prototyping. Active in campus hackathons and open to trading study resources!',
  skills: ['Java', 'Python', 'UI/UX', 'Figma', 'React', 'Cybersecurity']
};

function loadStoredSearchHistory() {
  try {
    const raw = localStorage.getItem('rexchange_ai_history');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.slice(0, 5);
    }
  } catch (err) {
    console.error('Failed to parse AI history from localStorage', err);
  }
  return ['Python tutor', 'DBMS textbook', 'Hackathon teammates'];
}

function saveStoredSearchHistory(history) {
  try {
    localStorage.setItem('rexchange_ai_history', JSON.stringify(history.slice(0, 5)));
  } catch (err) {
    console.error('Failed to save AI history to localStorage', err);
  }
}

function loadStoredNotifications() {
  try {
    const raw = localStorage.getItem('rexchange_notifications');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to parse notifications from localStorage', err);
  }
  return JSON.parse(JSON.stringify(INITIAL_NOTIFICATIONS));
}

function saveStoredNotifications() {
  try {
    localStorage.setItem('rexchange_notifications', JSON.stringify(state.notifications));
  } catch (err) {
    console.error('Failed to save notifications to localStorage', err);
  }
}

function loadStoredProfile() {
  try {
    const raw = localStorage.getItem('rexchange_student_profile');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.name) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to parse student profile from localStorage', err);
  }
  return { ...DEFAULT_PROFILE };
}

function saveStoredProfile() {
  try {
    localStorage.setItem('rexchange_student_profile', JSON.stringify(state.profile));
  } catch (err) {
    console.error('Failed to save student profile to localStorage', err);
  }
}

function loadStoredSavedIds() {
  try {
    const raw = localStorage.getItem('rexchange_saved_ids');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return new Set(parsed);
      }
    }
  } catch (err) {
    console.error('Failed to parse saved IDs from localStorage', err);
  }
  return new Set();
}

function saveStoredSavedIds() {
  try {
    localStorage.setItem('rexchange_saved_ids', JSON.stringify(Array.from(state.savedIds)));
  } catch (err) {
    console.error('Failed to save saved IDs to localStorage', err);
  }
}

function loadStoredConversations() {
  try {
    const raw = localStorage.getItem('rexchange_conversations');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to parse conversations from localStorage', err);
  }
  return JSON.parse(JSON.stringify(INITIAL_CONVERSATIONS));
}

function saveConversationsToStorage() {
  try {
    localStorage.setItem('rexchange_conversations', JSON.stringify(state.conversations));
  } catch (err) {
    console.error('Failed to save conversations to localStorage', err);
  }
}

// Application State
const state = {
  listings: [...INITIAL_LISTINGS],
  conversations: loadStoredConversations(),
  savedIds: loadStoredSavedIds(),
  profile: loadStoredProfile(),
  notifications: loadStoredNotifications(),
  aiSearchHistory: loadStoredSearchHistory(),
  aiCurrentQuery: '',
  aiCurrentMatches: [],
  aiActiveCategoryFilter: 'all',
  aiSortBy: 'best-match',
  activeActivityFilter: 'all',
  activeProfileTab: 'my-listings',
  activeSavedFilter: 'All',
  activeConversationId: 'convo-1',
  inboxSearchQuery: '',
  activeFilter: 'All',
  sortBy: 'newest',
  filterType: 'all',
  searchQuery: '',
  currentAiSuggestion: null,
  activeModalListing: null,
  currentSrmEmail: ''
};

// SRM Access Gate Elements
const srmAccessGate = document.getElementById('srm-access-gate');
const gateStepWelcome = document.getElementById('gate-step-welcome');
const gateStepEmail = document.getElementById('gate-step-email');
const gateStepCode = document.getElementById('gate-step-code');
const gateStepSuccess = document.getElementById('gate-step-success');

const btnContinueSrm = document.getElementById('btn-continue-srm');
const btnEmailBack = document.getElementById('btn-email-back');
const srmEmailForm = document.getElementById('srm-email-form');
const srmEmailInput = document.getElementById('srm-email-input');
const srmEmailError = document.getElementById('srm-email-error');
const btnVerifyEmail = document.getElementById('btn-verify-email');
const btnVerifyEmailText = document.getElementById('btn-verify-email-text');

const btnCodeBack = document.getElementById('btn-code-back');
const srmTargetEmail = document.getElementById('srm-target-email');
const btnAutofillCode = document.getElementById('btn-autofill-code');
const srmCodeForm = document.getElementById('srm-code-form');
const srmCodeInput = document.getElementById('srm-code-input');
const srmCodeError = document.getElementById('srm-code-error');
const btnVerifyCode = document.getElementById('btn-verify-code');
const btnVerifyCodeText = document.getElementById('btn-verify-code-text');
const btnResendCode = document.getElementById('btn-resend-code');

const btnEnterRexchange = document.getElementById('btn-enter-rexchange');
const navSrmBadge = document.getElementById('nav-srm-badge');
const btnResetSrmDemo = document.getElementById('btn-reset-srm-demo');
const inboxUnreadBadge = document.getElementById('inbox-unread-badge');
const savedCountBadge = document.getElementById('saved-count-badge');
const navPostBtn = document.getElementById('nav-post-btn');

// Navigation links
const navSavedLink = document.getElementById('nav-saved-link');
const navInboxLink = document.getElementById('nav-inbox-link');
const navProfileLink = document.getElementById('nav-profile-link');
const navAiMatchLink = document.getElementById('nav-ai-match-link');

// Drawers & Modals (Single-Page Overlays)
const savedDrawer = document.getElementById('saved');
const savedCloseBtn = document.getElementById('saved-close-btn');

const inboxDrawer = document.getElementById('inbox');
const inboxCloseBtn = document.getElementById('inbox-close-btn');

const profileDrawer = document.getElementById('profile');
const profileCloseBtn = document.getElementById('profile-close-btn');

const postModal = document.getElementById('post');
const postCloseBtn = document.getElementById('post-close-btn');

// AI Match Center Elements
const aiMatchForm = document.getElementById('ai-match-form');
const aiMatchInput = document.getElementById('ai-match-input');
const btnRunAiMatch = document.getElementById('btn-run-ai-match');
const aiChipsList = document.getElementById('ai-chips-list');
const aiHistoryBar = document.getElementById('ai-history-bar');
const historyChipsStream = document.getElementById('history-chips-stream');
const btnClearAiHistory = document.getElementById('btn-clear-ai-history');

const aiProcessingState = document.getElementById('ai-processing-state');
const aiProcStatus = document.getElementById('ai-proc-status');
const aiResultsArea = document.getElementById('ai-results-area');
const aiResultsCountTitle = document.getElementById('ai-results-count-title');
const aiQueryEcho = document.getElementById('ai-query-echo');
const aiCatFilterButtons = document.querySelectorAll('#ai-cat-filters .ai-cat-btn');
const aiSortSelect = document.getElementById('ai-sort-select');
const aiMatchesGrid = document.getElementById('ai-matches-grid');
const aiEmptyMatches = document.getElementById('ai-empty-matches');

const aiRecommendedSection = document.getElementById('ai-recommended-section');
const recReasonText = document.getElementById('rec-reason-text');
const aiRecommendedFeed = document.getElementById('ai-recommended-feed');

// Notification Elements
const notifWrapper = document.getElementById('notif-wrapper');
const notifBellBtn = document.getElementById('notif-bell-btn');
const notifBadge = document.getElementById('notif-badge');
const notifDropdown = document.getElementById('notif-dropdown');
const notifUnreadCountTag = document.getElementById('notif-unread-count-tag');
const btnMarkAllRead = document.getElementById('btn-mark-all-read');
const notifDropdownList = document.getElementById('notif-dropdown-list');
const btnViewAllNotifs = document.getElementById('btn-view-all-notifs');

// Activity Page Elements
const btnPageMarkAllRead = document.getElementById('btn-page-mark-all-read');
const activityFilterButtons = document.querySelectorAll('#activity-filters-bar .activity-filter-btn');
const activityFeedList = document.getElementById('activity-feed-list');
const activityEmptyState = document.getElementById('activity-empty-state');

// Main App DOM Elements
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

// Saved Section DOM Elements
const savedFilterButtons = document.querySelectorAll('#saved-filter-bar .saved-filter-btn');
const savedCountTag = document.getElementById('saved-count-tag');
const savedEmptyState = document.getElementById('saved-empty-state');
const savedListingsFeed = document.getElementById('saved-listings-feed');

// Profile Section DOM Elements
const profileAvatar = document.getElementById('profile-avatar');
const profileName = document.getElementById('profile-name');
const profileDeptYear = document.getElementById('profile-dept-year');
const profileEmailDisplay = document.getElementById('profile-email-display');
const profileBio = document.getElementById('profile-bio');
const profileSkillsChips = document.getElementById('profile-skills-chips');
const profileVerifiedBadge = document.getElementById('profile-verified-badge');
const btnEditProfile = document.getElementById('btn-edit-profile');
const btnVerifyStatusBadge = document.getElementById('btn-verify-status-badge');

const profileStatListings = document.getElementById('profile-stat-listings');
const profileStatSkills = document.getElementById('profile-stat-skills');
const profileStatSaved = document.getElementById('profile-stat-saved');
const profileStatTrust = document.getElementById('profile-stat-trust');

const profileTabsBar = document.getElementById('profile-tabs-bar');
const profileTabButtons = document.querySelectorAll('#profile-tabs-bar .profile-tab-btn');
const tabCountMyListings = document.getElementById('tab-count-my-listings');
const tabCountSaved = document.getElementById('tab-count-saved');
const tabCountSkills = document.getElementById('tab-count-skills');
const tabCountOpps = document.getElementById('tab-count-opps');
const profileTabFeed = document.getElementById('profile-tab-feed');
const profileTabEmpty = document.getElementById('profile-tab-empty');
const profileEmptyTitle = document.getElementById('profile-empty-title');
const profileEmptyDesc = document.getElementById('profile-empty-desc');
const profileEmptyBtn = document.getElementById('profile-empty-btn');

// Profile Edit Modal Elements
const profileEditModal = document.getElementById('profile-edit-modal');
const profileEditForm = document.getElementById('profile-edit-form');
const editProfileName = document.getElementById('edit-profile-name');
const editProfileYear = document.getElementById('edit-profile-year');
const editProfileDept = document.getElementById('edit-profile-dept');
const editProfileBio = document.getElementById('edit-profile-bio');
const editProfileSkills = document.getElementById('edit-profile-skills');
const editProfileEmail = document.getElementById('edit-profile-email');
const btnCloseEditModal = document.getElementById('btn-close-edit-modal');
const btnCancelEditProfile = document.getElementById('btn-cancel-edit-profile');

// SRM Verification Protection Modal Elements
const srmProtectionModal = document.getElementById('srm-protection-modal');
const btnProtectionVerifyNow = document.getElementById('btn-protection-verify-now');
const btnProtectionCancel = document.getElementById('btn-protection-cancel');

// Category Card Count Badges
const countItemsBadge = document.getElementById('count-items');
const countSkillsBadge = document.getElementById('count-skills');
const countOppsBadge = document.getElementById('count-opportunities');

// Campus Pulse Metrics Elements
const pulseNewListings = document.getElementById('pulse-new-listings');
const pulseSkillsShared = document.getElementById('pulse-skills-shared');
const pulseOpportunities = document.getElementById('pulse-opportunities');
const pulsePotentialMatches = document.getElementById('pulse-potential-matches');

// Hero Interactive Elements
const heroAiSearch = document.getElementById('hero-ai-search');
const heroSearchBtn = document.getElementById('hero-search-btn');
const promptChips = document.querySelectorAll('.prompt-chip');
const categoryFeatureCards = document.querySelectorAll('.feature-cat-card');
const exploreAiBtn = document.getElementById('explore-ai-btn');

// Listing Details Modal Elements
const listingModal = document.getElementById('listing-modal');
const modalVisualBanner = document.getElementById('modal-visual-banner');
const modalBannerIcon = document.getElementById('modal-banner-icon');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCloseActionBtn = document.getElementById('modal-close-action-btn');
const modalCategoryBadge = document.getElementById('modal-category-badge');
const modalAvailBadge = document.getElementById('modal-avail-badge');
const modalTitle = document.getElementById('modal-title');
const modalAvatar = document.getElementById('modal-avatar');
const modalAuthorName = document.getElementById('modal-author-name');
const modalStudentDept = document.getElementById('modal-student-dept');
const modalPostedTime = document.getElementById('modal-posted-time');
const modalAiMatchScore = document.getElementById('modal-ai-match-score');
const modalAiMatchReason = document.getElementById('modal-ai-match-reason');
const modalDesc = document.getElementById('modal-desc');
const modalTags = document.getElementById('modal-tags');
const modalContact = document.getElementById('modal-contact');
const modalCopyBtn = document.getElementById('modal-copy-btn');
const modalSaveBtn = document.getElementById('modal-save-btn');
const modalSaveText = document.getElementById('modal-save-text');
const modalShareBtn = document.getElementById('modal-share-btn');
const modalMsgBtn = document.getElementById('modal-msg-btn');
const modalRelatedListings = document.getElementById('modal-related-listings');

// Inbox DOM Elements
const inboxMainCard = document.getElementById('inbox-main-card');
const inboxSearchInput = document.getElementById('inbox-search-input');
const inboxConversationsList = document.getElementById('inbox-conversations-list');
const inboxSearchEmpty = document.getElementById('inbox-search-empty');
const inboxEmptyGlobal = document.getElementById('inbox-empty-global');
const inboxChatPanel = document.getElementById('inbox-chat-panel');
const inboxConvosPanel = document.getElementById('inbox-convos-panel');

const chatHeaderAvatar = document.getElementById('chat-header-avatar');
const chatHeaderName = document.getElementById('chat-header-name');
const btnChatBackMobile = document.getElementById('btn-chat-back-mobile');
const chatRelatedListingBanner = document.getElementById('chat-related-listing-banner');
const chatListingIcon = document.getElementById('chat-listing-icon');
const chatListingTitle = document.getElementById('chat-listing-title');
const chatListingCategory = document.getElementById('chat-listing-category');
const chatListingAuthorInfo = document.getElementById('chat-listing-author-info');
const btnChatViewListing = document.getElementById('btn-chat-view-listing');
const chatMessagesStream = document.getElementById('chat-messages-stream');
const chatSendForm = document.getElementById('chat-send-form');
const chatMessageInput = document.getElementById('chat-message-input');

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

// Safe HTML String Escaper
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

let toastTimer = null;
function showToast(message) {
  if (!toast) return;
  if (toastTimer) clearTimeout(toastTimer);
  toast.innerHTML = `<span style="display:flex; align-items:center; gap:8px;">${escapeHtml(message)} <button type="button" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:0.9rem;" onclick="this.parentElement.parentElement.style.display='none';">✕</button></span>`;
  toast.style.display = 'block';
  toastTimer = setTimeout(() => {
    toast.style.display = 'none';
  }, 2800);
}

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

function formatCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

function getBadgeClass(category) {
  switch (category) {
    case 'Item': return 'badge-item';
    case 'Skill': return 'badge-skill';
    case 'Opportunity': return 'badge-opportunity';
    default: return 'badge-item';
  }
}

// ==========================================================================
// SINGLE-PAGE OVERLAY MANAGEMENT (Drawers & Modals)
// ==========================================================================

function openDrawer(drawerEl) {
  if (!drawerEl) return;
  drawerEl.style.display = 'flex';
  void drawerEl.offsetWidth;
  drawerEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer(drawerEl) {
  if (!drawerEl) return;
  drawerEl.classList.remove('open');
  setTimeout(() => {
    drawerEl.style.display = 'none';
    if (!document.querySelector('.drawer-overlay.open') && !document.querySelector('.modal-backdrop[style*="display: flex"]')) {
      document.body.style.overflow = 'auto';
    }
  }, 280);
}

// Saved Drawer
function openSavedDrawer() {
  renderSavedListings();
  openDrawer(savedDrawer);
}
function closeSavedDrawer() {
  closeDrawer(savedDrawer);
}

// Inbox Drawer
function openInboxDrawer() {
  renderInboxConversations();
  renderActiveChat();
  openDrawer(inboxDrawer);
}
function closeInboxDrawer() {
  closeDrawer(inboxDrawer);
}

// Profile Drawer
function openProfileDrawer() {
  renderProfile();
  openDrawer(profileDrawer);
}
function closeProfileDrawer() {
  closeDrawer(profileDrawer);
}

// Post Listing Modal
function openPostModal() {
  if (!requireSRMVerification('posting a listing')) return;
  if (postModal) {
    postModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (titleInput) titleInput.focus();
  }
}
function closePostModal() {
  if (postModal) {
    postModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Attach overlay backdrop click dismissers
[savedDrawer, inboxDrawer, profileDrawer].forEach((drawer) => {
  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) closeDrawer(drawer);
    });
  }
});

if (savedCloseBtn) savedCloseBtn.addEventListener('click', closeSavedDrawer);
if (inboxCloseBtn) inboxCloseBtn.addEventListener('click', closeInboxDrawer);
if (profileCloseBtn) profileCloseBtn.addEventListener('click', closeProfileDrawer);

if (postModal) {
  postModal.addEventListener('click', (e) => {
    if (e.target === postModal) closePostModal();
  });
}
if (postCloseBtn) postCloseBtn.addEventListener('click', closePostModal);

// Navbar Button Listeners
if (navSavedLink) navSavedLink.addEventListener('click', (e) => { e.preventDefault(); openSavedDrawer(); });
if (navInboxLink) navInboxLink.addEventListener('click', (e) => { e.preventDefault(); openInboxDrawer(); });
if (navProfileLink) navProfileLink.addEventListener('click', (e) => { e.preventDefault(); openProfileDrawer(); });
if (navPostBtn) navPostBtn.addEventListener('click', openPostModal);
if (profileEmptyBtn) profileEmptyBtn.addEventListener('click', openPostModal);

// Keyboard Escape Key dismisser
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (listingModal && listingModal.style.display === 'flex') closeListingModal();
    if (postModal && postModal.style.display === 'flex') closePostModal();
    if (profileEditModal && profileEditModal.style.display === 'flex') closeProfileEditModal();
    if (srmProtectionModal && srmProtectionModal.style.display === 'flex') {
      srmProtectionModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    if (savedDrawer && savedDrawer.classList.contains('open')) closeSavedDrawer();
    if (inboxDrawer && inboxDrawer.classList.contains('open')) closeInboxDrawer();
    if (profileDrawer && profileDrawer.classList.contains('open')) closeProfileDrawer();
    if (notifDropdown) notifDropdown.style.display = 'none';
  }
});

// ==========================================================================
// RExchange AI Matching Engine (Deterministic Relevance Scoring)
// ==========================================================================

function findMatches(query, listings) {
  if (!query || !query.trim()) return [];

  const rawQuery = query.trim().toLowerCase();
  const rawTokens = rawQuery
    .replace(/[^\w\s#]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !['the', 'and', 'for', 'with', 'from', 'need', 'want', 'find', 'show', 'someone', 'looking', 'who', 'can', 'help', 'me', 'i'].includes(w));

  function getWordForms(word) {
    const forms = [word];
    if (word.endsWith('s') && word.length > 3) forms.push(word.slice(0, -1));
    if (word.endsWith('es') && word.length > 4) forms.push(word.slice(0, -2));
    if (word.endsWith('ing') && word.length > 5) forms.push(word.slice(0, -3));
    if (word.endsWith('ed') && word.length > 4) forms.push(word.slice(0, -2));
    return forms;
  }

  const isSeekingSkill = /\b(tutor|tutoring|teach|mentor|learn|explain|review|guidance|help|design|code)\b/i.test(rawQuery);
  const isSeekingItem = /\b(textbook|book|notes|calculator|arduino|kit|hardware|materials?|buy|trade|giveaway|sheets)\b/i.test(rawQuery);
  const isSeekingOpp = /\b(hackathon|team|teammates?|collaborat|project|workshop|event|competition|startup)\b/i.test(rawQuery);

  const scoredResults = listings.map((listing) => {
    let rawScore = 0;
    const matchingReasons = [];

    const lTitle = (listing.title || '').toLowerCase();
    const lDesc = (listing.description || '').toLowerCase();
    const lCat = (listing.category || '').toLowerCase();
    const lTags = (listing.tags || []).map((t) => t.toLowerCase().replace(/^#/, ''));
    const lStudent = (listing.studentName || '').toLowerCase();
    const lDept = (listing.department || '').toLowerCase();

    // 1. Direct Keyword Matching in Title
    const matchedTokensInTitle = [];
    rawTokens.forEach((token) => {
      const forms = getWordForms(token);
      if (forms.some((f) => lTitle.includes(f) || lTitle.split(/\s+/).some((w) => f.includes(w)))) {
        matchedTokensInTitle.push(token);
      }
    });

    if (matchedTokensInTitle.length > 0) {
      rawScore += matchedTokensInTitle.length * 32;
      matchedTokensInTitle.forEach((tm) => {
        matchingReasons.push(`"${tm.toUpperCase()}" appears in listing title`);
      });
    }

    // 2. Tag Matching
    const matchedTokensInTags = [];
    rawTokens.forEach((token) => {
      const forms = getWordForms(token);
      if (lTags.some((tag) => forms.some((f) => tag.includes(f) || f.includes(tag)))) {
        matchedTokensInTags.push(token);
      }
    });

    if (matchedTokensInTags.length > 0) {
      rawScore += matchedTokensInTags.length * 26;
      matchedTokensInTags.forEach((tm) => {
        if (!matchingReasons.some((r) => r.toLowerCase().includes(tm))) {
          matchingReasons.push(`Tag #${tm} matches your request`);
        }
      });
    }

    // 3. Category Alignment
    if (isSeekingSkill && listing.category === 'Skill') {
      rawScore += 26;
      matchingReasons.push('Skill category matches your request');
    } else if (isSeekingItem && listing.category === 'Item') {
      rawScore += 26;
      matchingReasons.push('Item category matches your request');
    } else if (isSeekingOpp && listing.category === 'Opportunity') {
      rawScore += 26;
      matchingReasons.push('Opportunity category matches your request');
    }

    // 4. Description Content
    const matchedTokensInDesc = [];
    rawTokens.forEach((token) => {
      const forms = getWordForms(token);
      if (!matchedTokensInTitle.includes(token) && forms.some((f) => lDesc.includes(f))) {
        matchedTokensInDesc.push(token);
      }
    });

    if (matchedTokensInDesc.length > 0) {
      rawScore += matchedTokensInDesc.length * 15;
      matchingReasons.push(`Description mentions "${matchedTokensInDesc.slice(0, 2).join('", "')}"`);
    }

    // 5. Academic Field / Department relevance
    const deptMatches = rawTokens.filter((token) => lDept.includes(token) || lStudent.includes(token));
    if (deptMatches.length > 0) {
      rawScore += 14;
      matchingReasons.push(`Offered by verified ${listing.department} student`);
    }

    let calculatedPercentage = 0;
    if (rawScore > 0) {
      calculatedPercentage = Math.min(98, Math.max(65, Math.round(55 + rawScore * 0.55)));
    }

    return {
      listing,
      score: calculatedPercentage,
      rawScore,
      reasons: matchingReasons.length > 0 ? matchingReasons.slice(0, 3) : [`Matches campus exchange criteria for ${listing.category} listings`],
      reason: matchingReasons.length > 0 ? `Strong match because this listing ${matchingReasons.slice(0, 2).join(' and ')}.` : `General match based on campus exchange relevance in ${listing.category}s.`
    };
  });

  return scoredResults
    .filter((r) => r.rawScore > 0)
    .sort((a, b) => b.score - a.score);
}

const findAIMatches = findMatches;
window.findMatches = findMatches;
window.findAIMatches = findMatches;

// Score Count-Up Animation
function animateMatchScores() {
  const scoreElements = document.querySelectorAll('.ai-score-number');
  scoreElements.forEach((el) => {
    const target = parseInt(el.getAttribute('data-target-score'), 10) || 90;
    let current = 0;
    const duration = 400; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.round(current) + '%';
    }, stepTime);
  });
}

// AI Match Center UI Handlers
function renderSearchHistory() {
  if (!historyChipsStream || !aiHistoryBar) return;

  if (state.aiSearchHistory.length === 0) {
    aiHistoryBar.style.display = 'none';
    return;
  }

  aiHistoryBar.style.display = 'flex';
  historyChipsStream.innerHTML = state.aiSearchHistory
    .map((query) => `<button type="button" class="history-chip-item" data-query="${escapeHtml(query)}">${escapeHtml(query)}</button>`)
    .join('');

  historyChipsStream.querySelectorAll('.history-chip-item').forEach((chip) => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-query');
      if (aiMatchInput) aiMatchInput.value = q;
      if (heroAiSearch) heroAiSearch.value = q;
      runAiMatch(q);
    });
  });
}

function addToSearchHistory(query) {
  if (!query) return;
  const clean = query.trim();
  state.aiSearchHistory = [clean, ...state.aiSearchHistory.filter((q) => q.toLowerCase() !== clean.toLowerCase())].slice(0, 5);
  saveStoredSearchHistory(state.aiSearchHistory);
  renderSearchHistory();
}

function clearSearchHistory() {
  state.aiSearchHistory = [];
  saveStoredSearchHistory([]);
  renderSearchHistory();
  showToast('✓ AI search history cleared');
}

if (btnClearAiHistory) {
  btnClearAiHistory.addEventListener('click', clearSearchHistory);
}

// Prompt suggestions click
if (aiChipsList) {
  aiChipsList.querySelectorAll('.ai-prompt-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-ai-prompt');
      if (aiMatchInput) aiMatchInput.value = prompt;
      if (heroAiSearch) heroAiSearch.value = prompt;
      runAiMatch(prompt);
    });
  });
}

// Collapse Results Handler
const btnCollapseAiResults = document.getElementById('btn-collapse-ai-results');
if (btnCollapseAiResults) {
  btnCollapseAiResults.addEventListener('click', () => {
    if (aiResultsArea) {
      aiResultsArea.style.display = 'none';
      showToast('✓ AI match results collapsed');
      const searchCard = document.querySelector('.ai-search-card');
      if (searchCard) searchCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

aiCatFilterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const cat = btn.getAttribute('data-cat') || 'all';
    state.aiActiveCategoryFilter = cat;

    aiCatFilterButtons.forEach((b) => {
      const isActive = (b.getAttribute('data-cat') || 'all') === cat;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    renderAiMatchResults();
  });
});

if (aiSortSelect) {
  aiSortSelect.addEventListener('change', (e) => {
    state.aiSortBy = e.target.value;
    renderAiMatchResults();
  });
}

function renderAiMatchResults() {
  if (!aiMatchesGrid) return;

  let results = [...state.aiCurrentMatches];
  const cat = state.aiActiveCategoryFilter;

  if (cat !== 'all') {
    results = results.filter((r) => r.listing.category === cat);
  }

  if (state.aiSortBy === 'best-match') {
    results.sort((a, b) => b.score - a.score);
  } else if (state.aiSortBy === 'newest') {
    results.sort((a, b) => new Date(b.listing.createdAt) - new Date(a.listing.createdAt));
  }

  if (aiResultsCountTitle) {
    aiResultsCountTitle.textContent = `✨ We found ${results.length} potential match${results.length === 1 ? '' : 'es'}.`;
  }
  if (aiQueryEcho) {
    aiQueryEcho.textContent = `Query: "${state.aiCurrentQuery}"`;
  }

  if (results.length === 0) {
    if (aiEmptyMatches) aiEmptyMatches.style.display = 'block';
    aiMatchesGrid.innerHTML = '';
    return;
  }

  if (aiEmptyMatches) aiEmptyMatches.style.display = 'none';

  aiMatchesGrid.innerHTML = results
    .map((res) => {
      const l = res.listing;
      const safeId = escapeHtml(l.id);
      const safeTitle = escapeHtml(l.title);
      const safeDescription = escapeHtml(l.description);
      const safeCategory = escapeHtml(l.category);
      const safeAuthor = escapeHtml(l.studentName || 'SRM Student');
      const safeAvatar = escapeHtml(l.avatar || safeAuthor.slice(0, 2).toUpperCase());
      const safeAvail = escapeHtml(l.availability || 'Available');
      const badgeClass = getBadgeClass(l.category);
      const formattedTime = formatTimestamp(l.createdAt);
      const isSaved = state.savedIds.has(l.id);

      const tagsHtml = (l.tags || ['#srm', `#${l.category.toLowerCase()}`])
        .map((tag) => `<span class="tag-pill">${escapeHtml(tag)}</span>`)
        .join('');

      const reasonsListHtml = (res.reasons || [res.reason])
        .map((r) => `<div class="ai-reason-bullet"><span class="ai-reason-check">✓</span> <span>${escapeHtml(r)}</span></div>`)
        .join('');

      return `
        <article class="ai-match-card" data-id="${safeId}">
          <div class="card-top-row">
            <div class="card-badges-left">
              <span class="ai-score-badge">✨ <span class="ai-score-number" data-target-score="${res.score}">0%</span> MATCH</span>
              <span class="badge ${badgeClass}">${safeCategory}</span>
              <span class="badge-srm-verified">✓ SRM Verified</span>
            </div>
            <button type="button" class="btn-card-save ${isSaved ? 'is-saved' : ''}" data-id="${safeId}" title="${isSaved ? 'Saved' : 'Save listing'}" aria-label="Save listing">
              ${isSaved ? '🔖' : '☆'}
            </button>
          </div>

          <h3 class="card-listing-title">${safeTitle}</h3>
          <p class="card-listing-desc">${safeDescription}</p>

          <div class="ai-match-reason-box">
            <span class="ai-reason-label">✨ WHY THIS MATCHES</span>
            <div class="ai-reason-list">
              ${reasonsListHtml}
            </div>
          </div>

          <div class="card-tags-row">
            ${tagsHtml}
          </div>

          <div class="card-author-footer">
            <div class="author-profile-left">
              <div class="author-avatar">${safeAvatar}</div>
              <div class="author-details">
                <span class="author-name">${safeAuthor}</span>
                <span class="author-time">${formattedTime} • 🟢 ${safeAvail}</span>
              </div>
            </div>
          </div>

          <div class="ai-match-actions-row">
            <button type="button" class="btn-ai-action-view" data-id="${safeId}">View Listing →</button>
            <button type="button" class="btn-ai-action-msg" data-id="${safeId}">Message</button>
          </div>
        </article>
      `;
    })
    .join('');

  attachAiCardListeners();
  animateMatchScores();
}

function attachAiCardListeners() {
  if (!aiMatchesGrid) return;

  aiMatchesGrid.querySelectorAll('.btn-card-save').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      toggleSaveListing(id);
      renderAiMatchResults();
    });
  });

  aiMatchesGrid.querySelectorAll('.btn-ai-action-view').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openListingModal(id);
    });
  });

  aiMatchesGrid.querySelectorAll('.btn-ai-action-msg').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const listing = state.listings.find((l) => l.id === id);
      if (listing) {
        if (!requireSRMVerification('messaging')) return;
        openOrCreateConversationForListing(listing);
      }
    });
  });

  aiMatchesGrid.querySelectorAll('.ai-match-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-card-save') || e.target.closest('.btn-ai-action-view') || e.target.closest('.btn-ai-action-msg')) return;
      const id = card.getAttribute('data-id');
      openListingModal(id);
    });
  });
}

function runAiMatch(query) {
  if (!query || !query.trim()) return;

  const cleanQuery = query.trim();
  state.aiCurrentQuery = cleanQuery;
  addToSearchHistory(cleanQuery);

  if (aiResultsArea) aiResultsArea.style.display = 'none';
  if (aiProcessingState) aiProcessingState.style.display = 'block';

  const dot1 = document.querySelector('.dot-step.dot-1');
  const dot2 = document.querySelector('.dot-step.dot-2');
  const dot3 = document.querySelector('.dot-step.dot-3');

  if (aiProcStatus) aiProcStatus.textContent = 'Understanding your request...';
  if (dot1) dot1.classList.add('active');
  if (dot2) dot2.classList.remove('active');
  if (dot3) dot3.classList.remove('active');

  setTimeout(() => {
    if (aiProcStatus) aiProcStatus.textContent = 'Searching campus listings...';
    if (dot2) dot2.classList.add('active');
  }, 350);

  setTimeout(() => {
    if (aiProcStatus) aiProcStatus.textContent = 'Finding the best matches...';
    if (dot3) dot3.classList.add('active');
  }, 700);

  setTimeout(() => {
    const matches = findMatches(cleanQuery, state.listings);
    state.aiCurrentMatches = matches;

    if (aiProcessingState) aiProcessingState.style.display = 'none';
    if (aiResultsArea) aiResultsArea.style.display = 'block';

    renderAiMatchResults();
    renderPersonalizedRecommendations();

    // Prevent duplicate spam for identical repeated searches
    const queryKey = cleanQuery.toLowerCase();
    if (matches.length > 0 && state.lastNotifiedAiQuery !== queryKey) {
      state.lastNotifiedAiQuery = queryKey;
      createNotification({
        type: 'matches',
        icon: '✨',
        title: 'New AI Match',
        desc: `RExchange found ${matches.length} strong match${matches.length === 1 ? '' : 'es'} for "${cleanQuery.slice(0, 24)}".`,
        targetId: matches[0].listing.id,
        actionType: 'open-listing'
      });
    }

    if (aiResultsArea) {
      aiResultsArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 1000);
}

function renderPersonalizedRecommendations() {
  if (!aiRecommendedSection || !aiRecommendedFeed) return;

  const savedListings = state.listings.filter((l) => state.savedIds.has(l.id));
  const hasHistory = state.aiSearchHistory.length > 0;

  if (savedListings.length === 0 && !hasHistory) {
    aiRecommendedSection.style.display = 'none';
    return;
  }

  aiRecommendedSection.style.display = 'block';

  let recs = [];
  if (savedListings.length > 0) {
    const savedCategories = Array.from(new Set(savedListings.map((l) => l.category)));
    recs = state.listings.filter((l) => !state.savedIds.has(l.id) && savedCategories.includes(l.category)).slice(0, 3);
    if (recReasonText) recReasonText.textContent = `Because you saved ${savedListings.length} campus listing${savedListings.length === 1 ? '' : 's'} in ${savedCategories.join(', ')}...`;
  } else {
    recs = state.listings.slice(0, 3);
    if (recReasonText) recReasonText.textContent = `Popular peer resources matching your recent campus searches...`;
  }

  if (recs.length > 0) {
    aiRecommendedFeed.innerHTML = recs.map(createListingCardHTML).join('');
    attachCardListeners(aiRecommendedFeed);
  } else {
    aiRecommendedSection.style.display = 'none';
  }
}

if (aiMatchForm) {
  aiMatchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (aiMatchInput) {
      const q = aiMatchInput.value.trim();
      if (q) runAiMatch(q);
    }
  });
}

// ==========================================================================
// Notifications & Campus Activity System
// ==========================================================================

function createNotification({ type, icon, title, desc, targetId, actionType }) {
  const newNotif = {
    id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    type: type || 'listings',
    icon: icon || '🔔',
    title: title || 'Campus Update',
    desc: desc || '',
    time: 'Just now',
    unread: true,
    targetId: targetId || null,
    actionType: actionType || 'open-explore'
  };

  state.notifications.unshift(newNotif);
  saveStoredNotifications();
  renderNotifications();
}

function updateNotificationBadge() {
  const unreadCount = state.notifications.filter((n) => n.unread === true).length;

  if (notifBadge) {
    if (unreadCount > 0) {
      notifBadge.textContent = unreadCount;
      notifBadge.style.display = 'inline-flex';
    } else {
      notifBadge.style.display = 'none';
    }
  }

  if (notifUnreadCountTag) {
    notifUnreadCountTag.textContent = unreadCount > 0 ? `${unreadCount} New` : 'All Read';
  }
}

function renderNotifications() {
  updateNotificationBadge();
  renderDropdownNotifications();
  renderActivityFeed();
}

function renderDropdownNotifications() {
  if (!notifDropdownList) return;

  if (state.notifications.length === 0) {
    notifDropdownList.innerHTML = `
      <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.84rem;">
        <span>🔔 No notifications</span>
      </div>
    `;
    return;
  }

  notifDropdownList.innerHTML = state.notifications
    .slice(0, 6)
    .map((n) => {
      return `
        <div class="notif-item ${n.unread ? 'unread' : ''}" data-id="${escapeHtml(n.id)}" role="menuitem" tabindex="0">
          <div class="notif-item-icon">${escapeHtml(n.icon)}</div>
          <div class="notif-item-content">
            <div class="notif-item-title">
              <span>${escapeHtml(n.title)}</span>
              <span class="notif-item-time">${escapeHtml(n.time)}</span>
            </div>
            <p class="notif-item-desc">${escapeHtml(n.desc)}</p>
          </div>
        </div>
      `;
    })
    .join('');

  notifDropdownList.querySelectorAll('.notif-item').forEach((item) => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      handleNotificationClick(id);
    });
  });
}

function renderActivityFeed() {
  if (!activityFeedList) return;

  let filtered = state.notifications;
  const f = state.activeActivityFilter;

  if (f === 'unread') {
    filtered = state.notifications.filter((n) => n.unread === true);
  } else if (f !== 'all') {
    filtered = state.notifications.filter((n) => n.type === f);
  }

  if (filtered.length === 0) {
    if (activityEmptyState) activityEmptyState.style.display = 'block';
    activityFeedList.innerHTML = '';
  } else {
    if (activityEmptyState) activityEmptyState.style.display = 'none';
    activityFeedList.innerHTML = filtered
      .map((n) => {
        return `
          <div class="activity-card-item ${n.unread ? 'unread' : ''}" data-id="${escapeHtml(n.id)}" role="listitem">
            <div class="activity-card-icon">${escapeHtml(n.icon)}</div>
            <div class="activity-card-content">
              <div class="activity-card-header">
                <span class="activity-card-title">${escapeHtml(n.title)}</span>
                <span class="activity-card-time">${escapeHtml(n.time)}</span>
              </div>
              <p class="activity-card-desc">${escapeHtml(n.desc)}</p>
              <div class="activity-card-actions">
                <button type="button" class="btn-card-action-mini btn-notif-open" data-id="${escapeHtml(n.id)}">Open →</button>
                <button type="button" class="btn-card-dismiss btn-notif-delete" data-id="${escapeHtml(n.id)}" title="Dismiss notification">Dismiss</button>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    activityFeedList.querySelectorAll('.btn-notif-open').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        handleNotificationClick(id);
      });
    });

    activityFeedList.querySelectorAll('.btn-notif-delete').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        deleteNotification(id);
      });
    });

    activityFeedList.querySelectorAll('.activity-card-item').forEach((item) => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        handleNotificationClick(id);
      });
    });
  }
}

function handleNotificationClick(notifId) {
  const notif = state.notifications.find((n) => n.id === notifId);
  if (!notif) return;

  if (notif.unread) {
    notif.unread = false;
    saveStoredNotifications();
    renderNotifications();
  }

  if (notifDropdown) notifDropdown.style.display = 'none';

  if (notif.actionType === 'open-inbox') {
    const convoId = notif.targetId;
    if (convoId) selectConversation(convoId);
    openInboxDrawer();
  } else if (notif.actionType === 'open-listing') {
    if (notif.targetId) openListingModal(notif.targetId);
  } else if (notif.actionType === 'open-profile') {
    openProfileDrawer();
  } else {
    const aiMatch = document.getElementById('ai-match');
    if (aiMatch) aiMatch.scrollIntoView({ behavior: 'smooth' });
  }
}

function deleteNotification(notifId) {
  state.notifications = state.notifications.filter((n) => n.id !== notifId);
  saveStoredNotifications();
  renderNotifications();
  showToast('✓ Notification dismissed');
}

function markAllNotificationsAsRead() {
  state.notifications.forEach((n) => (n.unread = false));
  saveStoredNotifications();
  renderNotifications();
  showToast('✓ All notifications marked as read');
}

if (btnMarkAllRead) btnMarkAllRead.addEventListener('click', markAllNotificationsAsRead);
if (btnPageMarkAllRead) btnPageMarkAllRead.addEventListener('click', markAllNotificationsAsRead);

if (notifBellBtn && notifDropdown) {
  notifBellBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = notifDropdown.style.display === 'flex';
    notifDropdown.style.display = isVisible ? 'none' : 'flex';
    notifBellBtn.setAttribute('aria-expanded', isVisible ? 'false' : 'true');
  });

  document.addEventListener('click', (e) => {
    if (notifDropdown && !notifDropdown.contains(e.target) && !notifBellBtn.contains(e.target)) {
      notifDropdown.style.display = 'none';
      if (notifBellBtn) notifBellBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

activityFilterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const f = btn.getAttribute('data-activity-filter') || 'all';
    state.activeActivityFilter = f;

    activityFilterButtons.forEach((b) => {
      const isActive = (b.getAttribute('data-activity-filter') || 'all') === f;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    renderActivityFeed();
  });
});

// ==========================================================================
// SRM Student Verification (@srmist.edu.in validation only)
// ==========================================================================

function switchGateStep(activeStepElement) {
  [gateStepWelcome, gateStepEmail, gateStepCode, gateStepSuccess].forEach((el) => {
    if (el) el.style.display = 'none';
  });
  if (activeStepElement) {
    activeStepElement.style.display = 'block';
  }
}

function isValidSrmEmail(email) {
  if (!email) return false;
  const cleanEmail = email.trim().toLowerCase();
  const srmRegex = /^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/i;
  return srmRegex.test(cleanEmail);
}

function isSRMVerified() {
  return localStorage.getItem('isSRMVerified') === 'true';
}

function requireSRMVerification(featureName = 'this feature') {
  if (isSRMVerified()) return true;

  if (srmProtectionModal) {
    srmProtectionModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  } else {
    initSRMVerification();
  }
  return false;
}

function initSRMVerification() {
  const verified = isSRMVerified();

  if (verified) {
    if (srmAccessGate) srmAccessGate.style.display = 'none';
    if (navSrmBadge) navSrmBadge.style.display = 'inline-flex';
    document.body.style.overflow = 'auto';
  } else {
    if (srmAccessGate) srmAccessGate.style.display = 'flex';
    if (navSrmBadge) navSrmBadge.style.display = 'none';
    document.body.style.overflow = 'hidden';
    switchGateStep(gateStepWelcome);
  }

  renderProfile();
}

if (btnContinueSrm) {
  btnContinueSrm.addEventListener('click', () => {
    switchGateStep(gateStepEmail);
    if (srmEmailInput) {
      srmEmailInput.value = '';
      srmEmailInput.focus();
    }
    if (srmEmailError) srmEmailError.style.display = 'none';
  });
}

if (btnEmailBack) {
  btnEmailBack.addEventListener('click', () => {
    switchGateStep(gateStepWelcome);
  });
}

if (srmEmailForm) {
  srmEmailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawEmail = (srmEmailInput.value || '').trim();

    if (!isValidSrmEmail(rawEmail)) {
      if (srmEmailError) {
        srmEmailError.textContent = 'Please use your official SRM institutional email.';
        srmEmailError.style.display = 'block';
      }
      srmEmailInput.focus();
      return;
    }

    if (srmEmailError) srmEmailError.style.display = 'none';
    state.currentSrmEmail = rawEmail.toLowerCase();
    state.profile.email = state.currentSrmEmail;
    saveStoredProfile();

    if (btnVerifyEmail) btnVerifyEmail.disabled = true;
    if (btnVerifyEmailText) btnVerifyEmailText.textContent = 'Checking Domain...';

    setTimeout(() => {
      if (btnVerifyEmail) btnVerifyEmail.disabled = false;
      if (btnVerifyEmailText) btnVerifyEmailText.textContent = 'Verify Email';

      if (srmTargetEmail) srmTargetEmail.textContent = state.currentSrmEmail;
      if (srmCodeInput) srmCodeInput.value = '';
      if (srmCodeError) srmCodeError.style.display = 'none';

      switchGateStep(gateStepCode);
      if (srmCodeInput) srmCodeInput.focus();
    }, 450);
  });
}

if (btnCodeBack) {
  btnCodeBack.addEventListener('click', () => {
    switchGateStep(gateStepEmail);
    if (srmEmailInput) srmEmailInput.focus();
  });
}

if (btnAutofillCode) {
  btnAutofillCode.addEventListener('click', () => {
    if (srmCodeInput) {
      srmCodeInput.value = '123456';
      srmCodeInput.focus();
    }
    if (srmCodeError) srmCodeError.style.display = 'none';
  });
}

if (btnResendCode) {
  btnResendCode.addEventListener('click', () => {
    showToast('📩 Demo verification code: 123456');
    if (srmCodeInput) {
      srmCodeInput.value = '123456';
      srmCodeInput.focus();
    }
  });
}

if (srmCodeForm) {
  srmCodeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawCode = (srmCodeInput.value || '').trim();

    if (!rawCode || rawCode.length < 6 || !/^\d{6}$/.test(rawCode)) {
      if (srmCodeError) {
        srmCodeError.textContent = 'Invalid verification code. Use demo code: 123456';
        srmCodeError.style.display = 'block';
      }
      srmCodeInput.focus();
      return;
    }

    if (srmCodeError) srmCodeError.style.display = 'none';

    if (btnVerifyCode) btnVerifyCode.disabled = true;
    if (btnVerifyCodeText) btnVerifyCodeText.textContent = 'Verifying Code...';

    setTimeout(() => {
      if (btnVerifyCode) btnVerifyCode.disabled = false;
      if (btnVerifyCodeText) btnVerifyCodeText.textContent = 'Verify Code';

      switchGateStep(gateStepSuccess);
    }, 450);
  });
}

if (btnEnterRexchange) {
  btnEnterRexchange.addEventListener('click', () => {
    localStorage.setItem('isSRMVerified', 'true');
    if (srmAccessGate) srmAccessGate.style.display = 'none';
    if (navSrmBadge) navSrmBadge.style.display = 'inline-flex';
    document.body.style.overflow = 'auto';
    renderProfile();
    createNotification({
      type: 'listings',
      icon: '✓',
      title: 'SRM Verified',
      desc: 'Your official @srmist.edu.in student verification is active. Welcome to RExchange!',
      targetId: 'profile',
      actionType: 'open-profile'
    });
    showToast('🎓 Welcome to RExchange, verified SRM student!');
  });
}

if (btnProtectionVerifyNow) {
  btnProtectionVerifyNow.addEventListener('click', () => {
    if (srmProtectionModal) srmProtectionModal.style.display = 'none';
    if (srmAccessGate) srmAccessGate.style.display = 'flex';
    switchGateStep(gateStepEmail);
    if (srmEmailInput) srmEmailInput.focus();
  });
}

if (btnProtectionCancel) {
  btnProtectionCancel.addEventListener('click', () => {
    if (srmProtectionModal) srmProtectionModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

function resetSRMVerification() {
  localStorage.removeItem('isSRMVerified');
  initSRMVerification();
  showToast('🔒 SRM verification reset to demo mode.');
}

if (btnResetSrmDemo) {
  btnResetSrmDemo.addEventListener('click', resetSRMVerification);
}

window.resetSRMVerification = resetSRMVerification;

// ==========================================================================
// Metrics & Badges Data Sync
// ==========================================================================

function updateAllMetrics() {
  const totalListings = state.listings.length;
  const itemsCount = state.listings.filter((l) => l.category === 'Item').length;
  const skillsCount = state.listings.filter((l) => l.category === 'Skill').length;
  const oppsCount = state.listings.filter((l) => l.category === 'Opportunity').length;

  if (countItemsBadge) countItemsBadge.textContent = `${itemsCount} Listing${itemsCount === 1 ? '' : 's'}`;
  if (countSkillsBadge) countSkillsBadge.textContent = `${skillsCount} Listing${skillsCount === 1 ? '' : 's'}`;
  if (countOppsBadge) countOppsBadge.textContent = `${oppsCount} Listing${oppsCount === 1 ? '' : 's'}`;

  if (pulseNewListings) pulseNewListings.textContent = totalListings;
  if (pulseSkillsShared) pulseSkillsShared.textContent = skillsCount;
  if (pulseOpportunities) pulseOpportunities.textContent = oppsCount;
  if (pulsePotentialMatches) pulsePotentialMatches.textContent = '0';

  updateInboxUnreadBadge();
  updateSavedBadge();
  updateNotificationBadge();
  renderProfileStats();
}

function updateInboxUnreadBadge() {
  if (!inboxUnreadBadge) return;
  const unreadCount = state.conversations.filter((c) => c.unread === true).length;
  if (unreadCount > 0) {
    inboxUnreadBadge.textContent = unreadCount;
    inboxUnreadBadge.style.display = 'inline-flex';
  } else {
    inboxUnreadBadge.style.display = 'none';
  }
}

function updateSavedBadge() {
  if (!savedCountBadge) return;
  const count = state.savedIds.size;
  if (count > 0) {
    savedCountBadge.textContent = count;
    savedCountBadge.style.display = 'inline-flex';
  } else {
    savedCountBadge.style.display = 'none';
  }
}

function setActiveFilter(filterName) {
  state.activeFilter = filterName;

  filterButtons.forEach((btn) => {
    const isActive = btn.getAttribute('data-filter') === filterName;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  renderListings();
}

function createListingCardHTML(listing) {
  const safeId = escapeHtml(listing.id);
  const safeTitle = escapeHtml(listing.title);
  const safeDescription = escapeHtml(listing.description);
  const safeCategory = escapeHtml(listing.category);
  const safeAuthor = escapeHtml(listing.studentName || 'SRM Student');
  const safeAvatar = escapeHtml(listing.avatar || safeAuthor.slice(0, 2).toUpperCase());
  const safeAvail = escapeHtml(listing.availability || 'Available');
  const badgeClass = getBadgeClass(listing.category);
  const formattedTime = formatTimestamp(listing.createdAt);
  const isSaved = state.savedIds.has(listing.id);

  const tagsHtml = (listing.tags || ['#srm', `#${listing.category.toLowerCase()}`])
    .map((tag) => `<span class="tag-pill" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</span>`)
    .join('');

  return `
    <article class="listing-card-modern" data-id="${safeId}">
      <div class="card-top-row">
        <div class="card-badges-left">
          <span class="badge ${badgeClass}">${safeCategory}</span>
          <span class="badge-avail">🟢 ${safeAvail}</span>
          <span class="badge-srm-verified">✓ SRM Verified</span>
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
            <span class="author-name">${safeAuthor} <span class="badge-srm-verified" style="font-size:0.64rem; padding: 1px 4px; margin-left: 3px;">✓ SRM Verified</span></span>
            <span class="author-time">${formattedTime}</span>
          </div>
        </div>
        <button type="button" class="btn-card-view" data-id="${safeId}">View →</button>
      </div>
    </article>
  `;
}

// ==========================================================================
// Explore Listing Feed Rendering & Filtering
// ==========================================================================

function renderListings() {
  const query = state.searchQuery.trim().toLowerCase();

  let filtered = state.listings.filter((listing) => {
    const matchesCategory = state.activeFilter === 'All' || listing.category === state.activeFilter;

    let matchesSearch = true;
    if (query) {
      const titleMatch = listing.title.toLowerCase().includes(query);
      const descMatch = listing.description.toLowerCase().includes(query);
      const catMatch = listing.category.toLowerCase().includes(query);
      const nameMatch = (listing.studentName || '').toLowerCase().includes(query);
      const tagsMatch = Array.isArray(listing.tags) && listing.tags.some((t) => t.toLowerCase().includes(query));

      matchesSearch = titleMatch || descMatch || catMatch || nameMatch || tagsMatch;
    }

    let matchesSecondary = true;
    if (state.filterType === 'free') {
      matchesSecondary = listing.isFree === true || /\b(free|giveaway|give away)\b/i.test(listing.description + ' ' + listing.title);
    } else if (state.filterType === 'available') {
      matchesSecondary = (listing.availability || 'Available').toLowerCase() === 'available';
    }

    return matchesCategory && matchesSearch && matchesSecondary;
  });

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

  if (listingCountTag) {
    listingCountTag.textContent = `${filtered.length} Listing${filtered.length === 1 ? '' : 's'}`;
  }

  updateAllMetrics();

  if (filtered.length === 0) {
    if (emptyTitle) emptyTitle.textContent = 'No matches found';
    if (emptyDesc) emptyDesc.textContent = 'Try searching for textbooks, tutoring, events or opportunities.';
    if (emptyState) emptyState.style.display = 'block';
    if (listingsFeed) listingsFeed.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  if (listingsFeed) {
    listingsFeed.innerHTML = filtered.map(createListingCardHTML).join('');
    attachCardListeners(listingsFeed);
  }
}

// ==========================================================================
// Saved for Later Section Rendering & Filtering
// ==========================================================================

function renderSavedListings() {
  if (!savedListingsFeed) return;

  const savedList = state.listings.filter((l) => state.savedIds.has(l.id));

  let filteredSaved = savedList;
  if (state.activeSavedFilter !== 'All') {
    filteredSaved = savedList.filter((l) => l.category === state.activeSavedFilter);
  }

  if (savedCountTag) {
    savedCountTag.textContent = `${filteredSaved.length} Saved`;
  }

  if (filteredSaved.length === 0) {
    if (savedEmptyState) savedEmptyState.style.display = 'block';
    savedListingsFeed.innerHTML = '';
  } else {
    if (savedEmptyState) savedEmptyState.style.display = 'none';
    savedListingsFeed.innerHTML = filteredSaved.map(createListingCardHTML).join('');
    attachCardListeners(savedListingsFeed);
  }

  updateSavedBadge();
  renderProfileStats();
  renderPersonalizedRecommendations();
}

function attachCardListeners(container) {
  if (!container) return;

  container.querySelectorAll('.btn-card-save').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const listingId = btn.getAttribute('data-id');
      toggleSaveListing(listingId);
    });
  });

  container.querySelectorAll('.btn-card-view').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const listingId = btn.getAttribute('data-id');
      openListingModal(listingId);
    });
  });

  container.querySelectorAll('.listing-card-modern').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.tag-pill') || e.target.closest('.btn-card-save')) return;
      const listingId = card.getAttribute('data-id');
      openListingModal(listingId);
    });
  });

  container.querySelectorAll('.tag-pill').forEach((pill) => {
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

function toggleSaveListing(listingId) {
  const listing = state.listings.find((l) => l.id === listingId);
  const title = listing ? listing.title : 'Listing';

  if (state.savedIds.has(listingId)) {
    state.savedIds.delete(listingId);
    showToast('Removed from saved');
  } else {
    state.savedIds.add(listingId);
    createNotification({
      type: 'listings',
      icon: '🔖',
      title: 'Listing Saved',
      desc: `Saved "${title}" to your bookmarked listings.`,
      targetId: listingId,
      actionType: 'open-listing'
    });
    showToast('Saved to your listings');
  }

  saveStoredSavedIds();

  if (state.activeModalListing && state.activeModalListing.id === listingId) {
    const isSaved = state.savedIds.has(listingId);
    if (modalSaveText) modalSaveText.textContent = isSaved ? 'Saved 🔖' : 'Save';
    if (modalSaveBtn) modalSaveBtn.classList.toggle('is-saved', isSaved);
  }

  renderListings();
  renderSavedListings();
  renderProfileTabContent();
  renderPersonalizedRecommendations();
}

// Saved Filter Buttons Listener
savedFilterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filterCat = btn.getAttribute('data-saved-filter') || 'All';
    state.activeSavedFilter = filterCat;

    savedFilterButtons.forEach((b) => {
      const isActive = (b.getAttribute('data-saved-filter') || 'All') === filterCat;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    renderSavedListings();
  });
});

// ==========================================================================
// Student Profile & SRM Verified Identity Section
// ==========================================================================

function getMyListings() {
  const pName = (state.profile.name || '').toLowerCase();
  const pAvatar = (state.profile.avatar || '').toUpperCase();
  return state.listings.filter((l) => {
    const lName = (l.studentName || '').toLowerCase();
    const lAvatar = (l.avatar || '').toUpperCase();
    return lName === pName || lName.includes('you') || lAvatar === pAvatar || l.id.startsWith('my-listing-');
  });
}

function renderProfile() {
  if (!profileName) return;

  const verified = isSRMVerified();

  if (profileAvatar) profileAvatar.textContent = state.profile.avatar || 'AS';
  if (profileName) profileName.textContent = state.profile.name;
  if (profileDeptYear) profileDeptYear.textContent = `${state.profile.year} • ${state.profile.department}`;
  if (profileEmailDisplay) profileEmailDisplay.textContent = state.profile.email;
  if (profileBio) profileBio.textContent = state.profile.bio;

  if (profileVerifiedBadge) {
    if (verified) {
      profileVerifiedBadge.textContent = '✓ SRM Verified';
      profileVerifiedBadge.style.display = 'inline-flex';
    } else {
      profileVerifiedBadge.textContent = 'Unverified (Click to verify)';
      profileVerifiedBadge.style.cursor = 'pointer';
      profileVerifiedBadge.onclick = () => requireSRMVerification('verification');
    }
  }

  if (profileSkillsChips) {
    const skills = state.profile.skills || ['Java', 'Python', 'UI/UX', 'Figma'];
    profileSkillsChips.innerHTML = skills
      .map((skill) => `<span class="profile-skill-chip">${escapeHtml(skill)}</span>`)
      .join('');
  }

  renderProfileStats();
  renderProfileTabContent();
}

function renderProfileStats() {
  const myListings = getMyListings();
  const mySkills = myListings.filter((l) => l.category === 'Skill');
  const savedCount = state.savedIds.size;
  const myOpps = myListings.filter((l) => l.category === 'Opportunity');

  if (profileStatListings) profileStatListings.textContent = myListings.length;
  if (profileStatSkills) profileStatSkills.textContent = mySkills.length;
  if (profileStatSaved) profileStatSaved.textContent = savedCount;

  if (tabCountMyListings) tabCountMyListings.textContent = myListings.length;
  if (tabCountSaved) tabCountSaved.textContent = savedCount;
  if (tabCountSkills) tabCountSkills.textContent = mySkills.length;
  if (tabCountOpps) tabCountOpps.textContent = myOpps.length;
}

function renderProfileTabContent() {
  if (!profileTabFeed) return;

  let itemsToRender = [];
  const tab = state.activeProfileTab;

  if (tab === 'my-listings') {
    itemsToRender = getMyListings();
  } else if (tab === 'saved') {
    itemsToRender = state.listings.filter((l) => state.savedIds.has(l.id));
  } else if (tab === 'skills') {
    itemsToRender = getMyListings().filter((l) => l.category === 'Skill');
    if (itemsToRender.length === 0) {
      itemsToRender = state.listings.filter((l) => l.category === 'Skill');
    }
  } else if (tab === 'opportunities') {
    itemsToRender = getMyListings().filter((l) => l.category === 'Opportunity');
  }

  if (itemsToRender.length === 0) {
    if (profileTabEmpty) {
      profileTabEmpty.style.display = 'block';
      if (profileEmptyTitle) {
        profileEmptyTitle.textContent = tab === 'saved' ? 'Nothing saved yet.' : 'No listings in this tab.';
      }
      if (profileEmptyDesc) {
        profileEmptyDesc.textContent = tab === 'saved' 
          ? 'Save campus listings you are interested in and find them here later.'
          : 'Share an item, offer a skill, or post an open opportunity on campus.';
      }
      if (profileEmptyBtn) {
        profileEmptyBtn.onclick = () => {
          closeProfileDrawer();
          if (tab === 'saved') {
            const explore = document.getElementById('explore');
            if (explore) explore.scrollIntoView({ behavior: 'smooth' });
          } else {
            openPostModal();
          }
        };
      }
    }
    profileTabFeed.innerHTML = '';
  } else {
    if (profileTabEmpty) profileTabEmpty.style.display = 'none';
    profileTabFeed.innerHTML = itemsToRender.map(createListingCardHTML).join('');
    attachCardListeners(profileTabFeed);
  }
}

// Profile Tab Switching
profileTabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const tabName = btn.getAttribute('data-profile-tab') || 'my-listings';
    state.activeProfileTab = tabName;

    profileTabButtons.forEach((b) => {
      const isActive = (b.getAttribute('data-profile-tab') || 'my-listings') === tabName;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    renderProfileTabContent();
  });
});

// Profile Editing Modal Handlers
if (btnEditProfile) {
  btnEditProfile.addEventListener('click', () => {
    if (editProfileName) editProfileName.value = state.profile.name;
    if (editProfileYear) editProfileYear.value = state.profile.year;
    if (editProfileDept) editProfileDept.value = state.profile.department;
    if (editProfileBio) editProfileBio.value = state.profile.bio;
    if (editProfileSkills) editProfileSkills.value = (state.profile.skills || []).join(', ');
    if (editProfileEmail) editProfileEmail.value = state.profile.email;

    if (profileEditModal) {
      profileEditModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      if (editProfileName) editProfileName.focus();
    }
  });
}

function closeProfileEditModal() {
  if (profileEditModal) {
    profileEditModal.style.display = 'none';
    if (!document.querySelector('.drawer-overlay.open')) {
      document.body.style.overflow = 'auto';
    }
  }
}

if (btnCloseEditModal) btnCloseEditModal.addEventListener('click', closeProfileEditModal);
if (btnCancelEditProfile) btnCancelEditProfile.addEventListener('click', closeProfileEditModal);

if (profileEditModal) {
  profileEditModal.addEventListener('click', (e) => {
    if (e.target === profileEditModal) closeProfileEditModal();
  });
}

if (profileEditForm) {
  profileEditForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (editProfileName.value || '').trim() || 'Aryan Sharma';
    const year = (editProfileYear.value || '').trim() || '3rd Year';
    const department = (editProfileDept.value || '').trim() || 'Computer Science';
    const bio = (editProfileBio.value || '').trim();
    const skillsRaw = editProfileSkills.value || '';
    const skills = skillsRaw
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const initials = name
      .split(' ')
      .filter(Boolean)
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'AS';

    state.profile = {
      ...state.profile,
      name,
      avatar: initials,
      year,
      department,
      bio,
      skills: skills.length > 0 ? skills : ['Java', 'Python', 'UI/UX', 'Figma']
    };

    saveStoredProfile();
    closeProfileEditModal();
    renderProfile();
    showToast('✓ Profile updated successfully!');
  });
}

// Open Detailed Listing Modal
function openListingModal(listingId) {
  const listing = state.listings.find((l) => l.id === listingId);
  if (!listing || !listingModal) return;

  state.activeModalListing = listing;

  if (modalVisualBanner) {
    modalVisualBanner.className = `modal-visual-banner banner-${listing.category.toLowerCase()}`;
  }
  if (modalBannerIcon) {
    modalBannerIcon.textContent = listing.icon || (listing.category === 'Item' ? '📖' : listing.category === 'Skill' ? '💻' : '🚀');
  }

  if (modalCategoryBadge) {
    modalCategoryBadge.textContent = listing.category;
    modalCategoryBadge.className = `badge ${getBadgeClass(listing.category)}`;
  }
  if (modalAvailBadge) {
    modalAvailBadge.textContent = `🟢 ${listing.availability || 'Available'}`;
  }
  if (modalTitle) {
    modalTitle.textContent = listing.title;
  }

  const authorName = listing.studentName || 'Rahul Sharma';
  const authorDept = listing.department || 'Computer Science & Engineering';
  const authorYear = listing.year || '2nd Year CSE';
  
  if (modalAvatar) {
    modalAvatar.textContent = listing.avatar || authorName.slice(0, 2).toUpperCase();
  }
  if (modalAuthorName) {
    modalAuthorName.innerHTML = `${authorName} <span class="badge-srm-verified" style="font-size:0.68rem; margin-left: 4px;">✓ SRM Verified</span>`;
  }
  if (modalStudentDept) {
    modalStudentDept.textContent = `${authorYear} • ${authorDept}`;
  }
  if (modalPostedTime) {
    modalPostedTime.textContent = `Posted ${formatTimestamp(listing.createdAt)}`;
  }

  const matchScore = listing.matchScore || (90 + (listing.title.length % 8));
  const matchReason = listing.matchReason || `Matches your SRM academic profile and interests in ${listing.tags ? listing.tags.slice(0, 2).join(' and ') : 'coursework'}.`;

  if (modalAiMatchScore) {
    modalAiMatchScore.textContent = `${matchScore}% Match`;
  }
  if (modalAiMatchReason) {
    modalAiMatchReason.textContent = matchReason;
  }

  if (modalDesc) {
    modalDesc.textContent = listing.description;
  }

  if (modalTags) {
    const tagsHtml = (listing.tags || ['#srm', `#${listing.category.toLowerCase()}`])
      .map((tag) => `<span class="tag-pill">${escapeHtml(tag)}</span>`)
      .join('');
    modalTags.innerHTML = tagsHtml;
  }

  if (modalContact) {
    modalContact.textContent = listing.contact;
  }

  const isSaved = state.savedIds.has(listing.id);
  if (modalSaveText) {
    modalSaveText.textContent = isSaved ? 'Saved 🔖' : 'Save';
  }
  if (modalSaveBtn) {
    modalSaveBtn.classList.toggle('is-saved', isSaved);
  }

  if (modalRelatedListings) {
    const related = state.listings
      .filter((l) => l.category === listing.category && l.id !== listing.id)
      .slice(0, 3);

    if (related.length > 0) {
      modalRelatedListings.innerHTML = related
        .map((rel) => {
          const safeRelTitle = escapeHtml(rel.title);
          const safeRelAuthor = escapeHtml(rel.studentName || 'SRM Student');
          const safeRelDept = escapeHtml(rel.year || 'SRM Student');
          const relTime = formatTimestamp(rel.createdAt);
          const relIcon = rel.icon || (rel.category === 'Item' ? '📖' : rel.category === 'Skill' ? '💻' : '🚀');
          return `
            <div class="related-card" data-id="${escapeHtml(rel.id)}">
              <div style="font-size: 1.4rem;">${relIcon}</div>
              <div class="related-info" style="flex: 1;">
                <span class="related-title">${safeRelTitle}</span>
                <span class="related-meta">${safeRelAuthor} (${safeRelDept}) • ${relTime}</span>
              </div>
              <span class="btn-related-view">View →</span>
            </div>
          `;
        })
        .join('');

      modalRelatedListings.querySelectorAll('.related-card').forEach((card) => {
        card.addEventListener('click', () => {
          const relId = card.getAttribute('data-id');
          openListingModal(relId);
        });
      });
    } else {
      modalRelatedListings.innerHTML = `<p style="font-size:0.82rem; color:var(--text-muted);">No other listings in this category yet.</p>`;
    }
  }

  listingModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeListingModal() {
  if (listingModal) {
    listingModal.style.display = 'none';
    if (!document.querySelector('.drawer-overlay.open')) {
      document.body.style.overflow = 'auto';
    }
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

// Modal Message Student Button (Directly opens Inbox Drawer!)
if (modalMsgBtn) {
  modalMsgBtn.addEventListener('click', () => {
    if (!requireSRMVerification('messaging')) return;
    if (!state.activeModalListing) return;
    const listing = state.activeModalListing;
    closeListingModal();
    openOrCreateConversationForListing(listing);
  });
}

// Modal Share Button
if (modalShareBtn) {
  modalShareBtn.addEventListener('click', async () => {
    if (!state.activeModalListing) return;

    const shareData = {
      title: state.activeModalListing.title,
      text: `Check out this ${state.activeModalListing.category} listing on RExchange: ${state.activeModalListing.title}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast('🔗 Shared successfully!');
        return;
      } catch (err) {}
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${shareData.text}\n${window.location.origin}`);
      showToast('🔗 Listing link copied to clipboard!');
    }
  });
}

if (modalCopyBtn) {
  modalCopyBtn.addEventListener('click', () => {
    if (state.activeModalListing) {
      navigator.clipboard.writeText(state.activeModalListing.contact);
      showToast('📋 Contact info copied!');
    }
  });
}

if (modalSaveBtn) {
  modalSaveBtn.addEventListener('click', () => {
    if (state.activeModalListing) {
      toggleSaveListing(state.activeModalListing.id);
    }
  });
}

// ==========================================================================
// Inbox & Messaging System Logic
// ==========================================================================

function openOrCreateConversationForListing(listing) {
  const studentName = listing.studentName || 'Rahul Sharma';
  
  let existingConvo = state.conversations.find((c) => 
    c.studentName.toLowerCase() === studentName.toLowerCase() ||
    c.listingId === listing.id
  );

  if (!existingConvo) {
    existingConvo = {
      id: `convo-${Date.now()}`,
      studentName: studentName,
      avatar: listing.avatar || studentName.slice(0, 2).toUpperCase(),
      department: listing.year || listing.department || '2nd Year CSE',
      listingId: listing.id,
      listingTitle: listing.title,
      category: listing.category,
      icon: listing.icon || (listing.category === 'Item' ? '📖' : listing.category === 'Skill' ? '💻' : '🚀'),
      unread: false,
      messages: [
        {
          sender: 'other',
          text: `Hi! Thanks for checking out "${listing.title}". Let me know if you want to meet on campus or have questions!`,
          time: 'Just now'
        }
      ]
    };
    state.conversations.unshift(existingConvo);
    saveConversationsToStorage();
  }

  state.activeConversationId = existingConvo.id;
  renderInboxConversations();
  renderActiveChat();

  openInboxDrawer();

  if (inboxMainCard) {
    inboxMainCard.classList.add('mobile-chat-open');
  }

  if (chatMessageInput) {
    setTimeout(() => chatMessageInput.focus(), 350);
  }

  showToast(`💬 Connected with ${studentName} about ${listing.title.slice(0, 24)}...`);
}

function renderInboxConversations() {
  if (!inboxConversationsList) return;

  if (state.conversations.length === 0) {
    if (inboxEmptyGlobal) inboxEmptyGlobal.style.display = 'flex';
    if (inboxConvosPanel) inboxConvosPanel.style.display = 'none';
    if (inboxChatPanel) inboxChatPanel.style.display = 'none';
    updateInboxUnreadBadge();
    return;
  }

  if (inboxEmptyGlobal) inboxEmptyGlobal.style.display = 'none';
  if (inboxConvosPanel) inboxConvosPanel.style.display = 'flex';
  if (inboxChatPanel) inboxChatPanel.style.display = 'flex';

  const query = state.inboxSearchQuery.trim().toLowerCase();

  const filtered = state.conversations.filter((c) => {
    if (!query) return true;
    const nameMatch = c.studentName.toLowerCase().includes(query);
    const listingMatch = (c.listingTitle || '').toLowerCase().includes(query);
    const msgMatch = Array.isArray(c.messages) && c.messages.some((m) => m.text.toLowerCase().includes(query));
    return nameMatch || listingMatch || msgMatch;
  });

  if (filtered.length === 0) {
    if (inboxSearchEmpty) inboxSearchEmpty.style.display = 'block';
    inboxConversationsList.innerHTML = '';
  } else {
    if (inboxSearchEmpty) inboxSearchEmpty.style.display = 'none';
    inboxConversationsList.innerHTML = filtered
      .map((convo) => {
        const isActive = convo.id === state.activeConversationId;
        const lastMsgObj = convo.messages && convo.messages.length > 0 ? convo.messages[convo.messages.length - 1] : null;
        const lastMsgText = lastMsgObj ? escapeHtml(lastMsgObj.text) : 'No messages yet';
        const lastMsgTime = lastMsgObj ? escapeHtml(lastMsgObj.time) : '';
        const safeName = escapeHtml(convo.studentName);
        const safeAvatar = escapeHtml(convo.avatar || safeName.slice(0, 2).toUpperCase());
        const safeTitle = escapeHtml(convo.listingTitle || 'Campus Listing');

        return `
          <div class="convo-item ${isActive ? 'active' : ''} ${convo.unread ? 'unread' : ''}" data-id="${escapeHtml(convo.id)}" role="button" tabindex="0">
            <div class="convo-avatar-wrap">
              <div class="convo-avatar">${safeAvatar}</div>
            </div>
            <div class="convo-info-col">
              <div class="convo-header-line">
                <span class="convo-student-name">${safeName}</span>
                <span class="convo-time">${lastMsgTime}</span>
              </div>
              <span class="convo-listing-tag">📌 ${safeTitle}</span>
              <p class="convo-last-msg">${lastMsgText}</p>
            </div>
            ${convo.unread ? '<span class="convo-unread-dot" title="Unread message"></span>' : ''}
          </div>
        `;
      })
      .join('');

    inboxConversationsList.querySelectorAll('.convo-item').forEach((item) => {
      item.addEventListener('click', () => {
        const convoId = item.getAttribute('data-id');
        selectConversation(convoId);
      });
    });
  }

  updateInboxUnreadBadge();
}

function selectConversation(convoId) {
  state.activeConversationId = convoId;
  const convo = state.conversations.find((c) => c.id === convoId);
  if (convo && convo.unread) {
    convo.unread = false;
    saveConversationsToStorage();
  }

  if (inboxMainCard) {
    inboxMainCard.classList.add('mobile-chat-open');
  }

  renderInboxConversations();
  renderActiveChat();
}

function renderActiveChat() {
  const activeConvo = state.conversations.find((c) => c.id === state.activeConversationId) || state.conversations[0];
  if (!activeConvo) return;

  if (chatHeaderAvatar) {
    chatHeaderAvatar.textContent = activeConvo.avatar || activeConvo.studentName.slice(0, 2).toUpperCase();
  }
  if (chatHeaderName) {
    chatHeaderName.textContent = activeConvo.studentName;
  }

  if (chatListingIcon) {
    chatListingIcon.textContent = activeConvo.icon || '📖';
  }
  if (chatListingTitle) {
    chatListingTitle.textContent = activeConvo.listingTitle || 'Campus Listing';
  }
  if (chatListingCategory) {
    chatListingCategory.textContent = activeConvo.category || 'Item';
    chatListingCategory.className = `badge ${getBadgeClass(activeConvo.category || 'Item')}`;
  }
  if (chatListingAuthorInfo) {
    chatListingAuthorInfo.textContent = `Posted by ${activeConvo.studentName}`;
  }

  if (btnChatViewListing) {
    btnChatViewListing.onclick = () => {
      const listing = state.listings.find((l) => l.id === activeConvo.listingId || l.title === activeConvo.listingTitle);
      if (listing) {
        closeInboxDrawer();
        openListingModal(listing.id);
      } else {
        showToast('ℹ️ Listing preview displayed above.');
      }
    };
  }

  if (chatMessagesStream) {
    const messages = activeConvo.messages || [];
    chatMessagesStream.innerHTML = messages
      .map((msg) => {
        const isMe = msg.sender === 'me';
        return `
          <div class="message-bubble-row ${isMe ? 'msg-outgoing' : 'msg-incoming'}">
            <div class="message-bubble">${escapeHtml(msg.text)}</div>
            <span class="message-time">${escapeHtml(msg.time)}</span>
          </div>
        `;
      })
      .join('');

    chatMessagesStream.scrollTop = chatMessagesStream.scrollHeight;
  }
}

if (chatSendForm && chatMessageInput) {
  chatSendForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!requireSRMVerification('sending messages')) return;

    const rawText = chatMessageInput.value.trim();
    if (!rawText) return;

    const activeConvo = state.conversations.find((c) => c.id === state.activeConversationId);
    if (!activeConvo) return;

    const newMsg = {
      sender: 'me',
      text: rawText,
      time: formatCurrentTime()
    };

    activeConvo.messages.push(newMsg);
    activeConvo.unread = false;
    saveConversationsToStorage();

    createNotification({
      type: 'messages',
      icon: '💬',
      title: 'Message Sent',
      desc: `Sent to ${activeConvo.studentName}: "${rawText.slice(0, 30)}..."`,
      targetId: activeConvo.id,
      actionType: 'open-inbox'
    });

    chatMessageInput.value = '';
    renderActiveChat();
    renderInboxConversations();

    if (chatMessagesStream) {
      chatMessagesStream.scrollTop = chatMessagesStream.scrollHeight;
    }
  });
}

if (inboxSearchInput) {
  inboxSearchInput.addEventListener('input', (e) => {
    state.inboxSearchQuery = e.target.value;
    renderInboxConversations();
  });
}

if (btnChatBackMobile) {
  btnChatBackMobile.addEventListener('click', () => {
    if (inboxMainCard) {
      inboxMainCard.classList.remove('mobile-chat-open');
    }
  });
}

// Explore Category Filter Buttons Listener
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
      document.querySelectorAll('.sec-filter-btn[data-sort]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    } else if (filterType) {
      if (state.filterType === filterType) {
        state.filterType = 'all';
        btn.classList.remove('active');
      } else {
        state.filterType = filterType;
        document.querySelectorAll('.sec-filter-btn[data-filter-type]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      }
    }

    renderListings();
  });
});

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    state.searchQuery = '';
    state.activeFilter = 'All';
    state.sortBy = 'newest';
    state.filterType = 'all';
    if (searchInput) searchInput.value = '';
    if (searchClearBtn) searchClearBtn.style.display = 'none';

    filterButtons.forEach((b) => b.classList.toggle('active', b.getAttribute('data-filter') === 'All'));
    secFilterButtons.forEach((b) => {
      const isSortNewest = b.getAttribute('data-sort') === 'newest';
      b.classList.toggle('active', isSortNewest);
    });

    renderListings();
  });
}

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

// Category Cards click -> Smooth scroll to Explore and activate filter
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

function executeHeroSearch(queryText) {
  if (!queryText) return;

  if (aiMatchInput) {
    aiMatchInput.value = queryText;
  }
  
  const aiMatchSection = document.getElementById('ai-match');
  if (aiMatchSection) {
    aiMatchSection.scrollIntoView({ behavior: 'smooth' });
  }

  runAiMatch(queryText);
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

if (exploreAiBtn) {
  exploreAiBtn.addEventListener('click', () => {
    const aiMatchSection = document.getElementById('ai-match');
    if (aiMatchSection) {
      aiMatchSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (aiMatchInput) {
      setTimeout(() => aiMatchInput.focus(), 350);
      showToast('✨ What are you looking for on campus?');
    }
  });
}

// Smart fallback AI Suggestion generator
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
    description = `Offering ${baseTitle.toLowerCase()} in great condition. ${textClean} Open for quick SRM campus meetup or exchange.`;
  } else if (category === 'Skill') {
    const subj = detectedSubject || 'Peer';
    title = `${subj} Tutoring & Skill Sharing`;
    description = `Offering 1-on-1 peer tutoring and guidance in ${subj}. ${textClean} Reach out to connect!`;
  } else {
    const subj = detectedSubject || 'Campus Project';
    title = `${subj} Collaboration Opportunity`;
    description = `Looking for motivated SRM student collaborators to team up on ${subj}. ${textClean} Reach out if interested!`;
  }

  return { title, category, description, source: 'smart_fallback' };
}

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

    hideAiSuggestions();
    contactInput.focus();
  });
}

if (aiIgnoreBtn) aiIgnoreBtn.addEventListener('click', hideAiSuggestions);
if (aiDismissBtn) aiDismissBtn.addEventListener('click', hideAiSuggestions);

function validateForm(title, category, description, contact) {
  if (!title) return 'Please enter a title for your listing.';
  if (!category) return 'Please select a category (Item, Skill, or Opportunity).';
  if (!description) return 'Please provide a description for your listing.';
  if (!contact) return 'Please provide your contact info so others can reach you.';
  return null;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!requireSRMVerification('posting a listing')) {
    return;
  }

  const title = titleInput.value.trim();
  const category = categorySelect.value;
  const description = descriptionInput.value.trim();
  const contact = contactInput.value.trim();

  const error = validateForm(title, category, description, contact);
  if (error) {
    errorMessage.textContent = error;
    errorMessage.style.display = 'block';
    return;
  }

  errorMessage.textContent = '';
  errorMessage.style.display = 'none';

  const titleWords = title.toLowerCase().split(/\s+/).filter((w) => w.length > 3).slice(0, 2);
  const autoTags = [`#srm`, `#${category.toLowerCase()}`, ...titleWords.map((w) => `#${w}`)];
  if (/\bfree\b/i.test(description + ' ' + title)) autoTags.push('#free');

  const newListing = {
    id: `my-listing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title,
    category,
    description,
    studentName: state.profile.name || 'Aryan Sharma',
    department: state.profile.department || 'Computer Science',
    year: state.profile.year || '3rd Year',
    avatar: state.profile.avatar || 'AS',
    contact,
    tags: autoTags,
    availability: 'Available',
    isFree: /\bfree\b/i.test(description + ' ' + title),
    icon: category === 'Item' ? '📦' : category === 'Skill' ? '💡' : '🚀',
    matchScore: 95,
    matchReason: 'Your newly created listing on the SRM network.',
    createdAt: new Date()
  };

  state.listings.unshift(newListing);

  if (state.activeFilter !== 'All' && state.activeFilter !== category) {
    setActiveFilter('All');
  } else {
    renderListings();
  }

  createNotification({
    type: 'listings',
    icon: '🎉',
    title: 'Listing Published',
    desc: `Your listing "${title}" is now live on SRM campus exchange!`,
    targetId: newListing.id,
    actionType: 'open-listing'
  });

  renderProfile();
  hideAiSuggestions();
  form.reset();
  closePostModal();
  showToast('🎉 Your listing is live on SRM campus!');

  const exploreSection = document.getElementById('explore');
  if (exploreSection) {
    exploreSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Initialize on Load
initSRMVerification();
renderListings();
renderSavedListings();
renderProfile();
renderNotifications();
renderInboxConversations();
renderActiveChat();
renderSearchHistory();
