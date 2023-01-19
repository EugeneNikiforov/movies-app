import axios from 'axios';

async function getMovieTrends() {

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/all/week';
    const result = axios.get('', {
      params: {
        api_key: '5e0ca358c6a85ef9a9e43b6452e61748',
      },
    });
} 



