import React from 'react';

const MovieDetails = ({ details, reviews }) => {
  return (
    <div>
      <h2>Movie details</h2>
      <p>Releases: {details?.releaseDate}</p>
      <p>Reviews: {reviews?.content}</p>
      <p>Genres: {details?.genres}</p>
      <p>Awards: {details?.awards}</p>
    </div>
  );
};

export default MovieDetails;
