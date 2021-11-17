const initialState = {
  movies: [],
  text: '',
  movie: []
};

const searchReducer = ( state= initialState, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES':
      return {
        ...state,
        text: action.payload
      };
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: action.payload.Search
      };
    case 'FETCH_MOVIE':
      return {
        ...state,
        movie: action.payload
      };
    default:
      return state;
  }
};
