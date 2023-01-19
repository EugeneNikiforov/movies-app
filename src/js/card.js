import getMovieTrends from './fetchAPITrends';
import { getSingleMovieById } from './fetchApiByQuery';

const { cardList } = {
  cardList: document.querySelector('.card-list'),
};

getTrendingFilms();

async function getTrendingFilms() {
    const trendingFilms = await getMovieTrends();
    
    trendingFilms.forEach(async (film) => {
        const filmData = {};

        const filmByID = await getSingleMovieById(film.id);
        const genres = filmByID.genres;
        const genresName = [];
        genres.forEach(genre => {
            genresName.push(genre.name);
        })
        const genresArr = film.genre_ids;

        const releaseDate = film.first_air_date || film.release_date;
        filmData.url = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
        filmData.name = film.name || film.original_name || film.original_title;
        filmData.data = releaseDate.slice(0, 4);
        filmData.rating = Math.floor(film.vote_average * 10) / 10;
        filmData.genre = genresName.join(', ');
        createListItem(filmData);
    });
}

function createListItem({
    url, name, genre, data, rating
}) {
    const item = document.createElement('li')
    item.classList.add('listItem')
    const image = document.createElement('img')
    image.classList.add('listItemImage')
    image.setAttribute('src', url)
    const filmInfoContainer = document.createElement('div')
    filmInfoContainer.classList.add('filmInfoContainer')
    const filmName = document.createElement('h2')
    filmName.classList.add('filmName')
    filmName.textContent = name
    const filmInfo = document.createElement('span')
    filmInfo.classList.add('filmInfo')
    filmInfo.textContent = `${genre} |  ${data}`
    const filmRating = document.createElement('span')
    filmRating.classList.add('filmRating')
    filmRating.textContent = `${rating}`
    item.append(image)
    filmInfoContainer.append(filmName)
    filmInfoContainer.append(filmInfo)
    filmInfoContainer.append(filmRating)
    item.append(filmInfoContainer)
    cardList.append(item)
}

