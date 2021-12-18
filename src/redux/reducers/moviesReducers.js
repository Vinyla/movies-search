const initialState = {
  movies: [],
  movie: {},
  text: 'hacker',
  notFound: ''
};

export const moviesReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: action.payload
      };
    case 'FETCH_MOVIE':
      return {
        ...state,
        movie: action.payload
      };
    case 'SEARCH_MOVIES':
      return {
        ...state,
        text: action.payload
      };
    case 'NOT_FOUND':
      return {
        ...state,
        notFound: action.payload
      };
    default:
      return state;
  }
};
