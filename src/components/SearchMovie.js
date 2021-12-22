import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, searchNotFound } from '../redux/actions/moviesActions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchMovie = () => {
  const text = useSelector((state) => state.movies.text);
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const API_KEY = process.env.REACT_APP_IMDB_API;

  const getMoviesList = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/Search/${API_KEY}/${text}`
      );
      dispatch(fetchMovies(response.data.results));
      dispatch(searchNotFound(inputText));
      // console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  const onMovieSearch = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/Search/${API_KEY}/${inputText}`
      );
      dispatch(fetchMovies(response.data.results));
      dispatch(searchNotFound(inputText));
      // console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (inputText.length === 0) {
      getMoviesList();
    } else onMovieSearch();
  });

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onMovieSubmit = (e) => {
    e.preventDefault();
    onMovieSearch();
    setInputText('');
    navigate('/');
  };

  return (
    <div className='input-div'>
      <input
        placeholder='Search movie...'
        onChange={onInputChange}
        type='text'
        name='movie'
        value={inputText}
      />
      <button disabled={!inputText} onClick={onMovieSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SearchMovie;
