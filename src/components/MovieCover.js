import React from 'react';
import { Link } from 'react-router-dom';
import noImg from '../assets/images/undefined.png';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions/moviesActions';

const MovieCover = ({ movie, id }) => {
  const dispatch = useDispatch();
  const movieId = id && id.split('/')[2];

  const getMovie = () => {
    dispatch(fetchMovie(movie));
  };

  return (
    <div className='card' onClick={getMovie}>
      <Link to={`${movieId}`} style={{ textDecoration: 'none' }}>
        {movie.image === undefined ? (
          <img src={noImg} alt='Img undefined' />
        ) : (
          <img src={movie.image.url} alt='Movie img' />
        )}
      </Link>
      {movie.title === undefined ? (
        <p>Title not found</p>
      ) : (
        <p>{movie.title.substr(0, 28)}</p>
      )}
    </div>
  );
};

export default MovieCover;
