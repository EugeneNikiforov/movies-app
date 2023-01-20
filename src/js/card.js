import getMoviesByQuery from './fetchApiByQuery';
import getMovies from './fetchApiByQuery';
import { ModalService } from './modal';
const q = 'zombie';
onSearchInput(q);

async function onSearchInput(q) {
  const a = await getMovies(q);
  console.log(a);
}

const { cardList } = {
  cardList: document.querySelector('.card-list'),
};

function createListItem(elem) {
  const item = document.createElement('li');
  item.classList.add('listItem');
  item.addEventListener('click', () => {
    ModalService.openModal(elem);
  });
  const image = document.createElement('img');
  image.classList.add('listItemImage');
  image.setAttribute(
    'src',
    `https://image.tmdb.org/t/p/w500/${elem.poster_path}`
  );
  const filmInfoContainer = document.createElement('div');
  filmInfoContainer.classList.add('filmInfoContainer');
  const filmName = document.createElement('h2');
  filmName.classList.add('filmName');
  filmName.textContent = elem.original_title;
  const filmInfo = document.createElement('span');
  filmInfo.classList.add('filmInfo');
  filmInfo.textContent = `${elem.genres
    .map(({ name }) => name)
    .join(', ')} |  ${elem.release_date.slice(0, 4)}`;
  const filmRating = document.createElement('span');
  filmRating.classList.add('filmRating');
  filmRating.textContent = `${elem.vote_average.toFixed(1)}`;
  item.append(image);
  filmInfoContainer.append(filmName);
  filmInfoContainer.append(filmInfo);
  filmInfoContainer.append(filmRating);
  item.append(filmInfoContainer);
  cardList.append(item);
}
// createListItem(film)
getMoviesByQuery('seventh son').then(array => {
  array.forEach(film => {
    createListItem(film);
  });
});
