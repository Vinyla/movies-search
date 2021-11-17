import React from 'react';
import DetailsScreen from './DetailsScreen';
import Header from './Header';
import MovieList from './MovieList';

const MainScreen = () => {
  return (
    <div>
      <Header />
      <MovieList />
    </div>
  );
};

export default MainScreen;
