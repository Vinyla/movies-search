import {
  FETCH_MOVIES,
  SEARCH_MOVIE,
  FETCH_MOVIE,
  FETCH_RELEASES,
  FETCH_REVIEWS,
  FETCH_GENRES,
  FETCH_AWARDS,
  FETCH_MORE_LIKE_THIS,
  FETCH_DETAILS
} from '../actions/types';

const initialState = {
  movies: [],
  text: 'pulp fiction',
  movie: {},
  details: [],
  releases: [],
  reviews: [],
  genres: [],
  awards: [],
  moreLikeThis: []
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case FETCH_DETAILS:
      return {
        ...state,
        details: action.payload
      };
    case FETCH_RELEASES:
      return {
        ...state,
        releases: action.payload
      };
    case FETCH_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    case FETCH_AWARDS:
      return {
        ...state,
        awards: action.payload
      };
    case FETCH_MORE_LIKE_THIS:
      return {
        ...state,
        moreLikeThis: action.payload
      };
    default:
      return state;
  }
};
