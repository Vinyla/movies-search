import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/actions/moviesActions';
import axios from 'axios';

const url = 'https://imdb8.p.rapidapi.com';
const headers = {
  'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_API_KEY
};

const SearchMovie = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onMovieSearch = () => {
    axios
      .get(url + `/title/find?q=${inputText}`, { headers })
      .then((response) => {
        dispatch(fetchMovies(response.data.results));
        console.log(response.data.results);
        return response.data.results;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  const onMovieSubmit = (e) => {
    e.preventDefault();
    onMovieSearch();
    setInputText('');
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
      <button onClick={onMovieSubmit}>Submit</button>
    </div>
  );
};

export default SearchMovie;
