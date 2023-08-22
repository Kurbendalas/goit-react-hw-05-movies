import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = '4874cb417d0b51ffa27b7b4d283bf769';

export async function searchTrendingMovies() {
  const response = await axios.get(`${URL}trending/movie/day?api_key=${KEY}`);
  return response.data;
}

export async function searchMovie(query) {
  const response = await axios.get(
    `${URL}search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data;
}

export async function searchMovieDetails(id) {
  const response = await axios.get(`${URL}movie/${id}?api_key=${KEY}`);
  return response.data;
}

export async function searchCast(id) {
  const response = await axios.get(`${URL}movie/${id}/credits?api_key=${KEY}`);
  return response.data;
}
export async function searchReview(id) {
  const response = await axios.get(`${URL}movie/${id}/reviews?api_key=${KEY}`);
  return response.data;
}