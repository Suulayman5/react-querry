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

export const fetchMoviesById = async (id:number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzFjNzgxNjI2MjQ4ZTJmN2Q1ZjMwYTRiMTliMzYzYyIsIm5iZiI6MTcyMjM4Nzg2MC42MDE5OTk4LCJzdWIiOiI2NmE5OGQ5NGM2Yzg0YmRjNzc1YzRlZmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.izOjiikUfWAMIcLB9mJHenElu2iK5kFz8TfjOqM-y9M'
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