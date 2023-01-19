// const dayTrends = day;
// const weekTrends = week;

    function trendMovies() {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=5e0ca358c6a85ef9a9e43b6452e61748&pageSize=20&page=1`)
        .then(r => r.json())
        .then(console.log(1))
        .catch(console.error(404))
    }
    

function TrendMarkup(movie) {
    return ``
}

