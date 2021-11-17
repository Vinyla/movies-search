import React from 'react';
import MovieCover from './MovieCover';
import MovieDetails from './MovieDetails';

const DetailsScreen = () => {
  return (
    <div className='details-div'>
      <div className='left'>
        <MovieCover />
        <p>movie title</p>
      </div>
      <div className='right'>
        <MovieDetails />
      </div>
    </div>
  );
};

export default DetailsScreen;
