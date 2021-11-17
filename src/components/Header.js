import React from 'react';
import logo from '../assets/images/logo.png';
import SearchMovie from './SearchMovie';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-div'>
        <img src={logo} alt='movie logo' />
        <p>VINYLA</p>
      </div>
      <SearchMovie />
    </div>
  );
};

export default Header;
