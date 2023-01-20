import axios from 'axios';
const apiKey = '5e0ca358c6a85ef9a9e43b6452e61748'
const params = {
  params: {
    api_key: `${apiKey}`,
    media_type: 'movie',
    page: 1,
  },
}

async function getMovieTrends() {
  try {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/trending/all/week', params
    );
    const { results } = data
    return results;
  } catch (error) {
    console.log(error);
  }
}

export async function getTvGenres() {
  const { data } = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`)
  const { genres } = data
  return genres
}

export async function getMovieGenres() {
  const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
  const { genres } = data
  return genres
}

export default getMovieTrends;



