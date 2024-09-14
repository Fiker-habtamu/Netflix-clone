// const Api_key = "c95deeda7ec969ae3cd41890c1b35a2e"
  const Api_key = import.meta.env.VITE_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${Api_key}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${Api_key}&language=en-us&page=1`,
};
export default requests;

