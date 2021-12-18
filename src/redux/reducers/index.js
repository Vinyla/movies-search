import { combineReducers } from 'redux';
import { moviesReducers } from './moviesReducers';
import { detailsReducer } from './detailsReducer';

const reducers = combineReducers({
  movies: moviesReducers,
  details: detailsReducer
});

export default reducers;
