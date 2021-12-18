import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetails, fetchReviews } from '../redux/actions/moviesActions';
import MovieCover from './MovieCover';
import MovieDetails from './MovieDetails';
import MoreLikeThis from './MoreLikeThis';
import axios from 'axios';


const DetailsScreen = () => {
  const details = useSelector((state) => state.details.details);
  const reviews = useSelector((state) => state.details.reviews)
  const movie = useSelector((state) => state.movies.movie);

  const dispatch = useDispatch();

  const API_KEY = process.env.REACT_APP_IMDB_API;

  const getMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/Title/${API_KEY}/${movie.id}`
      );
      dispatch(fetchDetails(response.data));
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieReviews = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/Reviews/${API_KEY}/${movie.id}`
      );
      dispatch(fetchReviews(response.data.items[0]));
      // console.log(response.data.items[0]);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
    getMovieReviews();
  }, [movie]);

  
  return (
    <div>
      <div className='details-div'>
        <div className='left'>
          <MovieCover movie={movie} image={movie.image} title={movie.title} />
        </div>
        <div className='right'>
          <MovieDetails details={details} reviews={reviews} />
        </div>
      </div>
      <div className='section-title'>
        <h2>More movies like this</h2>
      </div>
      <div className='more'>
        <MoreLikeThis details={details} movie={movie} />
      </div>
    </div>
  );
};

export default DetailsScreen;
