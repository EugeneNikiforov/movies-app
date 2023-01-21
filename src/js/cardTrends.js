import getMovieTrends, { getMovieGenres, getTvGenres } from './fetchAPITrends';
import { ModalService } from './modal';

const { cardList } = {
  cardList: document.querySelector('.card-list'),
};
getTrendingFilms();
async function getTrendingFilms() {
  const trendingFilms = await getMovieTrends();
  const tvGenres = await getTvGenres();
  const movieGenres = await getMovieGenres();
  const allGenres = [...tvGenres, ...movieGenres];
  trendingFilms.forEach(f => {
    f.genres_name = [];
    allGenres.forEach(g => {
      if (f.genre_ids.includes(g.id)) {
        f.genres_name.push(g.name);
      }
    });
  });

  for (const film of trendingFilms) {
    const filmData = {
      id: film.id,
    };
    const releaseDate = film.first_air_date || film.release_date;
    filmData.poster_path = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
    filmData.original_title =
      film.name || film.original_name || film.original_title;
    filmData.first_air_date = releaseDate.slice(0, 4);
    filmData.vote_average = Math.floor(film.vote_average * 10) / 10;
    filmData.genres = film.genres_name.filter(
      (genre_name, index, array) => array.indexOf(genre_name) === index
    );
    createListItem(filmData);
  }
}

function createListItem(elem) {
  const item = document.createElement('li');
  item.classList.add('listItem');
  const image = document.createElement('img');
  image.classList.add('listItemImage');
  image.setAttribute('src', elem.poster_path);
  const filmInfoContainer = document.createElement('div');
  filmInfoContainer.classList.add('filmInfoContainer');
  const filmName = document.createElement('h2');
  filmName.classList.add('filmName');
  filmName.textContent = elem.original_title;
  const filmInfo = document.createElement('span');
  filmInfo.classList.add('filmInfo');
  filmInfo.textContent = `${elem.genres} |  ${elem.first_air_date}`;
  const filmRating = document.createElement('span');
  filmRating.classList.add('filmRating');
  filmRating.textContent = `${elem.vote_average}`;
  item.append(image);
  filmInfoContainer.append(filmName);
  filmInfoContainer.append(filmInfo);
  filmInfoContainer.append(filmRating);
  item.append(filmInfoContainer);
  cardList.append(item);

  item.addEventListener('click', () => {
    ModalService.openModal(elem.id);
  });
}
