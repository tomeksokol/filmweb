import { BASE_URL } from "./constans";
import { API_KEY } from "./constans";
import { LANGUAGE } from "./constans";

async function apiService(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(
        new Error("Informacja, której szukasz, nie została znaleziona.")
      );
}

function getTrending(page) {
  return apiService(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`
  );
}

function searchMovies(query, page) {
  return apiService(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&language=${LANGUAGE}&query=${query}&page=${page}`
  );
}

function getMovieDetails(movieId, setMovie) {
  return apiService(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
}

function getMovieCast(movieId) {
  return apiService(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=${LANGUAGE}`
  );
}

function getMovieReviews(movieId, page) {
  return apiService(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`
  );
}

export {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};
