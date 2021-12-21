import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const MainScreen = () => {
  const movies = useSelector((state) => state.movies.movies);
  const notFound = useSelector((state) => state.movies.notFound);

  return (
    <div>
      {movies.length === 0 ? (
        `No results found for : ${notFound}`
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default MainScreen;
