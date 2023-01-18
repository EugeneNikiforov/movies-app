const searchInput = document.querySelector('input');

searchInput.addEventListener('input', onSearchInput);

const key = '5e0ca358c6a85ef9a9e43b6452e61748';

async function onSearchInput(e) {
  const query = e.target.value;

  const movies = await fetchMovieByName(query);

  let markup = renderGallery(movies);

  searchInput.insertAdjacentHTML('afterend', markup);
}
async function fetchMovieByName(query) {
    const moviesID = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5e0ca358c6a85ef9a9e43b6452e61748&query=${query}`
    )
        .then(r => r.json())
        .then(answer => {
            return answer.results.map(res => res.id);
        })
        .catch(e => e);

    let movies = [];
    await moviesID.forEach(movieID => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${key}`)
            .then(r => r.json())
            .then(a => {
                movies.push(a);
            });
    });
    return movies;
}
function renderGallery(moviesArr) {
  console.log(moviesArr);
  return moviesArr
    .map(
      movie =>
        `
        <div>
            <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt=""></img>
        </div>
        `
    )
    .join('');
}
