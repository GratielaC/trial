// JavaScript for handling search form submissions
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchInput = document.querySelector('.search-input');
  const query = searchInput.value.trim();

  if (query) {
    console.log(`Searching for: ${query}`);
    // Redirect to search results or perform an API call
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  } else {
    alert('Please enter a search term.');
  }
});
