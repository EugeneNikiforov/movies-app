import { getTrendingFilms } from './fetchServices';
import { getMoviesByName } from './fetchServices';


export async function createFilmData() {
    const filmsDataArray = [];
    const trendingFilms = await getTrendingFilms();
        for (const film of trendingFilms) {
          const filmData = {
            id: film.id,
          };
          const releaseDate = film.first_air_date || film.release_date;
          filmData.poster_path = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
          filmData.original_title =
            film.name || film.title || film.original_name || film.original_title;
          filmData.first_air_date = releaseDate.slice(0, 4);
          filmData.vote_average = Math.floor(film.vote_average * 10) / 10;
          const arr = [];
          film.genres_name.forEach(genre => {
            if (!genre.includes('&')) {
              arr.push(genre)
            } 
          });
          filmData.genres = arr.join(', ');
          if (arr.length > 2) {
            filmData.genres = [...arr.slice(0, 2), 'Other'].join(
              ', '
            );
          } 
          filmsDataArray.push(filmData);
        }
    return filmsDataArray;
}

export async function createFilmDataByQuery(query) {
  const filmsDataArray = [];
  const filmsByQuery = await getMoviesByName(query)
  for (const film of filmsByQuery) {
    const filmData = {
      id: film.id,
    };
    const releaseDate = film.first_air_date || film.release_date;
    filmData.poster_path = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
    filmData.original_title =
      film.name || film.title || film.original_name || film.original_title;
    filmData.first_air_date = releaseDate.slice(0, 4);
    filmData.vote_average = Math.floor(film.vote_average * 10) / 10;
    const arr = [];
    film.genres_name.forEach(genre => {
      if (!genre.includes('&')) {
        arr.push(genre);
      }
    });
    filmData.genres = arr.join(', ');
    if (arr.length > 2) {
      filmData.genres = [...arr.slice(0, 2), 'Other'].join(', ');
    }
    filmsDataArray.push(filmData);
  }
  return filmsDataArray;
}

