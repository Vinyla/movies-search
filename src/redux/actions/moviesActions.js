import {
  FETCH_MOVIES,
  SEARCH_MOVIE,
  FETCH_MOVIE,
  FETCH_DETAILS,
  FETCH_RELEASES,
  FETCH_REVIEWS,
  FETCH_GENRES,
  FETCH_AWARDS,
  FETCH_MORE_LIKE_THIS
} from './types';

export const fetchMovies = (movies) => {
  return {
    type: FETCH_MOVIES,
    payload: movies
  };
};

export const searchMovie = (text) => {
  return {
    type: SEARCH_MOVIE,
    payload: text
  };
};

export const fetchMovie = (movie) => {
  return {
    type: FETCH_MOVIE,
    payload: movie
  };
};

export const fetchReleases = (releases) => {
  return {
    type: FETCH_RELEASES,
    payload: releases
  };
};

export const fetchReviews = (reviews) => {
  return {
    type: FETCH_REVIEWS,
    payload: reviews
  };
};

export const fetchGenres = (genres) => {
  return {
    type: FETCH_GENRES,
    payload: genres
  };
};

export const fetchAwards = (awards) => {
  return {
    type: FETCH_AWARDS,
    payload: awards
  };
};

export const fetchDetails = (details) => {
  return {
    type: FETCH_DETAILS,
    payload: details
  };
};

export const fetchMoreMoviesLikeThis = (moreLikeThis) => {
  return {
    type: FETCH_MORE_LIKE_THIS,
    payload: moreLikeThis
  };
};
