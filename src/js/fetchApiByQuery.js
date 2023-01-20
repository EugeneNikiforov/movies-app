import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

async function fetchMoviesById(moviesID) {
  try {
    if (moviesID.length === 0) {
      throw new Error('404');
    }
    const movies = [];

    const moviesPromises = moviesID.map(async id => {
      const result = await axios.get(`/movie/${id}`, {
        params: {
          api_key: '5e0ca358c6a85ef9a9e43b6452e61748',
        },
      });
      return result.data;
    });

    for (const moviePromise of moviesPromises) {
      movies.push(await moviePromise);
    }

    return movies;
  } catch (error) {
      console.log(error);
  }
}
async function getMoviesIDByName(seachingQuery) {
  try {
    const response = await axios.get('/search/movie', {
      params: {
        api_key: '5e0ca358c6a85ef9a9e43b6452e61748',
        query: seachingQuery,
      },
    });

    if (response.data.results.length === 0) {
      throw new Error('404');
    }

    return response.data.results.map(movie => movie.id);
  } catch (error) {
    console.log(error);
  }
}
 async function getMoviesByQuery(query) {

  const moviesID = await getMoviesIDByName(query);
  const searchedMovies = await fetchMoviesById(moviesID);

  return searchedMovies;
}
export async function getSingleMovieById(id) {
  try {
    const {data} = await axios.get(`/movie/${id}`, {
      params: {
        api_key: '5e0ca358c6a85ef9a9e43b6452e61748',
      },
    });
    return data;
  } catch (error) {
    if ((error.request.status === 404)) {
      return
    }
    console.log(error);
  }
  
}

// export default {
//   fetchMoviesById,
//   getMoviesIDByName,
//   getMoviesByQuery,
//   getSingleMovieById,
// };
