const initialState = {
  details: {},
  reviews: {}
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DETAILS':
      return {
        ...state,
        details: action.payload
      };
    case 'FETCH_REVIEWS':
      return {
        ...state,
        reviews: action.payload
      };
    default:
      return state;
  }
};
