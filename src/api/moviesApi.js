import axios from 'axios'

const moviesApi = 'https://imdb8.p.rapidapi.com';
const headers = {
  'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_API_KEY
};