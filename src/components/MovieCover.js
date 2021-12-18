import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions/moviesActions';
import { useNavigate } from 'react-router-dom';

const MovieCover = ({ movie, image, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onMovieCoverClick = () => {
    dispatch(fetchMovie(movie));
    navigate('/details/' + movie.id);
  };

  return (
    <div className='card' onClick={onMovieCoverClick}>
      <div>{image && <img src={image} alt='Movie img' />}</div>
      <div>{title ? <p>{title.substr(0, 28)}</p> : <p>Title not found</p>}</div>
    </div>
  );
};

export default MovieCover;
