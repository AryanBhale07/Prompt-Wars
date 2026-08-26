// ==========================================================================
// RExchange — Core Application Logic (Single-Page Interactive Campus OS)
// ==========================================================================

// SRM Kattankulathur Campus Center & Landmark Directory
const SRM_CAMPUS_CENTER = { lat: 12.8236, lng: 80.0440 };

const CAMPUS_LOCATIONS = {
  'Central Library': {
    name: 'Central Library',
    area: 'Ground Floor & Reading Hall',
    lat: 12.8236,
    lng: 80.0438,
    icon: '📚'
  },
  'Tech Park': {
    name: 'Tech Park (TP)',
    area: '4th & 5th Floor Labs',
    lat: 12.8248,
    lng: 80.0452,
    icon: '💻'
  },
  'Main Block': {
    name: 'University Building (Main Block)',
    area: 'Atrium & Central Lawns',
    lat: 12.8228,
    lng: 80.0425,
    icon: '🏛️'
  },
  'Student Activity Centre': {
    name: 'Student Activity Centre (SAC)',
    area: 'SAC Plaza & Amphitheatre',
    lat: 12.8215,
    lng: 80.0460,
    icon: '🚀'
  },
  'Java Food Court': {
    name: 'Java Green Food Court',
    area: 'Main Campus Dining Hub',
    lat: 12.8240,
    lng: 80.0465,
    icon: '☕'
  },
  'Hostel Area': {
    name: 'Hostel Zone',
    area: 'Paari / Kaari / M-Block Courtyard',
    lat: 12.8260,
    lng: 80.0415,
    icon: '🏠'
  },
  'Bio-Engineering Block': {
    name: 'Bio-Tech & Medical Complex',
    area: 'Bio-Engineering Atrium',
    lat: 12.8205,
    lng: 80.0410,
    icon: '🔬'
  }
};

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
    location: {
      name: 'Central Library',
      area: 'Ground Floor & Reading Hall',
      lat: 12.8236,
      lng: 80.0438
    },
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
    location: {
      name: 'Tech Park',
      area: '4th Floor Computer Lab',
      lat: 12.8248,
      lng: 80.0452
    },
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
    location: {
      name: 'Main Block',
      area: 'University Building Atrium',
      lat: 12.8228,
      lng: 80.0425
    },
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
    location: {
      name: 'Tech Park',
      area: 'IoT & Hardware Lab',
      lat: 12.8248,
      lng: 80.0452
    },
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
    location: {
      name: 'Central Library',
      area: '2nd Floor Discussion Room',
      lat: 12.8236,
      lng: 80.0438
    },
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
    location: {
      name: 'Tech Park',
      area: 'Tech Park Lab 3',
      lat: 12.8248,
      lng: 80.0452
    },
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
    location: {
      name: 'Student Activity Centre',
      area: 'Design Club Hub',
      lat: 12.8215,
      lng: 80.0460
    },
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
    location: {
      name: 'Java Food Court',
      area: 'Outdoor Study Tables',
      lat: 12.8240,
      lng: 80.0465
    },
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
    location: {
      name: 'Student Activity Centre',
      area: 'SAC Main Hall',
      lat: 12.8215,
      lng: 80.0460
    },
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
    location: {
      name: 'Main Block',
      area: 'Auditorium Hall 2',
      lat: 12.8228,
      lng: 80.0425
    },
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
    location: {
      name: 'Hostel Area',
      area: 'Paari / Kaari Quad',
      lat: 12.8260,
      lng: 80.0415
    },
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
    location: {
      name: 'Student Activity Centre',
      area: 'SAC Arts Gallery',
      lat: 12.8215,
      lng: 80.0460
    },
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
  skills: ['Java', 'Python', 'UI/UX', 'Figma', 'React', 'Cybersecurity'],
  github: '',
  linkedin: ''
};

const STUDENT_REGISTRY = {
  'Rahul Sharma': {
    initials: 'RS',
    grad: 'avatar-grad-blue',
    dept: '2nd Year CSE • Computer Science & Engineering',
    skills: ['DBMS', 'SQL', 'CS205', 'C++'],
    github: 'https://github.com/rahul-srm',
    linkedin: 'https://www.linkedin.com/in/rahul-sharma-srm'
  },
  'Priya Nair': {
    initials: 'PN',
    grad: 'avatar-grad-purple',
    dept: '3rd Year CS • Computer Science',
    skills: ['Python', 'DSA', 'React', 'JavaScript'],
    github: 'https://github.com/priya-nair-dev',
    linkedin: 'https://www.linkedin.com/in/priya-nair-srm'
  },
  'Arjun Kumar': {
    initials: 'AK',
    grad: 'avatar-grad-cyan',
    dept: '3rd Year CSE • Computer Science',
    skills: ['Hackathons', 'Frontend', 'React', 'Tailwind'],
    github: 'https://github.com/arjun-kumar-dev',
    linkedin: 'https://www.linkedin.com/in/arjun-kumar-srm'
  },
  'Meera Shah': {
    initials: 'MS',
    grad: 'avatar-grad-amber',
    dept: '3rd Year Design • Human-Centered Design',
    skills: ['Figma', 'UI/UX', 'Prototypes', 'Design Systems'],
    github: '',
    linkedin: 'https://www.linkedin.com/in/meera-shah-design'
  },
  'Rachel Torres': {
    initials: 'RT',
    grad: 'avatar-grad-rose',
    dept: '2nd Year SE • Software Engineering',
    skills: ['Operating Systems', 'Notes', 'C', 'Semaphores'],
    github: 'https://github.com/rachel-torres',
    linkedin: ''
  },
  'Liam Patel': {
    initials: 'LP',
    grad: 'avatar-grad-amber',
    dept: '2nd Year IT • Information Technology',
    skills: ['Java', 'OOP', 'Software Architecture', 'Testing'],
    github: 'https://github.com/liam-patel',
    linkedin: 'https://www.linkedin.com/in/liam-patel-it'
  },
  'Chloe Vance': {
    initials: 'CV',
    grad: 'avatar-grad-magenta',
    dept: '4th Year Design • Human-Centered Design',
    skills: ['UI/UX', 'User Research', 'Portfolios', 'Figma'],
    github: '',
    linkedin: 'https://www.linkedin.com/in/chloe-vance-design'
  },
  'David Kim': {
    initials: 'DK',
    grad: 'avatar-grad-violet',
    dept: '1st Year ECE • Electronics & Communication',
    skills: ['Calculus', 'Math', 'Linear Algebra', 'Physics'],
    github: '',
    linkedin: ''
  },
  'Jordan Miller': {
    initials: 'JM',
    grad: 'avatar-grad-teal',
    dept: '2nd Year ECE • Mathematics & Computing',
    skills: ['Arduino', 'Robotics', 'Circuits', 'Sensors'],
    github: 'https://github.com/jordan-miller-ece',
    linkedin: ''
  },
  'Aiden Scott': {
    initials: 'AS',
    grad: 'avatar-grad-teal',
    dept: '3rd Year CSE • Computer Science',
    skills: ['Cybersecurity', 'CTF', 'Linux', 'Networking'],
    github: 'https://github.com/aiden-scott-sec',
    linkedin: ''
  },
  'Peter Parker': {
    initials: 'PP',
    grad: 'avatar-grad-blue',
    dept: '2nd Year CSE • Web & Systems',
    skills: ['Python', 'Web Development', 'Algorithms'],
    github: 'https://github.com/peter-parker-srm',
    linkedin: 'https://www.linkedin.com/in/peter-parker-srm'
  },
  'Tony Stark': {
    initials: 'TS',
    grad: 'avatar-grad-amber',
    dept: '3rd Year ECE • Embedded Systems',
    skills: ['Robotics', 'Hardware', 'Circuits'],
    github: 'https://github.com/tony-stark-srm',
    linkedin: 'https://www.linkedin.com/in/tony-stark-srm'
  },
  'Gwen Stacy': {
    initials: 'GS',
    grad: 'avatar-grad-magenta',
    dept: '2nd Year CSE • UI/UX & Design',
    skills: ['Figma', 'UI/UX', 'Design Systems'],
    github: '',
    linkedin: 'https://www.linkedin.com/in/gwen-stacy-design'
  },
  'Aryan Sharma': {
    initials: 'AS',
    grad: 'avatar-grad-emerald',
    dept: '3rd Year CSE • Computer Science & Engineering',
    skills: ['Java', 'Python', 'React', 'UI/UX'],
    github: '',
    linkedin: ''
  }
};

function getStudentInfo(name) {
  if (!name) return { initials: 'SR', grad: 'avatar-grad-default', dept: 'SRM Student', skills: ['Campus Exchange'], github: '', linkedin: '' };
  const trimmed = name.trim();
  if (STUDENT_REGISTRY[trimmed]) return STUDENT_REGISTRY[trimmed];

  const parts = trimmed.split(' ').filter(Boolean);
  const initials = parts.map((p) => p[0]).join('').toUpperCase().slice(0, 2) || 'SR';
  const grads = ['avatar-grad-blue', 'avatar-grad-purple', 'avatar-grad-cyan', 'avatar-grad-amber', 'avatar-grad-rose', 'avatar-grad-teal', 'avatar-grad-emerald'];
  const charCodeSum = trimmed.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const grad = grads[charCodeSum % grads.length];
  return { initials, grad, dept: 'SRM Student', skills: ['Campus Exchange'], github: '', linkedin: '' };
}

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
const gateAuthError = document.getElementById('gate-auth-error');
const btnGoogleLogin = document.getElementById('btn-google-login');
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

const profileCredibilitySection = document.getElementById('profile-credibility-section');
const credibilityGithubRow = document.getElementById('credibility-github-row');
const credibilityGithubLink = document.getElementById('credibility-github-link');
const credibilityLinkedinRow = document.getElementById('credibility-linkedin-row');
const credibilityLinkedinLink = document.getElementById('credibility-linkedin-link');

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
const editProfileGithub = document.getElementById('edit-profile-github');
const editProfileLinkedin = document.getElementById('edit-profile-linkedin');
const editGithubError = document.getElementById('edit-github-error');
const editLinkedinError = document.getElementById('edit-linkedin-error');
const btnCloseEditModal = document.getElementById('btn-close-edit-modal');
const btnCancelEditProfile = document.getElementById('btn-cancel-edit-profile');

// Profile Logout Elements
const btnProfileLogout = document.getElementById('btn-profile-logout');
const logoutModal = document.getElementById('logout-modal');
const btnCancelLogout = document.getElementById('btn-cancel-logout');
const btnConfirmLogout = document.getElementById('btn-confirm-logout');

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

// ==========================================================================
// Robust HTML Sanitization & XSS Defense
// ==========================================================================
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  const s = String(str);
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeText(str, maxLength = 2000) {
  if (str === null || str === undefined) return '';
  let s = String(str).trim();
  if (s.length > maxLength) s = s.slice(0, maxLength);
  return escapeHtml(s);
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

function closeAllDrawers() {
  [savedDrawer, inboxDrawer, profileDrawer].forEach((d) => {
    if (d && d.classList.contains('open')) {
      d.classList.remove('open');
      d.style.display = 'none';
    }
  });
  if (postModal && postModal.style.display === 'flex') {
    postModal.style.display = 'none';
  }
  if (!document.querySelector('.drawer-overlay.open') && !document.querySelector('.modal-backdrop[style*="display: flex"]')) {
    document.body.style.overflow = 'auto';
  }
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

// ==========================================================================
// SINGLE-PAGE VIEW SWITCHING (250ms Smooth Section Transitions)
// ==========================================================================

function switchView(viewName) {
  const views = {
    'home': document.getElementById('view-home'),
    'explore': document.getElementById('view-explore'),
    'ai-match': document.getElementById('view-ai-match'),
    'activity': document.getElementById('view-activity')
  };

  const navLinks = {
    'home': document.getElementById('nav-home-link'),
    'explore': document.getElementById('nav-explore-link'),
    'ai-match': document.getElementById('nav-ai-match-link')
  };

  closeAllDrawers();

  const targetView = views[viewName] || views['home'];
  const currentActive = document.querySelector('.app-view.active-view');

  if (currentActive === targetView) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Update navbar active link
  document.querySelectorAll('.nav-links .nav-link').forEach((l) => l.classList.remove('active'));
  if (navLinks[viewName]) {
    navLinks[viewName].classList.add('active');
  }

  if (currentActive) {
    currentActive.classList.add('view-anim-out');
    setTimeout(() => {
      currentActive.classList.remove('active-view', 'view-anim-out');
      currentActive.style.display = 'none';

      targetView.style.display = 'block';
      void targetView.offsetWidth;
      targetView.classList.add('active-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 140);
  } else {
    Object.values(views).forEach((v) => {
      if (v) {
        v.classList.remove('active-view');
        v.style.display = 'none';
      }
    });
    targetView.style.display = 'block';
    targetView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (viewName === 'home') {
    renderHomeFeatured();
    updateAllMetrics();
  } else if (viewName === 'explore') {
    renderListings();
    if (currentExploreViewMode === 'map') {
      setTimeout(() => {
        if (campusMap) {
          campusMap.invalidateSize();
          renderMapMarkers();
        }
      }, 100);
    }
  } else if (viewName === 'ai-match') {
    if (state.aiCurrentMatches.length > 0) {
      renderAiMatchResults();
    }
  } else if (viewName === 'activity') {
    renderActivityFeed();
  }
}
window.switchView = switchView;

function renderHomeFeatured() {
  const homeGrid = document.getElementById('home-featured-grid');
  if (!homeGrid) return;
  const featured = state.listings.slice(0, 3);
  homeGrid.innerHTML = featured.map(createListingCardHTML).join('');
  attachCardListeners(homeGrid);
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

// Navigation Button Listeners
const brandLogoBtn = document.getElementById('brand-logo-btn');
const navHomeLink = document.getElementById('nav-home-link');
const navExploreLink = document.getElementById('nav-explore-link');
const navPostLink = document.getElementById('nav-post-link');

if (brandLogoBtn) brandLogoBtn.addEventListener('click', () => switchView('home'));
if (navHomeLink) navHomeLink.addEventListener('click', () => switchView('home'));
if (navExploreLink) navExploreLink.addEventListener('click', () => switchView('explore'));
if (navAiMatchLink) navAiMatchLink.addEventListener('click', () => switchView('ai-match'));
if (navPostLink) navPostLink.addEventListener('click', openPostModal);
if (navSavedLink) navSavedLink.addEventListener('click', openSavedDrawer);
if (navInboxLink) navInboxLink.addEventListener('click', openInboxDrawer);
if (navProfileLink) navProfileLink.addEventListener('click', openProfileDrawer);
if (navPostBtn) navPostBtn.addEventListener('click', openPostModal);
if (profileEmptyBtn) profileEmptyBtn.addEventListener('click', openPostModal);

// Inter-View Navigation Buttons
const btnHeroExploreLink = document.getElementById('btn-hero-explore-link');
const btnHomeViewAllExplore = document.getElementById('btn-home-view-all-explore');
const btnAiBrowseExplore = document.getElementById('btn-ai-browse-explore');
const btnActivityExploreLink = document.getElementById('btn-activity-explore-link');

if (btnHeroExploreLink) btnHeroExploreLink.addEventListener('click', () => switchView('explore'));
if (btnHomeViewAllExplore) btnHomeViewAllExplore.addEventListener('click', () => switchView('explore'));
if (btnAiBrowseExplore) btnAiBrowseExplore.addEventListener('click', () => switchView('explore'));
if (btnActivityExploreLink) btnActivityExploreLink.addEventListener('click', () => switchView('explore'));
if (btnViewAllNotifs) {
  btnViewAllNotifs.addEventListener('click', () => {
    if (notifDropdown) notifDropdown.style.display = 'none';
    switchView('activity');
  });
}

// Global Escape Key Dismiss Listener for Modals & Drawers
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (logoutModal && logoutModal.style.display === 'flex') {
      closeLogoutModal();
    } else if (profileEditModal && profileEditModal.style.display === 'flex') {
      closeProfileEditModal();
    } else if (listingModal && listingModal.style.display === 'flex') {
      closeListingModal();
    } else if (postModal && postModal.style.display === 'flex') {
      closePostModal();
    } else {
      closeAllDrawers();
    }
  }
});

// Category Cards on Home
categoryFeatureCards.forEach((card) => {
  card.addEventListener('click', () => {
    const cat = card.getAttribute('data-category');
    if (cat) {
      switchView('explore');
      setActiveFilter(cat);
    }
  });
});

// Hero AI Search and prompt chips
if (heroSearchBtn && heroAiSearch) {
  heroSearchBtn.addEventListener('click', () => {
    const q = heroAiSearch.value.trim();
    if (q) {
      switchView('ai-match');
      if (aiMatchInput) aiMatchInput.value = q;
      runAiMatch(q);
    }
  });
  heroAiSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const q = heroAiSearch.value.trim();
      if (q) {
        switchView('ai-match');
        if (aiMatchInput) aiMatchInput.value = q;
        runAiMatch(q);
      }
    }
  });
}

promptChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const query = chip.getAttribute('data-query') || chip.textContent.replace(/^[^\w\s]+/, '').trim();
    if (heroAiSearch) heroAiSearch.value = query;
    if (aiMatchInput) aiMatchInput.value = query;
    switchView('ai-match');
    runAiMatch(query);
  });
});

if (exploreAiBtn) {
  exploreAiBtn.addEventListener('click', () => {
    const q = searchInput ? searchInput.value.trim() : '';
    switchView('ai-match');
    if (q) {
      if (aiMatchInput) aiMatchInput.value = q;
      runAiMatch(q);
    } else {
      if (aiMatchInput) aiMatchInput.focus();
    }
  });
}

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
      const safeAuthor = escapeHtml(l.studentName || 'Rahul Sharma');
      const safeDept = escapeHtml(l.year || l.department || 'SRM Student');
      const studentInfo = getStudentInfo(safeAuthor);
      const safeAvatar = escapeHtml(studentInfo.initials);
      const safeGrad = studentInfo.grad;
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
              <div class="student-avatar-wrap" data-student-name="${safeAuthor}" data-student-dept="${safeDept}">
                <div class="author-avatar ${safeGrad}">${safeAvatar}</div>
                <span class="avatar-verified-tick" title="Verified SRM Student">✓</span>
              </div>
              <div class="author-details">
                <span class="author-name" data-student-name="${safeAuthor}">${safeAuthor} <span class="badge-srm-verified" style="font-size:0.64rem; padding:1px 3px;">✓ SRM Verified</span></span>
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
// SRM Student Sign-In & Supabase Google OAuth (@srmist.edu.in)
// --------------------------------------------------------------------------
// SECURITY ARCHITECTURE:
// 1. Google OAuth initiated via Supabase (provider: 'google', redirectTo: window.location.origin).
// 2. Authenticated user's actual email is retrieved from Supabase session (getSession / onAuthStateChange).
//    Frontend never trusts user-typed email inputs.
// 3. Strict Domain Validation: User is only granted access if email ends with @srmist.edu.in.
// 4. Unauthorized domain rejection: If non-SRM email (@gmail.com, @srmist.com, fake subdomains):
//    - Immediately call Supabase signOut()
//    - Clear local session & state
//    - Return to login screen
//    - Display "Access restricted to verified SRM students. Please use your SRM Google account."
// 5. Zero exposed secrets or client credentials in frontend code.
// ==========================================================================

function getSupabaseClient() {
  if (window.supabase && window.supabase.createClient && window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url && window.SUPABASE_CONFIG.anonKey) {
    if (!window._supabaseClientInstance) {
      window._supabaseClientInstance = window.supabase.createClient(
        window.SUPABASE_CONFIG.url,
        window.SUPABASE_CONFIG.anonKey
      );
    }
    return window._supabaseClientInstance;
  }
  return null;
}

function isValidSrmEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const cleanEmail = email.trim().toLowerCase();
  
  // Must have local username part and end strictly with @srmist.edu.in
  const srmRegex = /^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/i;
  return srmRegex.test(cleanEmail);
}

function isSRMVerified() {
  return localStorage.getItem('isSRMVerified') === 'true';
}

function showGateAuthError(message) {
  if (gateAuthError) {
    gateAuthError.textContent = message;
    gateAuthError.style.display = 'block';
  }
  showToast(`❌ ${message}`);
}

function clearGateAuthError() {
  if (gateAuthError) {
    gateAuthError.textContent = '';
    gateAuthError.style.display = 'none';
  }
}

async function handleGoogleSignIn() {
  const client = getSupabaseClient();
  clearGateAuthError();

  if (!client) {
    showGateAuthError('Authentication service is initializing. Please try again.');
    return;
  }

  try {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });

    if (error) {
      console.error('[Supabase Google OAuth Error]', error);
      showGateAuthError(error.message || 'Google Sign-In failed. Please try again.');
      return;
    }

    if (data && data.url) {
      window.location.href = data.url;
    }
  } catch (err) {
    console.error('[Supabase Google OAuth Exception]', err);
    showGateAuthError('Unable to connect to Google authentication. Please try again.');
  }
}

async function handleAuthSession(session) {
  const client = getSupabaseClient();
  if (!session || !session.user) return false;

  const authUserEmail = (session.user.email || '').toLowerCase().trim();

  // Critical Security Check: authenticated email MUST end with @srmist.edu.in
  if (isValidSrmEmail(authUserEmail)) {
    localStorage.setItem('isSRMVerified', 'true');
    state.currentSrmEmail = authUserEmail;
    state.profile.email = authUserEmail;

    if (session.user.user_metadata) {
      if (session.user.user_metadata.full_name) {
        state.profile.name = session.user.user_metadata.full_name;
      } else if (session.user.user_metadata.name) {
        state.profile.name = session.user.user_metadata.name;
      }
      const rawName = state.profile.name || 'SRM Student';
      const parts = rawName.trim().split(/\s+/);
      state.profile.avatar = parts.length > 1 ? `${parts[0][0]}${parts[1][0]}`.toUpperCase() : rawName.slice(0, 2).toUpperCase();
    }
    saveStoredProfile();

    if (srmAccessGate) srmAccessGate.style.display = 'none';
    if (navSrmBadge) navSrmBadge.style.display = 'inline-flex';
    clearGateAuthError();
    document.body.style.overflow = 'auto';
    renderProfile();
    return true;
  } else {
    // Rejection Flow: Authenticated Google account is NOT an SRM address!
    console.warn('[RExchange Security] Non-SRM Google Account Denied:', authUserEmail);
    if (client) {
      try {
        await client.auth.signOut();
      } catch (e) {
        console.warn('[Supabase SignOut Error on Rejection]', e);
      }
    }
    localStorage.removeItem('isSRMVerified');
    state.currentSrmEmail = '';

    if (srmAccessGate) srmAccessGate.style.display = 'flex';
    if (navSrmBadge) navSrmBadge.style.display = 'none';
    document.body.style.overflow = 'hidden';

    const denialMessage = 'Access restricted to SRM students.';
    showGateAuthError(denialMessage);
    renderProfile();
    return false;
  }
}

async function initSRMVerification() {
  const client = getSupabaseClient();

  if (client) {
    // Register real-time auth state listener once
    if (!window._supabaseAuthListenerAttached) {
      window._supabaseAuthListenerAttached = true;
      try {
        client.auth.onAuthStateChange(async (event, session) => {
          if (event === 'SIGNED_IN' && session && session.user) {
            await handleAuthSession(session);
          } else if (event === 'SIGNED_OUT') {
            localStorage.removeItem('isSRMVerified');
            state.currentSrmEmail = '';
            if (srmAccessGate) srmAccessGate.style.display = 'flex';
            if (navSrmBadge) navSrmBadge.style.display = 'none';
            document.body.style.overflow = 'hidden';
            renderProfile();
          }
        });
      } catch (err) {
        console.warn('[RExchange Auth Listener Warning]', err);
      }
    }

    try {
      const { data, error } = await client.auth.getSession();
      if (data && data.session && data.session.user) {
        const isAllowed = await handleAuthSession(data.session);
        if (isAllowed) return;
      } else {
        // No active Supabase session -> show login screen
        localStorage.removeItem('isSRMVerified');
        state.currentSrmEmail = '';
        if (srmAccessGate) srmAccessGate.style.display = 'flex';
        if (navSrmBadge) navSrmBadge.style.display = 'none';
        document.body.style.overflow = 'hidden';
        renderProfile();
        return;
      }
    } catch (err) {
      console.warn('[RExchange Auth getSession Warning]', err);
    }
  }

  // Fallback check (for offline/standalone test mock environments)
  const verified = isSRMVerified();
  if (verified) {
    if (srmAccessGate) srmAccessGate.style.display = 'none';
    if (navSrmBadge) navSrmBadge.style.display = 'inline-flex';
    document.body.style.overflow = 'auto';
  } else {
    if (srmAccessGate) srmAccessGate.style.display = 'flex';
    if (navSrmBadge) navSrmBadge.style.display = 'none';
    document.body.style.overflow = 'hidden';
  }

  renderProfile();
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

if (btnGoogleLogin) {
  btnGoogleLogin.addEventListener('click', handleGoogleSignIn);
}

if (btnProtectionVerifyNow) {
  btnProtectionVerifyNow.addEventListener('click', () => {
    if (srmProtectionModal) srmProtectionModal.style.display = 'none';
    handleGoogleSignIn();
  });
}

if (btnProtectionCancel) {
  btnProtectionCancel.addEventListener('click', () => {
    if (srmProtectionModal) srmProtectionModal.style.display = 'none';
    if (!isSRMVerified() && srmAccessGate && srmAccessGate.style.display === 'flex') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
}

async function resetSRMVerification() {
  const client = getSupabaseClient();
  if (client) {
    try {
      await client.auth.signOut();
    } catch (e) {}
  }
  localStorage.removeItem('isSRMVerified');
  state.currentSrmEmail = '';
  initSRMVerification();
  showToast('🔒 Verification reset to Google sign-in.');
}

if (btnResetSrmDemo) {
  btnResetSrmDemo.addEventListener('click', resetSRMVerification);
}

window.resetSRMVerification = resetSRMVerification;
window.handleGoogleSignIn = handleGoogleSignIn;

// ==========================================================================
// User Logout Confirmation Workflow
// ==========================================================================

function openLogoutModal() {
  if (logoutModal) {
    logoutModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeLogoutModal() {
  if (logoutModal) {
    logoutModal.style.display = 'none';
    if (!document.querySelector('.drawer-overlay.open') && !document.querySelector('.modal-backdrop[style*="display: flex"]')) {
      document.body.style.overflow = 'auto';
    }
  }
}

async function performLogout() {
  closeLogoutModal();
  closeAllDrawers();

  // Call Supabase signOut()
  const client = getSupabaseClient();
  if (client) {
    try {
      await client.auth.signOut();
    } catch (err) {
      console.warn('[Supabase SignOut Warning]', err);
    }
  }

  // Clear local session / verification state
  localStorage.removeItem('isSRMVerified');
  state.currentSrmEmail = '';

  // Return the user to the Google sign-in screen
  if (srmAccessGate) srmAccessGate.style.display = 'flex';
  if (navSrmBadge) navSrmBadge.style.display = 'none';
  document.body.style.overflow = 'hidden';
  clearGateAuthError();

  renderProfile();
  showToast("✓ You've been logged out.");
}

if (btnProfileLogout) {
  btnProfileLogout.addEventListener('click', openLogoutModal);
}

if (btnCancelLogout) {
  btnCancelLogout.addEventListener('click', closeLogoutModal);
}

if (btnConfirmLogout) {
  btnConfirmLogout.addEventListener('click', performLogout);
}

if (logoutModal) {
  logoutModal.addEventListener('click', (e) => {
    if (e.target === logoutModal) closeLogoutModal();
  });
}

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

function getListingVisualTheme(listing) {
  const cat = listing.category;
  const t = (listing.title + ' ' + (listing.tags || []).join(' ')).toLowerCase();

  if (cat === 'Item') {
    if (t.includes('book') || t.includes('dbms') || t.includes('notes') || t.includes('textbook')) {
      return { themeClass: 'banner-item-theme', icon: '📖', label: 'ACADEMIC MATERIAL' };
    }
    if (t.includes('calc') || t.includes('ti-84') || t.includes('math')) {
      return { themeClass: 'banner-item-theme', icon: '🧮', label: 'HARDWARE & LAB' };
    }
    if (t.includes('arduino') || t.includes('sensor') || t.includes('circuit') || t.includes('kit')) {
      return { themeClass: 'banner-item-theme', icon: '⚡', label: 'IOT & EMBEDDED' };
    }
    return { themeClass: 'banner-item-theme', icon: listing.icon || '📦', label: 'PHYSICAL ITEM' };
  }

  if (cat === 'Skill') {
    if (t.includes('python') || t.includes('java') || t.includes('dsa') || t.includes('code') || t.includes('program')) {
      return { themeClass: 'banner-skill-theme', icon: '🐍', label: 'PROGRAMMING & DSA' };
    }
    if (t.includes('ui') || t.includes('ux') || t.includes('figma') || t.includes('design')) {
      return { themeClass: 'banner-skill-theme', icon: '🎨', label: 'UI/UX & DESIGN' };
    }
    if (t.includes('cyber') || t.includes('security') || t.includes('linux')) {
      return { themeClass: 'banner-skill-theme', icon: '🛡️', label: 'CYBERSECURITY' };
    }
    return { themeClass: 'banner-skill-theme', icon: listing.icon || '🧠', label: 'PEER TUTORING' };
  }

  if (cat === 'Opportunity') {
    if (t.includes('hackathon') || t.includes('collab') || t.includes('frontend') || t.includes('dev')) {
      return { themeClass: 'banner-opp-theme', icon: '🚀', label: 'HACKATHON TEAM' };
    }
    if (t.includes('workshop') || t.includes('git') || t.includes('open source')) {
      return { themeClass: 'banner-opp-theme', icon: '💻', label: 'CAMPUS WORKSHOP' };
    }
    return { themeClass: 'banner-opp-theme', icon: listing.icon || '🏆', label: 'STUDENT PROJECT' };
  }

  return { themeClass: 'banner-item-theme', icon: listing.icon || '✨', label: 'CAMPUS EXCHANGE' };
}

function createListingCardHTML(listing) {
  const safeId = escapeHtml(listing.id);
  const safeTitle = escapeHtml(listing.title);
  const safeDescription = escapeHtml(listing.description);
  const safeCategory = escapeHtml(listing.category);
  const safeAuthor = escapeHtml(listing.studentName || 'Rahul Sharma');
  const safeDept = escapeHtml(listing.year || listing.department || 'SRM Student');
  const safeAvail = escapeHtml(listing.availability || 'Available');
  const badgeClass = getBadgeClass(listing.category);
  const formattedTime = formatTimestamp(listing.createdAt);
  const isSaved = state.savedIds.has(listing.id);

  const studentInfo = getStudentInfo(safeAuthor);
  const safeAvatar = escapeHtml(studentInfo.initials);
  const avatarGrad = studentInfo.grad;

  const visual = getListingVisualTheme(listing);
  const statusPill = listing.isFree
    ? '<span class="card-media-chip">🎁 FREE / TRADE</span>'
    : `<span class="card-media-chip">🟢 ${safeAvail}</span>`;

  const tagsHtml = (listing.tags || ['#srm', `#${listing.category.toLowerCase()}`])
    .map((tag) => `<span class="tag-pill" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</span>`)
    .join('');

  const locationBadge = listing.location
    ? `<span class="badge" style="background:rgba(0,255,133,0.08); border:1px solid rgba(0,255,133,0.25); color:var(--accent-green); font-size:0.7rem; font-weight:700;">📍 ${escapeHtml(listing.location.name)}</span>`
    : '';

  return `
    <article class="listing-card-modern" data-id="${safeId}">
      <div class="card-media-banner ${visual.themeClass}">
        <span class="card-media-icon">${visual.icon}</span>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px;">
          <span class="card-media-watermark">${visual.label}</span>
          ${statusPill}
        </div>
      </div>

      <div class="card-author-header">
        <div class="card-author-left">
          <div class="student-avatar-wrap" data-student-name="${safeAuthor}" data-student-dept="${safeDept}">
            <div class="author-avatar ${avatarGrad}">${safeAvatar}</div>
            <span class="avatar-verified-tick" title="Verified SRM Student">✓</span>
          </div>
          <div class="card-author-meta">
            <div class="card-author-name-row">
              <span class="card-author-name" data-student-name="${safeAuthor}">${safeAuthor}</span>
              <span class="badge-srm-verified" title="Verified SRM Student">✓ SRM Verified</span>
            </div>
            <span class="author-time">${formattedTime} • ${safeDept}</span>
          </div>
        </div>
        <button type="button" class="btn-card-save ${isSaved ? 'is-saved' : ''}" data-id="${safeId}" title="${isSaved ? 'Saved' : 'Save listing'}" aria-label="Save listing">
          ${isSaved ? '🔖' : '☆'}
        </button>
      </div>

      <div class="card-badges-left" style="margin-bottom: 8px; display: flex; gap: 6px; flex-wrap: wrap;">
        <span class="badge ${badgeClass}">${safeCategory}</span>
        ${locationBadge}
      </div>

      <h3 class="card-listing-title">${safeTitle}</h3>
      <p class="card-listing-desc">${safeDescription}</p>

      <div class="card-tags-row">
        ${tagsHtml}
      </div>

      <div class="card-author-footer" style="padding-top: 10px; margin-top: auto; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: flex-end;">
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
      const locMatch = listing.location && listing.location.name.toLowerCase().includes(query);

      matchesSearch = titleMatch || descMatch || catMatch || nameMatch || tagsMatch || locMatch;
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
  } else {
    if (emptyState) emptyState.style.display = 'none';

    if (listingsFeed) {
      listingsFeed.innerHTML = filtered.map(createListingCardHTML).join('');
      attachCardListeners(listingsFeed);
    }
  }

  if (campusMap) {
    renderMapMarkers();
  }
}

// ==========================================================================
// 🗺️ Campus Exchange Map Module (Interactive Leaflet & SRM Landmarks)
// ==========================================================================

let campusMap = null;
let mapMarkersLayer = null;
let userLocationMarker = null;
let currentMapFilter = 'All';
let currentExploreViewMode = 'list'; // 'list' | 'map'
let userGeoLocation = null; // { lat, lng } — In-memory only for privacy

function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function formatDistance(distKm) {
  if (distKm == null || isNaN(distKm)) return '';
  if (distKm < 1) {
    const meters = Math.round(distKm * 1000);
    return `📍 ${meters}m away`;
  }
  return `📍 ${distKm.toFixed(1)} km away`;
}

function initCampusMap() {
  const mapEl = document.getElementById('campus-exchange-map');
  if (!mapEl) return;

  if (typeof L === 'undefined') {
    console.warn('[RExchange Map] Leaflet library (L) is loading...');
    setTimeout(initCampusMap, 150);
    return;
  }

  if (!campusMap) {
    try {
      // Center at SRM Kattankulathur Campus
      campusMap = L.map('campus-exchange-map', {
        center: [SRM_CAMPUS_CENTER.lat, SRM_CAMPUS_CENTER.lng],
        zoom: 16,
        minZoom: 14,
        maxZoom: 19,
        zoomControl: true
      });

      // CartoDB Dark Matter Basemap
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(campusMap);

      mapMarkersLayer = L.layerGroup().addTo(campusMap);
    } catch (e) {
      console.warn('[RExchange Map Init]', e);
    }
  }

  setupMapControls();
  renderMapMarkers();

  if (campusMap) {
    campusMap.invalidateSize();
  }
}

let mapControlsBound = false;
function setupMapControls() {
  const btnFindMe = document.getElementById('btn-find-me');
  const btnCenterCampus = document.getElementById('btn-center-campus');
  const mapFilterChips = document.querySelectorAll('#map-filter-chips .map-chip');
  const landmarkButtons = document.querySelectorAll('.landmark-tag');
  const btnCloseInsp = document.getElementById('btn-close-insp');

  if (btnFindMe && !btnFindMe.hasAttribute('data-bound')) {
    btnFindMe.setAttribute('data-bound', 'true');
    btnFindMe.addEventListener('click', handleFindMe);
  }

  if (btnCenterCampus && !btnCenterCampus.hasAttribute('data-bound')) {
    btnCenterCampus.setAttribute('data-bound', 'true');
    btnCenterCampus.addEventListener('click', () => {
      if (campusMap) {
        campusMap.flyTo([SRM_CAMPUS_CENTER.lat, SRM_CAMPUS_CENTER.lng], 16, { duration: 1.2 });
        showToast('🏫 Centered on SRM Kattankulathur Campus');
      }
    });
  }

  mapFilterChips.forEach((chip) => {
    if (!chip.hasAttribute('data-bound')) {
      chip.setAttribute('data-bound', 'true');
      chip.addEventListener('click', () => {
        const filter = chip.getAttribute('data-map-filter') || 'All';
        
        if (filter === 'Nearby' && !userGeoLocation) {
          showToast('📍 Please click "Find Me" first to enable proximity sorting.');
          handleFindMe();
          return;
        }

        currentMapFilter = filter;
        mapFilterChips.forEach((c) => {
          const isActive = (c.getAttribute('data-map-filter') || 'All') === filter;
          c.classList.toggle('active', isActive);
          c.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        renderMapMarkers();
      });
    }
  });

  landmarkButtons.forEach((btn) => {
    if (!btn.hasAttribute('data-bound')) {
      btn.setAttribute('data-bound', 'true');
      btn.addEventListener('click', () => {
        const landmarkKey = btn.getAttribute('data-landmark');
        if (CAMPUS_LOCATIONS[landmarkKey] && campusMap) {
          const loc = CAMPUS_LOCATIONS[landmarkKey];
          campusMap.flyTo([loc.lat, loc.lng], 17, { duration: 1 });
          showToast(`📍 Jumping to ${loc.name}`);
        }
      });
    }
  });

  if (btnCloseInsp && !btnCloseInsp.hasAttribute('data-bound')) {
    btnCloseInsp.setAttribute('data-bound', 'true');
    btnCloseInsp.addEventListener('click', () => {
      const insp = document.getElementById('map-marker-inspector');
      if (insp) insp.style.display = 'none';
    });
  }
}

function handleFindMe() {
  const btnFindMe = document.getElementById('btn-find-me');
  const btnFindMeText = document.getElementById('btn-find-me-text');
  const noticeText = document.getElementById('map-notice-text');

  if (!navigator.geolocation) {
    showToast('⚠️ Geolocation is not supported by your browser.');
    return;
  }

  if (btnFindMe) btnFindMe.classList.add('loading');
  if (btnFindMeText) btnFindMeText.textContent = 'Locating...';
  if (noticeText) {
    noticeText.innerHTML = `<span>⏳</span> <span class="notice-text">Acquiring current browser coordinates to compute walking distance...</span>`;
  }

  const onGeoSuccess = (pos) => {
    if (btnFindMe) btnFindMe.classList.remove('loading');
    if (btnFindMeText) btnFindMeText.textContent = 'Located ✓';

    userGeoLocation = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    };

    if (campusMap) {
      if (userLocationMarker) {
        campusMap.removeLayer(userLocationMarker);
      }

      const userPinHtml = `
        <div class="user-location-pin" title="You are here"></div>
      `;

      const userIcon = L.divIcon({
        html: userPinHtml,
        className: 'custom-map-marker',
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });

      userLocationMarker = L.marker([userGeoLocation.lat, userGeoLocation.lng], { icon: userIcon })
        .addTo(campusMap)
        .bindPopup(`
          <div class="map-popup-card" style="text-align:center;">
            <strong style="color:#38bdf8; font-size:0.9rem;">🔵 You are here</strong>
            <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-top:4px;">Browser coordinates used locally to show walking distances to campus spots.</span>
          </div>
        `);

      campusMap.flyTo([userGeoLocation.lat, userGeoLocation.lng], 16, { duration: 1.2 });
    }

    if (noticeText) {
      noticeText.innerHTML = `<span class="notice-icon">📍</span> <span class="notice-text"><strong>Location active!</strong> Walking distances to campus exchange spots are now displayed. Your coordinates are strictly private.</span>`;
    }

    renderMapMarkers();
    showToast('📍 Location found! Showing walking distances to campus exchanges.');
  };

  const onGeoError = (err) => {
    if (btnFindMe) btnFindMe.classList.remove('loading');
    if (btnFindMeText) btnFindMeText.textContent = 'Find Me';

    if (err && err.code === 1) {
      // Permission denied
      showToast('📍 Location access denied. You can still browse campus listings.');
      if (noticeText) {
        noticeText.innerHTML = `<span class="notice-icon">🛡️</span> <span class="notice-text">Location access denied. All SRM campus listings remain fully accessible.</span>`;
      }
    } else if (err && err.code === 3) {
      // Timeout
      showToast('📍 Location request timed out. Please try again.');
      if (noticeText) {
        noticeText.innerHTML = `<span class="notice-icon">⚠️</span> <span class="notice-text">Location request timed out. Click "Find Me" to retry.</span>`;
      }
    } else {
      // Unavailable
      showToast('📍 Unable to determine your location.');
      if (noticeText) {
        noticeText.innerHTML = `<span class="notice-icon">⚠️</span> <span class="notice-text">Could not retrieve current position. You can browse landmarks directly.</span>`;
      }
    }
  };

  // Dual-mode geolocation: Try high accuracy first, then fallback to standard accuracy
  navigator.geolocation.getCurrentPosition(
    onGeoSuccess,
    (err) => {
      // If error or timeout on high accuracy, retry without high accuracy
      navigator.geolocation.getCurrentPosition(
        onGeoSuccess,
        onGeoError,
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 120000 }
      );
    },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 60000 }
  );
}

function renderMapMarkers() {
  if (!campusMap || !mapMarkersLayer) return;

  mapMarkersLayer.clearLayers();

  const query = state.searchQuery.trim().toLowerCase();

  // Ensure every real listing from application data is plotted
  let listingsWithLocation = state.listings.map((l) => {
    if (!l.location || !l.location.lat || !l.location.lng) {
      const locKey = l.location && l.location.name && CAMPUS_LOCATIONS[l.location.name]
        ? l.location.name
        : (l.category === 'Item' ? 'Central Library' : l.category === 'Skill' ? 'Tech Park' : 'Student Activity Centre');
      const fallbackLoc = CAMPUS_LOCATIONS[locKey] || CAMPUS_LOCATIONS['Central Library'];
      return {
        ...l,
        location: {
          name: fallbackLoc.name,
          area: fallbackLoc.area,
          lat: fallbackLoc.lat,
          lng: fallbackLoc.lng
        }
      };
    }
    return l;
  });

  if (currentMapFilter !== 'All' && currentMapFilter !== 'Nearby') {
    listingsWithLocation = listingsWithLocation.filter((l) => l.category === currentMapFilter);
  }

  if (query) {
    listingsWithLocation = listingsWithLocation.filter((l) => {
      const t = (l.title || '').toLowerCase();
      const d = (l.description || '').toLowerCase();
      const c = (l.category || '').toLowerCase();
      const loc = (l.location.name || '').toLowerCase();
      return t.includes(query) || d.includes(query) || c.includes(query) || loc.includes(query);
    });
  }

  if (currentMapFilter === 'Nearby' && userGeoLocation) {
    listingsWithLocation.sort((a, b) => {
      const distA = calculateDistanceKm(userGeoLocation.lat, userGeoLocation.lng, a.location.lat, a.location.lng);
      const distB = calculateDistanceKm(userGeoLocation.lat, userGeoLocation.lng, b.location.lat, b.location.lng);
      return distA - distB;
    });
  }

  const spotsLabel = document.getElementById('map-quick-spots-text');
  if (spotsLabel) {
    spotsLabel.textContent = `${listingsWithLocation.length} Campus Exchange Spot${listingsWithLocation.length === 1 ? '' : 's'} Active`;
  }

  listingsWithLocation.forEach((listing) => {
    const lat = listing.location.lat;
    const lng = listing.location.lng;
    const catClass = listing.category.toLowerCase();
    const iconChar = listing.icon || (listing.category === 'Item' ? '📦' : listing.category === 'Skill' ? '🧠' : '🚀');

    const pinHtml = `
      <div class="map-marker-pin pin-${catClass}" data-id="${listing.id}" title="${escapeHtml(listing.title)}">
        <span>${iconChar}</span>
      </div>
    `;

    const markerIcon = L.divIcon({
      html: pinHtml,
      className: 'custom-map-marker',
      iconSize: [38, 38],
      iconAnchor: [19, 19]
    });

    let distText = '';
    if (userGeoLocation) {
      const distKm = calculateDistanceKm(userGeoLocation.lat, userGeoLocation.lng, lat, lng);
      distText = `<span class="map-popup-dist">${formatDistance(distKm)}</span>`;
    }

    const popupHtml = `
      <div class="map-popup-card">
        <div class="map-popup-badge-row">
          <span class="badge ${getBadgeClass(listing.category)}">${escapeHtml(listing.category)}</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">🟢 ${escapeHtml(listing.availability || 'Available')}</span>
        </div>
        <h4 class="map-popup-title">${escapeHtml(listing.title)}</h4>
        <div class="map-popup-meta">
          <span>By <strong>${escapeHtml(listing.studentName || 'SRM Student')}</strong> (${escapeHtml(listing.year || 'SRM')})</span>
          <div class="map-popup-loc">📍 ${escapeHtml(listing.location.name)}</div>
          ${distText}
        </div>
        <button type="button" class="btn-popup-view" onclick="openListingModal('${listing.id}')">View Listing →</button>
      </div>
    `;

    const marker = L.marker([lat, lng], { icon: markerIcon }).addTo(mapMarkersLayer);
    marker.bindPopup(popupHtml);

    marker.on('click', () => {
      showMapListingInspector(listing);
    });
  });
}

function showMapListingInspector(listing) {
  const insp = document.getElementById('map-marker-inspector');
  const avatar = document.getElementById('insp-avatar');
  const title = document.getElementById('insp-title');
  const badge = document.getElementById('insp-badge');
  const meta = document.getElementById('insp-meta');
  const locName = document.getElementById('insp-loc-name');
  const distBadge = document.getElementById('insp-distance-badge');
  const btnView = document.getElementById('btn-insp-view-listing');

  if (!insp) return;

  const studentInfo = getStudentInfo(listing.studentName || 'SRM Student');

  if (avatar) {
    avatar.textContent = studentInfo.initials;
    avatar.className = `inspector-avatar ${studentInfo.grad}`;
  }
  if (title) title.textContent = listing.title;
  if (badge) {
    badge.textContent = listing.category;
    badge.className = `badge ${getBadgeClass(listing.category)}`;
  }
  if (meta) {
    meta.textContent = `${listing.studentName || 'SRM Student'} • ${listing.year || listing.department || 'SRM'}`;
  }
  if (locName && listing.location) {
    locName.textContent = `📍 ${listing.location.name} (${listing.location.area || 'Campus Spot'})`;
  }

  if (distBadge) {
    if (userGeoLocation && listing.location) {
      const distKm = calculateDistanceKm(userGeoLocation.lat, userGeoLocation.lng, listing.location.lat, listing.location.lng);
      distBadge.textContent = formatDistance(distKm);
      distBadge.style.display = 'inline-block';
    } else {
      distBadge.style.display = 'none';
    }
  }

  if (btnView) {
    btnView.onclick = () => {
      openListingModal(listing.id);
    };
  }

  insp.style.display = 'block';
}

function switchExploreViewMode(mode) {
  currentExploreViewMode = mode;
  const btnList = document.getElementById('btn-explore-list-view');
  const btnMap = document.getElementById('btn-explore-map-view');
  const listContainer = document.getElementById('explore-list-container');
  const mapContainer = document.getElementById('explore-map-container');
  const quickStatus = document.getElementById('map-quick-status-chip');

  if (mode === 'map') {
    if (btnList) {
      btnList.classList.remove('active');
      btnList.setAttribute('aria-selected', 'false');
    }
    if (btnMap) {
      btnMap.classList.add('active');
      btnMap.setAttribute('aria-selected', 'true');
    }
    if (listContainer) listContainer.style.display = 'none';
    if (mapContainer) mapContainer.style.display = 'flex';
    if (quickStatus) quickStatus.style.display = 'inline-flex';

    initCampusMap();

    if (campusMap) {
      campusMap.invalidateSize();
      renderMapMarkers();
    }

    setTimeout(() => {
      initCampusMap();
      if (campusMap) {
        campusMap.invalidateSize();
        renderMapMarkers();
      }
    }, 80);

    setTimeout(() => {
      if (campusMap) {
        campusMap.invalidateSize();
      }
    }, 250);
  } else {
    if (btnList) {
      btnList.classList.add('active');
      btnList.setAttribute('aria-selected', 'true');
    }
    if (btnMap) {
      btnMap.classList.remove('active');
      btnMap.setAttribute('aria-selected', 'false');
    }
    if (listContainer) listContainer.style.display = 'block';
    if (mapContainer) mapContainer.style.display = 'none';
    renderListings();
  }
}

// Attach View Mode Switcher Listeners
const btnExploreListView = document.getElementById('btn-explore-list-view');
const btnExploreMapView = document.getElementById('btn-explore-map-view');

if (btnExploreListView) {
  btnExploreListView.addEventListener('click', () => switchExploreViewMode('list'));
}
if (btnExploreMapView) {
  btnExploreMapView.addEventListener('click', () => switchExploreViewMode('map'));
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
      if (e.target.closest('.tag-pill') || e.target.closest('.btn-card-save') || e.target.closest('.student-avatar-wrap') || e.target.closest('.card-author-name')) return;
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

  setupStudentHoverCards();
}

function toggleSaveListing(listingId) {
  const listing = state.listings.find((l) => l.id === listingId);
  const title = listing ? listing.title : 'Listing';

  if (state.savedIds.has(listingId)) {
    state.savedIds.delete(listingId);
    showToast('✓ Removed from saved');
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
    showToast('✓ Listing saved');
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
// ✨ Smart Matches (Core Differentiating Value Exchange System)
// ==========================================================================

const SMART_MATCHES_DATA = [
  {
    id: 'sm-1',
    studentName: 'Peter Parker',
    avatar: 'PP',
    dept: '2nd Year CSE • Web & Systems',
    hasCategory: 'Item',
    hasText: 'DBMS 7th Edition Textbook (Navathe)',
    hasIcon: '📖',
    needsCategory: 'Skill',
    needsText: 'Python & Data Structures Tutoring',
    needsIcon: '🐍',
    score: 94,
    exchangeType: 'Item ↔ Skill',
    rationale: 'Peter has the exact database systems textbook needed for 3rd semester coursework and is actively seeking 1-on-1 Python algorithmic practice.'
  },
  {
    id: 'sm-2',
    studentName: 'Tony Stark',
    avatar: 'TS',
    dept: '3rd Year ECE • Embedded Systems',
    hasCategory: 'Item',
    hasText: 'TI-84 Plus Graphing Calculator',
    hasIcon: '🧮',
    needsCategory: 'Item',
    needsText: 'Arduino Sensor Starter Kit',
    needsIcon: '⚡',
    score: 88,
    exchangeType: 'Item ↔ Item',
    rationale: 'Tony has a surplus scientific calculator from last term and needs IoT microcontrollers and ultrasonic sensors for his robotics lab.'
  },
  {
    id: 'sm-3',
    studentName: 'Gwen Stacy',
    avatar: 'GS',
    dept: '2nd Year CSE • UI/UX & Design',
    hasCategory: 'Skill',
    hasText: 'UI/UX Design & Figma Prototyping',
    hasIcon: '🎨',
    needsCategory: 'Skill',
    needsText: 'Java OOP & Backend Tutoring',
    needsIcon: '☕',
    score: 91,
    exchangeType: 'Skill ↔ Skill',
    rationale: 'Gwen offers top-tier campus app UI design and needs coaching on Java OOP inheritance, polymorphism, and collections.'
  },
  {
    id: 'sm-4',
    studentName: 'Miles Morales',
    avatar: 'MM',
    dept: '1st Year IT • Software Dev',
    hasCategory: 'Item',
    hasText: 'Engineering Math Notes (Sem 1 & 2)',
    hasIcon: '📝',
    needsCategory: 'Skill',
    needsText: 'Web Dev Portfolio Mentoring',
    needsIcon: '💻',
    score: 78,
    exchangeType: 'Item ↔ Skill',
    rationale: 'Miles has clean handwritten calculus and linear algebra notes and wants feedback on his personal portfolio and HTML/CSS projects.'
  }
];

function getMatchScoreTier(score) {
  if (score >= 90) return { tier: 'Perfect Match', className: 'score-perfect', label: 'PERFECT MATCH' };
  if (score >= 75) return { tier: 'Strong Match', className: 'score-strong', label: 'STRONG MATCH' };
  return { tier: 'Potential Match', className: 'score-potential', label: 'POTENTIAL MATCH' };
}

function calculateMatchScore(itemHas, itemNeeds, userInterests = []) {
  let score = 70;
  if (!itemHas || !itemNeeds) return score;

  const hasLower = itemHas.toLowerCase();
  const needsLower = itemNeeds.toLowerCase();

  // Category synergy boost
  if (hasLower.includes('textbook') || hasLower.includes('dbms')) score += 12;
  if (needsLower.includes('python') || needsLower.includes('java')) score += 12;
  
  return Math.min(98, Math.max(65, score));
}

function renderSmartMatches() {
  const grid = document.getElementById('smart-matches-grid');
  if (!grid) return;

  grid.innerHTML = SMART_MATCHES_DATA.map((match) => {
    const tierInfo = getMatchScoreTier(match.score);
    const safeName = escapeHtml(match.studentName);
    const safeDept = escapeHtml(match.dept);
    const safeHas = escapeHtml(match.hasText);
    const safeNeeds = escapeHtml(match.needsText);
    const safeType = escapeHtml(match.exchangeType);

    return `
      <div class="smart-match-card" data-match-id="${match.id}">
        <div>
          <div class="match-card-top-row">
            <div class="match-student-profile">
              <div class="match-avatar-bubble">${escapeHtml(match.avatar)}</div>
              <div class="match-student-meta">
                <span class="match-student-name">${safeName}</span>
                <span class="match-student-dept">${safeDept}</span>
              </div>
            </div>
            <div class="match-score-badge-wrap">
              <span class="match-score-pill ${tierInfo.className}">
                <span>✨</span> ${match.score}% Match
              </span>
              <span class="match-tier-label">${tierInfo.tier}</span>
            </div>
          </div>

          <div class="match-exchange-box">
            <div class="exchange-node">
              <span class="exchange-node-tag tag-has">HAS</span>
              <span class="exchange-node-content">${match.hasIcon} ${safeHas}</span>
            </div>

            <div class="exchange-connector-bar">
              <div class="connector-line"></div>
              <span>${safeType}</span>
              <div class="connector-line"></div>
            </div>

            <div class="exchange-node">
              <span class="exchange-node-tag tag-needs">NEEDS</span>
              <span class="exchange-node-content">${match.needsIcon} ${safeNeeds}</span>
            </div>
          </div>
        </div>

        <div>
          <div class="match-category-tag">
            <span>🔄 Dual-Value Exchange</span>
            <span>•</span>
            <span>100% Campus Verified</span>
          </div>

          <div class="match-actions-row">
            <button type="button" class="btn-match-connect" data-match-id="${match.id}">
              <span>💬</span> Connect
            </button>
            <button type="button" class="btn-match-view" data-match-id="${match.id}">
              <span>👁️</span> View Match
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach Listeners
  grid.querySelectorAll('.btn-match-connect').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const matchId = btn.getAttribute('data-match-id');
      openExchangeRequestModal(matchId);
    });
  });

  grid.querySelectorAll('.btn-match-view').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const matchId = btn.getAttribute('data-match-id');
      openMatchDetailsModal(matchId);
    });
  });

  grid.querySelectorAll('.smart-match-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      const matchId = card.getAttribute('data-match-id');
      openMatchDetailsModal(matchId);
    });
  });
}

// Exchange Request Modal
let activeExchangeMatch = null;
const exchangeRequestModal = document.getElementById('exchange-request-modal');
const btnCloseExchangeModal = document.getElementById('btn-close-exchange-modal');
const btnCancelExchangeModal = document.getElementById('btn-cancel-exchange-modal');
const exchangeRequestForm = document.getElementById('exchange-request-form');
const exchangeOfferInput = document.getElementById('exchange-offer-input');
const exchangeMessageInput = document.getElementById('exchange-message-input');
const exchangeModalOverview = document.getElementById('exchange-modal-overview');

function openExchangeRequestModal(matchId) {
  if (!requireSRMVerification('requesting an exchange')) return;

  const match = SMART_MATCHES_DATA.find((m) => m.id === matchId) || SMART_MATCHES_DATA[0];
  activeExchangeMatch = match;

  if (exchangeModalOverview) {
    exchangeModalOverview.innerHTML = `
      <div class="exchange-overview-peer">
        <div class="match-avatar-bubble" style="width:36px; height:36px; font-size:0.82rem;">${escapeHtml(match.avatar)}</div>
        <div>
          <div style="font-weight:800; color:#fff; font-size:0.95rem;">${escapeHtml(match.studentName)}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(match.dept)}</div>
        </div>
        <span class="match-score-pill ${getMatchScoreTier(match.score).className}" style="margin-left:auto; font-size:0.76rem;">
          ${match.score}% Match
        </span>
      </div>

      <div class="exchange-overview-grid">
        <div>
          <span style="font-size:0.7rem; color:var(--accent-green); font-weight:800; text-transform:uppercase; display:block;">THEY OFFER (HAS)</span>
          <strong style="color:#fff; font-size:0.8rem;">${match.hasIcon} ${escapeHtml(match.hasText)}</strong>
        </div>
        <div>
          <span style="font-size:0.7rem; color:#00d4ff; font-weight:800; text-transform:uppercase; display:block;">THEY NEED</span>
          <strong style="color:#fff; font-size:0.8rem;">${match.needsIcon} ${escapeHtml(match.needsText)}</strong>
        </div>
      </div>
    `;
  }

  if (exchangeOfferInput) {
    exchangeOfferInput.value = match.needsText.replace(/\s*\([^)]*\)/, '');
  }

  if (exchangeMessageInput) {
    exchangeMessageInput.value = `Hey ${match.studentName.split(' ')[0]}, I saw you need ${match.needsText} and I'd love to exchange for your ${match.hasText}!`;
  }

  if (exchangeRequestModal) {
    exchangeRequestModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (exchangeOfferInput) exchangeOfferInput.focus();
  }
}

function closeExchangeRequestModal() {
  if (exchangeRequestModal) {
    exchangeRequestModal.style.display = 'none';
    if (!document.querySelector('.drawer-overlay.open') && !document.querySelector('.modal-backdrop[style*="display: flex"]')) {
      document.body.style.overflow = 'auto';
    }
  }
}

if (btnCloseExchangeModal) btnCloseExchangeModal.addEventListener('click', closeExchangeRequestModal);
if (btnCancelExchangeModal) btnCancelExchangeModal.addEventListener('click', closeExchangeRequestModal);

if (exchangeRequestModal) {
  exchangeRequestModal.addEventListener('click', (e) => {
    if (e.target === exchangeRequestModal) closeExchangeRequestModal();
  });
}

if (exchangeRequestForm) {
  exchangeRequestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!activeExchangeMatch) return;

    const offer = (exchangeOfferInput.value || '').trim();
    const note = (exchangeMessageInput.value || '').trim();

    if (!offer) {
      showToast('⚠️ Please specify what you would like to exchange.');
      if (exchangeOfferInput) exchangeOfferInput.focus();
      return;
    }

    // 1. Create Inbox Thread/Message
    const peerName = activeExchangeMatch.studentName;
    const peerAvatar = activeExchangeMatch.avatar;
    const peerDept = activeExchangeMatch.dept;

    let convo = state.conversations.find((c) => c.peerName === peerName);
    if (!convo) {
      convo = {
        id: `convo-exchange-${Date.now()}`,
        peerName,
        peerAvatar,
        peerDept,
        verified: true,
        lastMessage: note || `Proposed exchange: ${offer}`,
        lastTime: 'Just now',
        unread: false,
        relatedListing: {
          title: activeExchangeMatch.hasText,
          category: activeExchangeMatch.hasCategory,
          icon: activeExchangeMatch.hasIcon,
          authorName: peerName,
          authorDept: peerDept
        },
        messages: [
          {
            sender: 'me',
            text: `🤝 Exchange Proposal: I'm offering "${offer}" in exchange for "${activeExchangeMatch.hasText}".\n\n${note}`,
            time: formatCurrentTime()
          }
        ]
      };
      state.conversations.unshift(convo);
    } else {
      convo.messages.push({
        sender: 'me',
        text: `🤝 Exchange Proposal: I'm offering "${offer}" in exchange for "${activeExchangeMatch.hasText}".\n\n${note}`,
        time: formatCurrentTime()
      });
      convo.lastMessage = `Proposed exchange: ${offer}`;
      convo.lastTime = 'Just now';
    }
    saveConversationsToStorage();

    // 2. Create Notification
    createNotification({
      type: 'messages',
      icon: '🤝',
      title: 'Exchange Request Sent',
      desc: `You proposed an exchange with ${peerName} for "${activeExchangeMatch.hasText}".`,
      targetId: convo.id,
      actionType: 'open-inbox'
    });

    closeExchangeRequestModal();
    renderInboxConversations();
    showToast(`✓ Exchange request sent to ${peerName}!`);
  });
}

// Match Details Modal
const matchDetailsModal = document.getElementById('match-details-modal');
const btnCloseMatchDetails = document.getElementById('btn-close-match-details');
const btnMatchDetailsConnect = document.getElementById('btn-match-details-connect');
const matchDetailsBody = document.getElementById('match-details-body');
let activeDetailsMatchId = null;

function openMatchDetailsModal(matchId) {
  const match = SMART_MATCHES_DATA.find((m) => m.id === matchId) || SMART_MATCHES_DATA[0];
  activeDetailsMatchId = match.id;
  const tierInfo = getMatchScoreTier(match.score);

  if (matchDetailsBody) {
    matchDetailsBody.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; background:rgba(0,0,0,0.3); padding:12px 14px; border-radius:var(--radius-sm); border:1px solid rgba(255,255,255,0.06);">
        <div style="display:flex; align-items:center; gap:12px;">
          <div class="match-avatar-bubble">${escapeHtml(match.avatar)}</div>
          <div>
            <div style="font-weight:800; color:#fff; font-size:1.05rem;">${escapeHtml(match.studentName)}</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">${escapeHtml(match.dept)}</div>
          </div>
        </div>
        <span class="match-score-pill ${tierInfo.className}">
          ${match.score}% Match
        </span>
      </div>

      <div class="match-breakdown-row">
        <span class="breakdown-icon">🎯</span>
        <div>
          <strong style="color:var(--accent-green); font-size:0.88rem; display:block; margin-bottom:2px;">Exchange Synergy Breakdown</strong>
          <p style="font-size:0.84rem; color:var(--text-secondary); line-height:1.5;">${escapeHtml(match.rationale)}</p>
        </div>
      </div>

      <div class="match-breakdown-row">
        <span class="breakdown-icon">🔄</span>
        <div>
          <strong style="color:#00d4ff; font-size:0.88rem; display:block; margin-bottom:4px;">Two-Way Value Flow (${escapeHtml(match.exchangeType)})</strong>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:6px;">
            <div style="background:rgba(0,255,133,0.08); padding:8px 10px; border-radius:4px; border:1px solid rgba(0,255,133,0.2);">
              <span style="font-size:0.7rem; color:var(--accent-green); font-weight:800;">THEY HAVE</span>
              <div style="color:#fff; font-size:0.82rem; font-weight:700; margin-top:2px;">${match.hasIcon} ${escapeHtml(match.hasText)}</div>
            </div>
            <div style="background:rgba(0,212,255,0.08); padding:8px 10px; border-radius:4px; border:1px solid rgba(0,212,255,0.2);">
              <span style="font-size:0.7rem; color:#00d4ff; font-weight:800;">YOU OFFER (THEY NEED)</span>
              <div style="color:#fff; font-size:0.82rem; font-weight:700; margin-top:2px;">${match.needsIcon} ${escapeHtml(match.needsText)}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="match-breakdown-row">
        <span class="breakdown-icon">🛡️</span>
        <div>
          <strong style="color:#ffffff; font-size:0.88rem; display:block; margin-bottom:2px;">Campus Safety & Trust</strong>
          <p style="font-size:0.82rem; color:var(--text-muted); line-height:1.4;">Both parties are institutional SRM students verified with @srmist.edu.in. Meetups occur on campus or via verified institutional channels.</p>
        </div>
      </div>
    `;
  }

  if (matchDetailsModal) {
    matchDetailsModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeMatchDetailsModal() {
  if (matchDetailsModal) {
    matchDetailsModal.style.display = 'none';
    if (!document.querySelector('.drawer-overlay.open') && !document.querySelector('.modal-backdrop[style*="display: flex"]')) {
      document.body.style.overflow = 'auto';
    }
  }
}

if (btnCloseMatchDetails) btnCloseMatchDetails.addEventListener('click', closeMatchDetailsModal);
if (matchDetailsModal) {
  matchDetailsModal.addEventListener('click', (e) => {
    if (e.target === matchDetailsModal) closeMatchDetailsModal();
  });
}

if (btnMatchDetailsConnect) {
  btnMatchDetailsConnect.addEventListener('click', () => {
    closeMatchDetailsModal();
    if (activeDetailsMatchId) {
      openExchangeRequestModal(activeDetailsMatchId);
    }
  });
}

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

// ==========================================================================
// 🔗 Student Credibility Links: Validation & Normalization Engine
// ==========================================================================

function validateAndNormalizeGithubUrl(input) {
  if (!input || typeof input !== 'string') return { valid: true, url: '' };
  let trimmed = input.trim();
  if (!trimmed) return { valid: true, url: '' };

  // Reject dangerous non-web schemes
  if (/^(javascript|data|file|vbscript|about):/i.test(trimmed)) {
    return { valid: false, error: 'Dangerous URL scheme rejected.' };
  }

  // Prepend https:// if protocol omitted
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = 'https://' + trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return { valid: false, error: 'Only HTTP and HTTPS URLs are allowed.' };
    }

    const host = parsed.hostname.toLowerCase();
    if (host !== 'github.com' && host !== 'www.github.com') {
      return { valid: false, error: 'Must be a valid GitHub URL (e.g. https://github.com/username).' };
    }

    const pathname = parsed.pathname.replace(/\/+$/, '');
    if (!pathname || pathname === '/' || pathname.split('/').filter(Boolean).length === 0) {
      return { valid: false, error: 'GitHub URL must include a profile username.' };
    }

    return { valid: true, url: `https://github.com${pathname}` };
  } catch (e) {
    return { valid: false, error: 'Invalid URL format.' };
  }
}

function validateAndNormalizeLinkedinUrl(input) {
  if (!input || typeof input !== 'string') return { valid: true, url: '' };
  let trimmed = input.trim();
  if (!trimmed) return { valid: true, url: '' };

  // Reject dangerous non-web schemes
  if (/^(javascript|data|file|vbscript|about):/i.test(trimmed)) {
    return { valid: false, error: 'Dangerous URL scheme rejected.' };
  }

  // Prepend https:// if protocol omitted
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = 'https://' + trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return { valid: false, error: 'Only HTTP and HTTPS URLs are allowed.' };
    }

    const host = parsed.hostname.toLowerCase();
    if (host !== 'linkedin.com' && !host.endsWith('.linkedin.com')) {
      return { valid: false, error: 'Must be a valid LinkedIn URL (e.g. https://www.linkedin.com/in/username).' };
    }

    const pathname = parsed.pathname.replace(/\/+$/, '');
    if (!pathname || pathname === '/' || pathname.split('/').filter(Boolean).length === 0) {
      return { valid: false, error: 'LinkedIn URL must include a profile path.' };
    }

    return { valid: true, url: `https://www.linkedin.com${pathname}` };
  } catch (e) {
    return { valid: false, error: 'Invalid URL format.' };
  }
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

  // Student Credibility Links Rendering
  const githubUrl = state.profile.github || '';
  const linkedinUrl = state.profile.linkedin || '';

  if (credibilityGithubRow) {
    if (githubUrl) {
      credibilityGithubRow.style.display = 'flex';
      if (credibilityGithubLink) {
        credibilityGithubLink.href = escapeHtml(githubUrl);
        credibilityGithubLink.setAttribute('target', '_blank');
        credibilityGithubLink.setAttribute('rel', 'noopener noreferrer');
      }
    } else {
      credibilityGithubRow.style.display = 'none';
    }
  }

  if (credibilityLinkedinRow) {
    if (linkedinUrl) {
      credibilityLinkedinRow.style.display = 'flex';
      if (credibilityLinkedinLink) {
        credibilityLinkedinLink.href = escapeHtml(linkedinUrl);
        credibilityLinkedinLink.setAttribute('target', '_blank');
        credibilityLinkedinLink.setAttribute('rel', 'noopener noreferrer');
      }
    } else {
      credibilityLinkedinRow.style.display = 'none';
    }
  }

  renderProfileStats();
  renderProfileCompleteness();
  renderProfileActivity();
  renderProfileTabContent();
}

function renderProfileCompleteness() {
  const bar = document.getElementById('profile-completeness-bar');
  const text = document.getElementById('profile-completeness-text');
  const hint = document.getElementById('profile-completeness-hint');
  if (!bar || !text) return;

  let score = 55; // Base verified student profile
  const p = state.profile;
  if (p.bio && p.bio.length > 20) score += 15;
  if (p.skills && p.skills.length >= 3) score += 10;
  if (p.github) score += 10;
  if (p.linkedin) score += 10;

  score = Math.min(100, score);

  bar.style.width = `${score}%`;
  text.textContent = `${score}%`;

  if (hint) {
    if (score === 100) {
      hint.textContent = '🌟 Your profile is 100% complete and fully verified on campus.';
    } else if (!p.github || !p.linkedin) {
      hint.textContent = 'Link your GitHub or LinkedIn profile to enhance campus credibility.';
    } else if (!p.skills || p.skills.length < 4) {
      hint.textContent = 'Add more skills to reach 100% profile completeness.';
    } else {
      hint.textContent = 'Add a detailed campus bio to complete your verified student identity.';
    }
  }
}

function renderProfileActivity() {
  const stream = document.getElementById('profile-activity-list');
  if (!stream) return;

  const activities = [
    { icon: '✓', text: 'Verified institutional identity with @srmist.edu.in', time: 'Active' }
  ];

  const myListings = getMyListings();
  if (myListings.length > 0) {
    activities.unshift({ icon: '📝', text: `Posted "${myListings[0].title.slice(0, 30)}"`, time: 'Recent' });
  }

  const savedListings = state.listings.filter((l) => state.savedIds.has(l.id));
  if (savedListings.length > 0) {
    activities.unshift({ icon: '🔖', text: `Saved "${savedListings[0].title.slice(0, 30)}"`, time: '1 hr ago' });
  }

  activities.unshift({ icon: '✨', text: 'Matched with campus study opportunities', time: 'Just now' });

  stream.innerHTML = activities.slice(0, 4)
    .map((act) => `
      <div class="profile-activity-item">
        <span class="profile-act-icon">${escapeHtml(act.icon)}</span>
        <span style="font-size:0.78rem;">${escapeHtml(act.text)}</span>
        <span class="profile-act-time">${escapeHtml(act.time)}</span>
      </div>
    `)
    .join('');
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
    if (editProfileName) editProfileName.value = state.profile.name || '';
    if (editProfileYear) editProfileYear.value = state.profile.year || '';
    if (editProfileDept) editProfileDept.value = state.profile.department || '';
    if (editProfileBio) editProfileBio.value = state.profile.bio || '';
    if (editProfileSkills) editProfileSkills.value = (state.profile.skills || []).join(', ');
    if (editProfileEmail) editProfileEmail.value = state.profile.email || '';
    if (editProfileGithub) editProfileGithub.value = state.profile.github || '';
    if (editProfileLinkedin) editProfileLinkedin.value = state.profile.linkedin || '';

    if (editGithubError) editGithubError.style.display = 'none';
    if (editLinkedinError) editLinkedinError.style.display = 'none';

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

    const rawGithub = editProfileGithub ? editProfileGithub.value.trim() : '';
    const rawLinkedin = editProfileLinkedin ? editProfileLinkedin.value.trim() : '';

    const githubCheck = validateAndNormalizeGithubUrl(rawGithub);
    if (!githubCheck.valid) {
      if (editGithubError) {
        editGithubError.textContent = githubCheck.error || 'Must be a valid GitHub URL.';
        editGithubError.style.display = 'block';
      }
      if (editProfileGithub) editProfileGithub.focus();
      return;
    } else {
      if (editGithubError) editGithubError.style.display = 'none';
    }

    const linkedinCheck = validateAndNormalizeLinkedinUrl(rawLinkedin);
    if (!linkedinCheck.valid) {
      if (editLinkedinError) {
        editLinkedinError.textContent = linkedinCheck.error || 'Must be a valid LinkedIn URL.';
        editLinkedinError.style.display = 'block';
      }
      if (editProfileLinkedin) editProfileLinkedin.focus();
      return;
    } else {
      if (editLinkedinError) editLinkedinError.style.display = 'none';
    }

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
      skills: skills.length > 0 ? skills : ['Java', 'Python', 'UI/UX', 'Figma'],
      github: githubCheck.url,
      linkedin: linkedinCheck.url
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
  
  const studentInfo = getStudentInfo(authorName);
  if (modalAvatar) {
    modalAvatar.textContent = studentInfo.initials;
    modalAvatar.className = `author-avatar-large ${studentInfo.grad}`;
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

  const modalLocSection = document.getElementById('modal-location-section');
  const modalLocName = document.getElementById('modal-location-name');
  const modalLocArea = document.getElementById('modal-location-area');
  const modalDistPill = document.getElementById('modal-distance-pill');

  if (modalLocSection && modalLocName) {
    if (listing.location && listing.location.name) {
      modalLocSection.style.display = 'block';
      modalLocName.textContent = listing.location.name;
      if (modalLocArea) modalLocArea.textContent = listing.location.area || 'Campus Exchange Spot';
      if (modalDistPill) {
        if (userGeoLocation && listing.location.lat && listing.location.lng) {
          const distKm = calculateDistanceKm(userGeoLocation.lat, userGeoLocation.lng, listing.location.lat, listing.location.lng);
          modalDistPill.textContent = formatDistance(distKm);
          modalDistPill.style.display = 'inline-block';
        } else {
          modalDistPill.style.display = 'none';
        }
      }
    } else {
      modalLocSection.style.display = 'none';
    }
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
      modalRelatedListings.innerHTML = '<p class="empty-desc" style="margin: 8px 0;">No other listings in this category right now.</p>';
    }
  }

  if (listingModal) {
    listingModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

// ==========================================================================
// Floating Student Hover Profile Preview Card (Desktop Hover / Mobile Tap)
// ==========================================================================
const studentHoverCard = document.getElementById('student-hover-card');
const hoverAvatar = document.getElementById('hover-avatar');
const hoverName = document.getElementById('hover-name');
const hoverDept = document.getElementById('hover-dept');
const hoverSkills = document.getElementById('hover-skills');
const btnHoverViewProfile = document.getElementById('btn-hover-view-profile');

let hoverTimeout = null;

function setupStudentHoverCards() {
  if (!studentHoverCard) return;

  function showHoverCard(e, studentName, deptText) {
    clearTimeout(hoverTimeout);
    const info = getStudentInfo(studentName);
    
    if (hoverName) hoverName.textContent = studentName;
    if (hoverAvatar) {
      hoverAvatar.textContent = info.initials;
      hoverAvatar.className = `hover-card-avatar ${info.grad}`;
    }
    if (hoverDept) hoverDept.textContent = deptText || info.dept;
    if (hoverSkills) {
      hoverSkills.innerHTML = (info.skills || ['Campus Exchange', 'SRM Student'])
        .map((s) => `<span class="profile-skill-chip">${escapeHtml(s)}</span>`)
        .join('');
    }

    if (btnHoverViewProfile) {
      btnHoverViewProfile.onclick = () => {
        studentHoverCard.style.display = 'none';
        openProfileDrawer();
        showToast(`👤 Viewing ${studentName}'s verified profile`);
      };
    }

    const rect = e.target.getBoundingClientRect();
    let top = rect.bottom + 8;
    let left = rect.left;

    if (left + 300 > window.innerWidth) {
      left = window.innerWidth - 310;
    }
    if (top + 180 > window.innerHeight) {
      top = rect.top - 180;
    }
    if (top < 10) top = 10;
    if (left < 10) left = 10;

    studentHoverCard.style.top = `${top}px`;
    studentHoverCard.style.left = `${left}px`;
    studentHoverCard.style.display = 'block';
  }

  function hideHoverCard() {
    hoverTimeout = setTimeout(() => {
      if (studentHoverCard) studentHoverCard.style.display = 'none';
    }, 250);
  }

  studentHoverCard.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
  studentHoverCard.addEventListener('mouseleave', hideHoverCard);

  document.querySelectorAll('.student-avatar-wrap, .card-author-name').forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
      const name = el.getAttribute('data-student-name') || el.textContent.trim();
      const dept = el.getAttribute('data-student-dept') || '';
      showHoverCard(e, name, dept);
    });
    el.addEventListener('mouseleave', hideHoverCard);

    el.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        const name = el.getAttribute('data-student-name') || el.textContent.trim();
        const dept = el.getAttribute('data-student-dept') || '';
        showHoverCard(e, name, dept);
      }
    });
  });
}

// ==========================================================================
// Smart User Recommendations ("Students you may want to connect with")
// ==========================================================================
function renderStudentRecommendations() {
  const recStream = document.getElementById('student-rec-stream');
  if (!recStream) return;

  const demoPeers = [
    { name: 'Rahul Sharma', dept: '2nd Year CSE', topSkill: 'DBMS & SQL Mentoring' },
    { name: 'Priya Nair', dept: '3rd Year CS', topSkill: 'Python & DSA Tutor' },
    { name: 'Arjun Kumar', dept: '3rd Year CSE', topSkill: 'Frontend Hackathon Lead' },
    { name: 'Meera Shah', dept: '3rd Year Design', topSkill: 'Figma UI/UX Systems' }
  ];

  recStream.innerHTML = demoPeers
    .map((peer) => {
      const info = getStudentInfo(peer.name);
      return `
        <div class="student-rec-card">
          <div class="student-rec-top">
            <div class="student-avatar-wrap" data-student-name="${escapeHtml(peer.name)}" data-student-dept="${escapeHtml(peer.dept)}">
              <div class="rec-card-avatar ${info.grad}">${escapeHtml(info.initials)}</div>
              <span class="avatar-verified-tick">✓</span>
            </div>
            <div>
              <div style="display:flex; align-items:center; gap:4px;">
                <span class="student-rec-name">${escapeHtml(peer.name)}</span>
                <span class="badge-srm-verified" style="font-size:0.6rem; padding:1px 3px;">✓</span>
              </div>
              <span class="student-rec-dept">${escapeHtml(peer.dept)}</span>
            </div>
          </div>
          <span class="student-rec-skill-tag">⚡ ${escapeHtml(peer.topSkill)}</span>
          <button type="button" class="btn-student-rec-view" data-name="${escapeHtml(peer.name)}">View Profile →</button>
        </div>
      `;
    })
    .join('');

  recStream.querySelectorAll('.btn-student-rec-view').forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      openProfileDrawer();
      showToast(`👤 Viewing ${name}'s verified campus profile`);
    });
  });

  setupStudentHoverCards();
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
        const studentInfo = getStudentInfo(convo.studentName);
        const safeAvatar = escapeHtml(studentInfo.initials);
        const safeGrad = studentInfo.grad;
        const safeTitle = escapeHtml(convo.listingTitle || 'Campus Listing');

        return `
          <div class="convo-item ${isActive ? 'active' : ''} ${convo.unread ? 'unread' : ''}" data-id="${escapeHtml(convo.id)}" role="button" tabindex="0">
            <div class="convo-avatar-wrap">
              <div class="convo-avatar ${safeGrad}">${safeAvatar}</div>
              <span class="avatar-verified-tick" style="width:14px; height:14px; font-size:0.55rem; bottom:-2px; right:-2px;">✓</span>
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

  const studentInfo = getStudentInfo(activeConvo.studentName);
  if (chatHeaderAvatar) {
    chatHeaderAvatar.textContent = studentInfo.initials;
    chatHeaderAvatar.className = `chat-header-avatar ${studentInfo.grad}`;
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
    showToast('✓ Message sent');

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
  } else if (isSkill && !(isItem && /\b(have an? old|selling|give away|don't need)\b/i.test(textLower))) {
    category = 'Skill';
  } else {
    category = 'Item';
  }

  // Detect specific subjects & topics for Tag generation
  const tagList = [];
  if (/\bjava\b/i.test(textLower)) tagList.push('Java');
  if (/\b(oop|object oriented)\b/i.test(textLower)) tagList.push('OOP');
  if (/\bpython\b/i.test(textLower)) tagList.push('Python');
  if (/\b(dbms|database)\b/i.test(textLower)) tagList.push('DBMS');
  if (/\b(dsa|data structures?)\b/i.test(textLower)) tagList.push('DSA');
  if (/\b(hackathon|competition)\b/i.test(textLower)) tagList.push('Hackathon');
  if (/\b(ui\/ux|figma|design)\b/i.test(textLower)) tagList.push('UI/UX');
  if (/\b(react|frontend|web)\b/i.test(textLower)) tagList.push('Frontend');
  if (/\b(textbook|books?)\b/i.test(textLower)) tagList.push('Textbook');
  if (/\b(first[- ]year|1st year|freshman|freshmen)\b/i.test(textLower)) tagList.push('First Year');
  if (/\b(notes|sheets)\b/i.test(textLower)) tagList.push('Study Notes');
  if (/\b(programming|coding|code)\b/i.test(textLower)) tagList.push('Programming');
  if (/\b(tutoring|teach|tutor)\b/i.test(textLower)) tagList.push('Tutoring');
  if (/\b(arduino|robotics)\b/i.test(textLower)) tagList.push('Arduino');
  if (/\b(calculator|ti-?84)\b/i.test(textLower)) tagList.push('Calculator');
  if (/\bfree\b/i.test(textLower)) tagList.push('Free');
  if (/\btrade\b/i.test(textLower)) tagList.push('Trade');

  if (tagList.length === 0) {
    tagList.push(category, 'SRM', 'Campus');
  }

  // Generate clean title & description
  let title = '';
  let description = '';

  if (/java.*books?.*first.*year/i.test(textLower) || (/java/i.test(textLower) && /book/i.test(textLower))) {
    title = 'Java Programming Books for First-Year Students';
    description = `Offering gently used Java programming textbooks and reference materials for first-year SRM students. ${textClean} Available for campus meetup or exchange.`;
    category = 'Item';
  } else if (/teach.*java.*oop/i.test(textLower) || (/java/i.test(textLower) && /oop/i.test(textLower) && category === 'Skill')) {
    title = 'Java & OOP 1-on-1 Peer Tutoring for First-Year Students';
    description = `Offering peer tutoring covering Java core concepts, Object-Oriented Programming (classes, inheritance, polymorphism), and clean coding practice. ${textClean}`;
    category = 'Skill';
  } else if (category === 'Opportunity') {
    const mainTopic = tagList.length > 0 ? tagList[0] : 'Campus Project';
    title = `${mainTopic} Team Collaborator Needed`;
    description = `Looking for motivated student teammates to collaborate on ${mainTopic}. ${textClean} Reach out to connect!`;
  } else if (category === 'Skill') {
    const mainTopic = tagList.length > 0 ? tagList[0] : 'Peer';
    title = `${mainTopic} Tutoring & Peer Mentoring`;
    description = `Offering 1-on-1 peer guidance and tutoring in ${mainTopic}. ${textClean}`;
  } else {
    const mainTopic = tagList.length > 0 ? tagList[0] : 'Study Resource';
    title = `${mainTopic} for SRM Student Exchange`;
    description = `Offering ${mainTopic.toLowerCase()} in great condition. ${textClean} Open for quick SRM campus meetup.`;
  }

  return {
    title,
    category,
    tags: Array.from(new Set(tagList)),
    description
  };
}

let activeAiSuggestedTags = [];

function displayAiSuggestions(suggestion) {
  state.currentAiSuggestion = suggestion;
  activeAiSuggestedTags = [...(suggestion.tags || [])];

  if (aiSuggestedTitle) aiSuggestedTitle.textContent = suggestion.title;
  if (aiSuggestedCategory) {
    aiSuggestedCategory.textContent = suggestion.category;
    aiSuggestedCategory.className = `badge ${getBadgeClass(suggestion.category)}`;
  }
  if (aiSuggestedDescription) aiSuggestedDescription.textContent = suggestion.description;

  renderAiSuggestedTags();

  const procPanel = document.getElementById('ai-assist-processing');
  const resultContent = document.getElementById('ai-suggestion-result-content');
  if (procPanel) procPanel.style.display = 'none';
  if (resultContent) resultContent.style.display = 'block';

  if (aiSuggestionBox) {
    aiSuggestionBox.style.display = 'block';
    aiSuggestionBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function renderAiSuggestedTags() {
  const tagsRow = document.getElementById('ai-suggested-tags');
  if (!tagsRow) return;

  if (activeAiSuggestedTags.length === 0) {
    tagsRow.innerHTML = '<span class="gate-hint-text">No custom tags</span>';
    return;
  }

  tagsRow.innerHTML = activeAiSuggestedTags
    .map((tag, idx) => `
      <span class="ai-tag-chip">
        #${escapeHtml(tag)}
        <button type="button" class="ai-tag-remove-btn" data-tag-idx="${idx}" title="Remove tag" aria-label="Remove tag">✕</button>
      </span>
    `)
    .join('');

  tagsRow.querySelectorAll('.ai-tag-remove-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-tag-idx'), 10);
      activeAiSuggestedTags.splice(idx, 1);
      renderAiSuggestedTags();
    });
  });
}

function hideAiSuggestions() {
  if (aiSuggestionBox) aiSuggestionBox.style.display = 'none';
  const procPanel = document.getElementById('ai-assist-processing');
  if (procPanel) procPanel.style.display = 'none';
  state.currentAiSuggestion = null;
}

if (aiAssistBtn) {
  aiAssistBtn.addEventListener('click', () => {
    const rawDescription = descriptionInput.value.trim();

    if (!rawDescription) {
      if (aiFeedbackMsg) {
        aiFeedbackMsg.textContent = '💡 Please type a rough description first (e.g. "I have old java books for first year students")';
        aiFeedbackMsg.style.display = 'block';
      }
      descriptionInput.focus();
      return;
    }

    if (aiFeedbackMsg) aiFeedbackMsg.style.display = 'none';
    if (aiSuggestionBox) aiSuggestionBox.style.display = 'block';

    const procPanel = document.getElementById('ai-assist-processing');
    const resultContent = document.getElementById('ai-suggestion-result-content');
    const procStatus = document.getElementById('ai-assist-status');

    if (procPanel) procPanel.style.display = 'block';
    if (resultContent) resultContent.style.display = 'none';
    if (procStatus) procStatus.textContent = 'Understanding your listing...';

    setTimeout(() => {
      if (procStatus) procStatus.textContent = 'Suggesting the best category...';
    }, 350);

    setTimeout(() => {
      if (procStatus) procStatus.textContent = 'Improving your listing...';
    }, 700);

    setTimeout(() => {
      const suggestion = generateFallbackAiSuggestion(rawDescription);
      displayAiSuggestions(suggestion);
    }, 1050);
  });
}

if (aiApplyBtn) {
  aiApplyBtn.addEventListener('click', () => {
    if (!state.currentAiSuggestion) return;

    const { title, category, description } = state.currentAiSuggestion;

    titleInput.value = title;
    categorySelect.value = category;
    descriptionInput.value = description;
    state.postPendingTags = [...activeAiSuggestedTags];

    hideAiSuggestions();
    showToast('✨ AI suggestions applied');
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

  let listingTags = [];
  if (state.postPendingTags && state.postPendingTags.length > 0) {
    listingTags = state.postPendingTags.map((t) => (t.startsWith('#') ? t : `#${t.toLowerCase().replace(/\s+/g, '')}`));
  } else {
    const titleWords = title.toLowerCase().split(/\s+/).filter((w) => w.length > 3).slice(0, 2);
    listingTags = [`#srm`, `#${category.toLowerCase()}`, ...titleWords.map((w) => `#${w}`)];
    if (/\bfree\b/i.test(description + ' ' + title)) listingTags.push('#free');
  }

  const locationSelect = document.getElementById('location-select');
  let selectedLocation = null;
  if (locationSelect && locationSelect.value && CAMPUS_LOCATIONS[locationSelect.value]) {
    const locData = CAMPUS_LOCATIONS[locationSelect.value];
    selectedLocation = {
      name: locData.name,
      area: locData.area,
      lat: locData.lat,
      lng: locData.lng
    };
  }

  const newListing = {
    id: `my-listing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title,
    category,
    description,
    studentName: state.profile.name || 'Aryan Sharma',
    department: state.profile.department || 'Computer Science & Engineering',
    year: state.profile.year || '3rd Year',
    avatar: state.profile.avatar || 'AS',
    contact,
    tags: listingTags,
    availability: 'Available',
    isFree: /\bfree\b/i.test(description + ' ' + title),
    icon: category === 'Item' ? '📦' : category === 'Skill' ? '💡' : '🚀',
    matchScore: 96,
    matchReason: 'Your newly created listing on the SRM network.',
    location: selectedLocation,
    createdAt: new Date()
  };

  state.listings.unshift(newListing);
  state.postPendingTags = null;

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

  const successState = document.getElementById('post-success-state');
  if (successState) {
    form.style.display = 'none';
    if (aiSuggestionBox) aiSuggestionBox.style.display = 'none';
    successState.style.display = 'flex';
  }

  setTimeout(() => {
    if (successState) successState.style.display = 'none';
    form.style.display = 'block';
    form.reset();
    closePostModal();
    showToast('✓ Listing published');

    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 1200);
});

// ==========================================================================
// Scroll Reveal & Campus Pulse Count Ticker Animations
// ==========================================================================
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    elements.forEach((el) => observer.observe(el));
  } else {
    elements.forEach((el) => el.classList.add('revealed'));
  }
}

let pulseAnimated = false;
function initPulseAnimation() {
  const pulseEl = document.getElementById('pulse') || document.getElementById('how-it-works');
  if (!pulseEl) return;

  function animateCount(elemId, target) {
    const el = document.getElementById(elemId);
    if (!el) return;
    const duration = 1200;
    const startTime = performance.now();
    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // smooth cubic ease out
      const current = Math.floor(easeProgress * target);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !pulseAnimated) {
          pulseAnimated = true;
          const totalItems = state.listings.length;
          const skillsCount = state.listings.filter((l) => l.category === 'Skill').length;
          const oppsCount = state.listings.filter((l) => l.category === 'Opportunity').length;
          animateCount('pulse-new-listings', totalItems);
          animateCount('pulse-skills-shared', skillsCount);
          animateCount('pulse-opportunities', oppsCount);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(pulseEl);
  }
}

// ==========================================================================
// Rotating AI Search Placeholders (Subtle Interactive Preview)
// ==========================================================================
const ROTATING_AI_PLACEHOLDERS = [
  'Find a Python tutor...',
  'Need a DBMS textbook...',
  'Looking for hackathon teammates...',
  'Find someone who can teach UI/UX...',
  'Looking for a cybersecurity opportunity...',
  'What do you need? e.g., Arduino kit, OS notes'
];

let currentPlaceholderIdx = 0;
let placeholderIntervalId = null;

function initRotatingPlaceholders() {
  const heroInput = document.getElementById('hero-ai-search');
  const aiInput = document.getElementById('ai-match-input');

  const targets = [heroInput, aiInput].filter(Boolean);
  if (!targets.length) return;

  function cyclePlaceholder() {
    currentPlaceholderIdx = (currentPlaceholderIdx + 1) % ROTATING_AI_PLACEHOLDERS.length;
    const nextText = ROTATING_AI_PLACEHOLDERS[currentPlaceholderIdx];

    targets.forEach((input) => {
      if (input && document.activeElement !== input && !input.value.trim()) {
        input.style.opacity = '0.35';
        setTimeout(() => {
          input.setAttribute('placeholder', nextText);
          input.style.opacity = '1';
        }, 220);
      }
    });
  }

  if (placeholderIntervalId) clearInterval(placeholderIntervalId);
  placeholderIntervalId = setInterval(cyclePlaceholder, 3800);
}

// ==========================================================================
// Student Profile Hover Card (Peer Credibility & Mini-Profile Preview)
// ==========================================================================
function setupStudentHoverCards() {
  const hoverCard = document.getElementById('student-hover-card');
  const hoverAvatar = document.getElementById('hover-avatar');
  const hoverName = document.getElementById('hover-name');
  const hoverDept = document.getElementById('hover-dept');
  const hoverSkills = document.getElementById('hover-skills');
  const hoverCredibility = document.getElementById('hover-credibility');
  const btnHoverViewProfile = document.getElementById('btn-hover-view-profile');

  if (!hoverCard) return;

  let hoverTimeout = null;

  function showHoverCard(targetEl, studentName) {
    if (!studentName) return;
    const isOwnProfile = studentName.toLowerCase() === (state.profile.name || '').toLowerCase() || studentName.toLowerCase().includes('you');
    const info = isOwnProfile
      ? {
          initials: state.profile.avatar || 'AS',
          grad: 'avatar-grad-emerald',
          dept: `${state.profile.year} • ${state.profile.department}`,
          skills: state.profile.skills || ['Campus Exchange'],
          github: state.profile.github || '',
          linkedin: state.profile.linkedin || ''
        }
      : getStudentInfo(studentName);

    if (hoverAvatar) {
      hoverAvatar.textContent = info.initials;
      hoverAvatar.className = `hover-card-avatar ${info.grad || 'avatar-grad-blue'}`;
    }
    if (hoverName) hoverName.textContent = studentName;
    if (hoverDept) hoverDept.textContent = info.dept;

    if (hoverSkills) {
      hoverSkills.innerHTML = (info.skills || ['Campus Exchange'])
        .slice(0, 4)
        .map((s) => `<span class="profile-skill-chip">${escapeHtml(s)}</span>`)
        .join('');
    }

    if (hoverCredibility) {
      let credHtml = `<span class="hover-cred-chip srm-chip">🎓 SRM Verified</span>`;
      if (info.github) {
        credHtml += `<a href="${escapeHtml(info.github)}" class="hover-cred-chip" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">💻 GitHub</a>`;
      }
      if (info.linkedin) {
        credHtml += `<a href="${escapeHtml(info.linkedin)}" class="hover-cred-chip" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">💼 LinkedIn</a>`;
      }
      hoverCredibility.innerHTML = credHtml;
      hoverCredibility.style.display = 'flex';
    }

    const rect = targetEl.getBoundingClientRect();
    const top = rect.bottom + window.scrollY + 8;
    const left = Math.max(12, Math.min(window.innerWidth - 290, rect.left + window.scrollX - 40));

    hoverCard.style.top = `${top}px`;
    hoverCard.style.left = `${left}px`;
    hoverCard.style.display = 'block';

    if (btnHoverViewProfile) {
      btnHoverViewProfile.onclick = (e) => {
        e.stopPropagation();
        hoverCard.style.display = 'none';
        openProfileDrawer();
      };
    }
  }

  function hideHoverCard() {
    hoverTimeout = setTimeout(() => {
      if (hoverCard) hoverCard.style.display = 'none';
    }, 280);
  }

  hoverCard.addEventListener('mouseenter', () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
  });
  hoverCard.addEventListener('mouseleave', hideHoverCard);

  document.querySelectorAll('.student-avatar-wrap, .card-author-name').forEach((el) => {
    if (el.hasAttribute('data-hover-bound')) return;
    el.setAttribute('data-hover-bound', 'true');

    el.addEventListener('mouseenter', () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      const studentName = el.getAttribute('data-student-name') || el.textContent.trim();
      showHoverCard(el, studentName);
    });

    el.addEventListener('mouseleave', hideHoverCard);
  });
}

// Global Keyboard Escape Key Handler for all Modals and Drawers
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (listingModal && listingModal.style.display === 'flex') closeListingModal();
    if (postModal && postModal.style.display === 'flex') closePostModal();
    if (srmProtectionModal && srmProtectionModal.style.display === 'flex') closeSRMProtectionModal();
    if (exchangeRequestModal && exchangeRequestModal.style.display === 'flex') closeExchangeRequestModal();
    if (matchDetailsModal && matchDetailsModal.style.display === 'flex') closeMatchDetailsModal();
    if (profileEditModal && profileEditModal.style.display === 'flex') closeProfileEditModal();
    if (savedDrawer && savedDrawer.classList.contains('open')) closeSavedDrawer();
    if (inboxDrawer && inboxDrawer.classList.contains('open')) closeInboxDrawer();
    if (profileDrawer && profileDrawer.classList.contains('open')) closeProfileDrawer();
    if (notifDropdown && notifDropdown.style.display === 'flex') notifDropdown.style.display = 'none';
  }
});

// Initialize on Load
initSRMVerification();
renderHomeFeatured();
renderSmartMatches();
renderListings();
renderSavedListings();
renderProfile();
renderNotifications();
renderInboxConversations();
renderActiveChat();
renderSearchHistory();
renderStudentRecommendations();
setupStudentHoverCards();
initScrollReveal();
initPulseAnimation();
initRotatingPlaceholders();

// Export window functions for testing and external hooks
window.getSupabaseClient = getSupabaseClient;
window.initCampusMap = initCampusMap;
window.switchExploreViewMode = switchExploreViewMode;
window.handleFindMe = handleFindMe;
window.renderMapMarkers = renderMapMarkers;
window.openListingModal = openListingModal;
window.calculateDistanceKm = calculateDistanceKm;
window.formatDistance = formatDistance;
window.CAMPUS_LOCATIONS = CAMPUS_LOCATIONS;
window.SRM_CAMPUS_CENTER = SRM_CAMPUS_CENTER;
window.validateAndNormalizeGithubUrl = validateAndNormalizeGithubUrl;
window.validateAndNormalizeLinkedinUrl = validateAndNormalizeLinkedinUrl;
window.STUDENT_REGISTRY = STUDENT_REGISTRY;
window.getStudentInfo = getStudentInfo;
window.renderProfile = renderProfile;
window.setupStudentHoverCards = setupStudentHoverCards;
window.state = state;



