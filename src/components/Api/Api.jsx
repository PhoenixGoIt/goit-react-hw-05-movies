import axios from "axios";

const API_KEY = '0c0590b3805374471ab3fff3c1c487de';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export const getMovies = async (page = 1) => {
  const res = await axios.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false&per_page=24`
  );
  return res.data.results;
};

export const Query = async (query, page = 1) => {
  const res = await axios.get(
    `${END_POINTS.querySearch}?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
  );

  return res.data.results;
};

export const MoviesDetails = async id => {
  const res = await axios.get(
    `${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};


export const MoviesCredits = async id => {
  const res = await axios.get(
    `${END_POINTS.movieDetails}/${id}${END_POINTS.movieCredits}?api_key=${API_KEY}&language=en-US`
  );

  return res.data.cast;
};

export const MoviesReviews = async (id, page = 1) => {
  const res = await axios.get(
    `${END_POINTS.movieDetails}/${id}${END_POINTS.movieReviews}?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return res.data.results;
};
