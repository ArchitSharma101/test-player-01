const contentArray = [
  { type: 'movie', title: 'Black Panther', slug: 'black-panther' },
  { type: 'tv', title: 'The Witcher', slug: 'the-witcher' }
];

function populateLists() {
  const moviesList = document.getElementById('moviesList');
  const tvList = document.getElementById('tvList');
  moviesList.innerHTML = '';
  tvList.innerHTML = '';

  let movieCount = 1;
  let tvCount = 1;

  contentArray.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.type === 'movie' ? movieCount++ : tvCount++}. ${item.title}`;
    li.addEventListener('click', () => {
      window.location.href = item.type === 'movie' 
        ? `movies/${item.slug}.html`
        : `tv/${item.slug}.html`;
    });
    if(item.type === 'movie') moviesList.appendChild(li);
    else tvList.appendChild(li);
  });
}

function searchContent() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const moviesList = document.getElementById('moviesList');
  const tvList = document.getElementById('tvList');
  moviesList.innerHTML = '';
  tvList.innerHTML = '';

  let movieCount = 1;
  let tvCount = 1;

  contentArray.filter(item => item.title.toLowerCase().includes(query))
    .forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.type === 'movie' ? movieCount++ : tvCount++}. ${item.title}`;
      li.addEventListener('click', () => {
        window.location.href = item.type === 'movie' 
          ? `movies/${item.slug}.html`
          : `tv/${item.slug}.html`;
      });
      if(item.type === 'movie') moviesList.appendChild(li);
      else tvList.appendChild(li);
    });
}

populateLists();
