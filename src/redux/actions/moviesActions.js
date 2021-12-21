export const fetchMovies = (movies) => {

    return {
      type: 'FETCH_MOVIES',
      payload: movies
    };
};

export const fetchMovie = (movie) => {
  return {
    type: 'FETCH_MOVIE',
    payload: movie
  };
};

export const fetchDetails = (details) => {
  return {
    type: 'FETCH_DETAILS',
    payload: details
  };
};


export const fetchReviews = (reviews) => {
  return {
    type: 'FETCH_REVIEWS',
    payload: reviews
  };
};

export const searchNotFound = (notFound) => {
  return {
    type: 'NOT_FOUND',
    payload: notFound
  };
};

