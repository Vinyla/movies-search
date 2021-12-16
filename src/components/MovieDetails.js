import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchReleases,
  fetchReviews,
  fetchGenres,
  fetchAwards,
  fetchMoreMoviesLikeThis
} from '../redux/actions/moviesActions';
import axios from 'axios';

const url = 'https://imdb8.p.rapidapi.com';
const headers = {
  'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_API_KEY
};

const MovieDetails = ({ id }) => {
  const dispatch = useDispatch();
  const movieId = id && id.split('/')[2];

  const releases = useSelector((state) => state.movies.releases);
  const reviews = useSelector((state) => state.movies.reviews);
  const genres = useSelector((state) => state.movies.genres);
  const awards = useSelector((state) => state.movies.awards);

  const getMovieReleases = async () => {
    try {
      let response = await axios.get(
        url + `/title/get-releases?tconst=${movieId}`,
        { headers }
      );
      dispatch(fetchReleases(response.data[0]));
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  const getMovieReviews = async () => {
    try {
      let response = await axios.get(
        url + `/title/get-reviews?tconst=${movieId}`,
        { headers }
      );
      dispatch(
        fetchReviews(response?.data?.featuredUserReview?.review?.reviewTitle)
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  const getMovieGenres = async () => {
    try {
      let response = await axios.get(
        url + `/title/get-genres?tconst=${movieId}`,
        {
          headers
        }
      );
      dispatch(fetchGenres(response.data));
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  const getMovieAwards = async () => {
    try {
      let response = await axios.get(
        url + `/title/get-awards?tconst=${movieId}`,
        {
          headers
        }
      );
      dispatch(fetchAwards(response?.data?.resource?.awards.length));
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  const getMoreSimilarMovies = async () => {
    try {
      let response = await axios.get(
        url + `/title/get-more-like-this?tconst=${movieId}`,
        { headers }
      );
      dispatch(fetchMoreMoviesLikeThis(response.data));
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(async () => {
    getMovieReleases().then(async () => {
      await getMovieReviews().then(async () => {
        await getMovieGenres().then(async () => {
          await getMovieAwards().then(async () => {
            await getMoreSimilarMovies();
          });
        });
      });
    });
  }, []);

  return (
    <div>
      <div>
        <h2>Movie details</h2>
        <p>Releases: {releases?.date}</p>
        <p>Reviews: {reviews} </p>
        <p>Genres: {genres.join(', ')}</p>
        <p>Awards: {awards}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
