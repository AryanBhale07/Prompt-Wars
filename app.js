// State to store listings and active filter
const state = {
  listings: [],
  activeFilter: 'All'
};

// DOM Elements
const form = document.getElementById('listing-form');
const titleInput = document.getElementById('title');
const categorySelect = document.getElementById('category');
const descriptionInput = document.getElementById('description');
const contactInput = document.getElementById('contact');
const errorMessage = document.getElementById('error-message');
const listingsFeed = document.getElementById('listings-feed');
const emptyState = document.getElementById('empty-state');
const emptyTitle = document.getElementById('empty-title');
const emptyDesc = document.getElementById('empty-desc');
const filterButtons = document.querySelectorAll('.filter-btn');

// Helper to escape HTML characters for safe rendering
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Format timestamp for display
function formatTimestamp(date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
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

// Render listings matching current filter to the feed
function renderListings() {
  const filteredListings = state.activeFilter === 'All'
    ? state.listings
    : state.listings.filter((listing) => listing.category === state.activeFilter);

  if (filteredListings.length === 0) {
    if (state.listings.length === 0) {
      emptyTitle.textContent = 'No listings yet';
      emptyDesc.textContent = 'Be the first to post an item, skill, or opportunity above!';
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
            <span>Posted: ${formattedTime}</span>
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

  // If the active filter would hide the new listing, reset filter to 'All' or its category
  if (state.activeFilter !== 'All' && state.activeFilter !== category) {
    setActiveFilter('All');
  } else {
    renderListings();
  }

  // Reset form
  form.reset();
  titleInput.focus();
});

// Initial render
renderListings();
