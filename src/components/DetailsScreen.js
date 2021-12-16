import React from 'react';
import MovieCover from './MovieCover';
import MovieDetails from './MovieDetails';
import MoreLikeThis from './MoreLikeThis'
import { useSelector } from 'react-redux';

const DetailsScreen = () => {
  const movie = useSelector((state) => state.movies.movie);

  return (
    <div>
      <div className='details-div'>
        <div className='left'>
          <MovieCover movie={movie} title={movie.title} img={movie.image} />
        </div>
        <div className='right'>
          <MovieDetails movie={movie} id={movie.id} />
        </div>
      </div>
      <div>
        <MoreLikeThis movie={movie} id={movie.id} />
      </div>
    </div>
  );
};

export default DetailsScreen;
