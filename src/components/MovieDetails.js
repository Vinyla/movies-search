import React from 'react';

const MovieDetails = ({ details, reviews }) => {
  return (
    <div>
      <h2>Movie details</h2>
      <p>
        Releases: {details?.releaseDate ? details?.releaseDate : 'Not Found'}
      </p>
      <p>
        Reviews:{' '}
        {reviews?.content ? reviews?.content.substr(0, 300) + '...' : 'Not Found'}
      </p>
      <p>Genres: {details?.genres ? details?.genres : 'Not Found'}</p>
      <p>Awards: {details?.awards ? details?.awards : 'Not Found'}</p>
    </div>
  );
};

export default MovieDetails;
