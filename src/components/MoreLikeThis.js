import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import MovieCover from './MovieCover';

const url = 'https://imdb8.p.rapidapi.com';
const headers = {
  'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_API_KEY
};

const MoreLikeThis = () => {
  const moreLikeThis = useSelector((state) => state.movies.moreLikeThis);
  const [similarMoviesId, setSimilarMoviesId] = useState([]);
  const [similarMoviesData, setSimilarMoviesData] = useState([]);

  useEffect(() => {
    let realIds = [];
    for (let i = 0; i < moreLikeThis.length; i++) {
      realIds.push(moreLikeThis[i].split('/')[2]);
    }
    setSimilarMoviesId(realIds);
  }, [moreLikeThis]);

  const getMoviesDetails = async () => {
    for (let i = 0; i < 10; i++) {
      let finalResult = await axios.get(
        url + `/title/get-details?tconst=${similarMoviesId[i]}`,
        { headers }
      );
      setSimilarMoviesData((result) => [...result, finalResult.data]);
      console.log(finalResult.data);
    }
  };

  useEffect(async () => {
    getMoviesDetails();
  }, []);

  return (
    <div>
      {/* {similarMoviesData.map((movie, i) => (
        <div key={i}>
          <MovieCover movie={movie} />
        </div>
      ))} */}
    </div>
  );
};

export default MoreLikeThis;
