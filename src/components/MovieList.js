import React, { useEffect } from 'react';
import MovieCover from './MovieCover';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions/moviesActions';
import axios from 'axios';

const url = 'https://imdb8.p.rapidapi.com';
const headers = {
  'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_API_KEY
};

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const text = useSelector((state) => state.movies.text);
  const dispatch = useDispatch();

  const getMoviesList = () => {
    axios
      .get(url + `/title/find?q=${text}`, { headers })
      .then((response) => {
        dispatch(fetchMovies(response.data.results));
        console.log(response.data.results);
        return response.data.results;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  useEffect(() => {
    getMoviesList(text);
  }, [text]);

  return (
    <div className='cards'>
      {movies &&
        movies.map((movie, i) => (
          <MovieCover key={i} movie={movie} id={movie.id} />
        ))}
    </div>
  );
};

export default MovieList;
