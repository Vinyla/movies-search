import React from 'react';
import { Link } from 'react-router-dom';
import noImg from '../assets/images/undefined.png';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions/moviesActions';

const MovieCover = ({ movie, image, title }) => {
  const dispatch = useDispatch();

  const onMovieCoverClick = () => {
    dispatch(fetchMovie(movie));
  };

  return (
    <div className='card' onClick={onMovieCoverClick}>
      <Link to={'/details/' + movie.id} style={{ textDecoration: 'none' }}>
        {image ? (
          <img src={image} alt='Movie img' />
        ) : (
          <img src={noImg} alt='Img undefined' />
        )}
        {title ? <p>{title.substr(0, 28)}</p> : <p>Title not found</p>}
      </Link>
    </div>
  );
};

export default MovieCover;
