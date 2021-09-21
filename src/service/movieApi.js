import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "19dfa39715c3e665d12183952a4a2e15";

export const getTrendingMovie = async () => {
  const trendingUrl = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
  const trendingResponse = await axios.get(trendingUrl);
  return trendingResponse;
};

export const getSearchMovie = async (query) => {
  const searchUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const searchResponse = await axios.get(searchUrl);
  return searchResponse;
};

export const getMovieById = async (movieId) => {
  const movieUrl = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const movieIdResponse = await axios.get(movieUrl);
  return movieIdResponse;
};

export const getCastById = async (castMovieId) => {
  const castUrl = `${BASE_URL}/movie/${castMovieId}/credits?api_key=${API_KEY}&language=en-US`;
  const creditsResponse = await axios.get(castUrl);
  return creditsResponse;
};

export const getReviews = async (reviewsMovieId) => {
  const reviewsUrl = `${BASE_URL}/movie/${reviewsMovieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const reviewsResponse = await axios.get(reviewsUrl);
  return reviewsResponse;
};
