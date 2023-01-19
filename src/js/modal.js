// import axios from 'axios';
// import debounce from 'lodash.debounce';

const searchInput = document.querySelector('input');
const movieCards = document.querySelector('.movies');
// searchInput.addEventListener('input', debounce(onSearchInput, 1000));

// async function onSearchInput(e) {
//   axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
//   const query = e.target.value;
//   console.log(query);

//   const moviesID = await getMoviesIDByName(query);

//   const searchedMovies = await fetchMoviesById(moviesID);
//   createGalleryCardsMarkup(searchedMovies);
// }

// async function fetchMoviesById(moviesID) {
//   try {
//     if (moviesID.length === 0) {
//       throw new Error('404');
//     }
//     axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
//     const movies = [];

//     const moviesPromises = moviesID.map(async id => {
//       const result = await axios.get(`/${id}`, {
//         params: {
//           api_key: '5e0ca358c6a85ef9a9e43b6452e61748',
//         },
//       });
//       return result.data;
//     });

//     for (const moviePromise of moviesPromises) {
//       movies.push(await moviePromise);
//     }

//     return movies;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getMoviesIDByName(seachingQuery) {
//   try {
//     const response = await axios.get('', {
//       params: {
//         api_key: '5e0ca358c6a85ef9a9e43b6452e61748',
//         query: seachingQuery,
//       },
//     });

//     if (response.data.results.length === 0) {
//       throw new Error('404');
//     }
//     console.log(response.data.results);
//     return response.data.results.map(movie => movie.id);
//   } catch (error) {
//     console.log(error);
//   }
// }
function createGalleryCardsMarkup(movies) {
  const markup = movies.map(elem => {
    const domElem = document.createElement('img');
    domElem.setAttribute(
      'src',
      `https://image.tmdb.org/t/p/w500/${elem.poster_path}`
    );
    domElem.addEventListener('click', () => {
      toggleModal(elem);
    });
    return domElem;
    //     return ` <li class="card-wrapper" data-id ="${elem.id}" data-modal-open >

    // <div class="card">
    //   <img src='https://image.tmdb.org/t/p/w500/${elem.poster_path}' alt='aaaaaa'>
    //   <h3>${elem.original_title}</h3>
    //   <p>${elem.release_date}</p>
    //   </div>
    // </li>`;
  });
  movieCards.append(...markup);
}

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.getElementById('button-modal-close'),
  modal: document.getElementById('modal'),
  modalImg: document.getElementById('modal-img'),
  modalTitle: document.getElementById('modal-title'),
  modalVote: document.getElementById('modal-vote'),
  modalVotes: document.getElementById('modal-votes'),
  modalPopular: document.getElementById('modal-popular'),
  modalOriginalTitle: document.getElementById('modal-original-title'),
  modalGenre: document.getElementById('modal-genre'),
  modalDescr: document.getElementById('modal-descr'),
};

refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(elem) {
  refs.modal.classList.toggle('is-hidden');
  refs.modalImg.setAttribute(
    'src',
    `https://image.tmdb.org/t/p/w500/${elem.poster_path}`
  );
  refs.modalTitle.textContent = elem.original_title;
  refs.modalVote.textContent = elem.vote_average;
  refs.modalVotes.textContent = elem.vote_count;
  refs.modalPopular.textContent = elem.popularity;
  refs.modalOriginalTitle.textContent = elem.original_title;
  refs.modalGenre.textContent = elem.genres.map(g => {});
  refs.modalDescr.textContent = elem.overview;
}
console.log(123);
