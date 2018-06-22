theme.Header = function() {
  var search = document.querySelector('.site-navigation--mobile');
  var menuSpan = search.querySelector('.site-navigation--mobile__button');
  var searchComponent = search.querySelector('.search__global');
  var searchToggle = search.querySelector('.search__global__toggle');
  var searchSubmit = searchComponent.querySelector('button[type=submit]');
  var searchInput = searchComponent.querySelector('input');
  var searchBar = searchComponent.querySelector('.search-bar');

  function toggleAttrs() {
    if(searchComponent.classList.contains('open')) {
      searchToggle.setAttribute('aria-label', 'close search');
      searchSubmit.removeAttribute('tabindex');
      searchBar.removeAttribute('aria-hidden');
    } else {
      searchToggle.setAttribute('aria-label', 'open search');
      searchSubmit.setAttribute('tabindex', '-1');
      searchBar.setAttribute('aria-hidden', 'true');
    }
  }

  function toggleSearch(e) {
    e.preventDefault();
    menuSpan.classList.toggle('hide');
    searchComponent.classList.toggle('open');
    if(searchComponent.classList.contains('open')) {
      searchInput.focus();
    } else {
      searchInput.blur();
    }
    toggleAttrs();
  }

  searchToggle.addEventListener('click', toggleSearch);
};

theme.Header();
