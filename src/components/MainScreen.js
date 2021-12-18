import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions/moviesActions';
import axios from 'axios';
import MovieList from './MovieList';

const MainScreen = () => {
  const movies = useSelector((state) => state.movies.movies);
  const text = useSelector((state) => state.movies.text);

  const dispatch = useDispatch();
  const API_KEY = process.env.REACT_APP_IMDB_API;

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const response = await axios.get(
          `https://imdb-api.com/en/API/Search/${API_KEY}/${text}`
        );
        dispatch(fetchMovies(response.data.results));
        // console.log(response.data.results);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesList();
  }, [text]);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MainScreen;
