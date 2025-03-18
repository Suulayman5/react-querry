export const fetchMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.BEARER_TOKEN,
  }
};
try{
    const res = await fetch(url, options)
    if (!res.ok) {
        throw new Error('Failed to fetch movies');
    }
    const json = await res.json();
    return json.results;
} catch (error) {
    console.error(error); 
    throw new Error('Failed to fetch movies');      
}
}