import React from 'react';
import MovieCover from './MovieCover';

const MoreLikeThis = ({ details }) => {
  return (
    <div className='more-movies'>
      {details?.similars?.map((movie, i) => (
        <div key={i}>
          <MovieCover
            movie={movie}
            image={movie?.image}
            title={movie?.title}
          />
        </div>
      ))}
    </div>
  );
};

export default MoreLikeThis;
