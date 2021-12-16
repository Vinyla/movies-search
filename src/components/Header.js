import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-vinyla.png';
import SearchMovie from './SearchMovie';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-div' to='/'>
        <img src={logo} alt='movie logo' />
      </Link>
      <SearchMovie />
    </div>
  );
};

export default Header;
