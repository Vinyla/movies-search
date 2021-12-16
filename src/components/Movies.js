import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsScreen from './DetailsScreen';
import MainScreen from './MainScreen';
import Header from './Header';

const Movies = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/:id' element={<DetailsScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Movies;
