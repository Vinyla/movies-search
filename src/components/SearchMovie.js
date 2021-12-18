import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies, searchNotFound } from '../redux/actions/moviesActions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchMovie = () => {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const API_KEY = process.env.REACT_APP_IMDB_API;

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onMovieSearch = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/Search/${API_KEY}/${inputText}`
      );
      dispatch(fetchMovies(response.data.results));
      dispatch(searchNotFound(inputText));
      // console.log(response.data.results);
      return response.data;
    } catch (error) {
      console.log(error);
    }
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
        onChange={onChange}
        value={inputText}
        type='text'
        name='movie'
        placeholder='Search...'
      />
      <button disabled={!inputText} onClick={onMovieSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SearchMovie;
