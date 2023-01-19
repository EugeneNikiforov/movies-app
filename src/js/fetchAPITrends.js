import axios from 'axios';

async function getMovieTrends() {
  try {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/trending/all/week',
      {
        params: {
          api_key: '5e0ca358c6a85ef9a9e43b6452e61748',
        },
      }
    );

    return data.results;
  } catch (error) {
    console.log(error);
  }
    
}

export default getMovieTrends;



