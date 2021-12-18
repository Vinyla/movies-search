import React from 'react';
import MovieCover from './MovieCover';

const MovieList = ({ movies }) => {

  return (
    <div className='cards'>
      {movies?.map((movie, i) => (
        <MovieCover
          key={i}
          movie={movie}
          image={movie?.image}
          title={movie?.title}
        />
      ))}
    </div>
  );
};

export default MovieList;
