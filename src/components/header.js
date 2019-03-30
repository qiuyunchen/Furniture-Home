import React from 'react';
import './header.css';
import Logo from './logo';
import Search from './search';
import User from './user';
import Cart from './cart';

export default (props) =>{
  return (
    <nav className='header'>
      <div className='max-width'>
        <div className='col'>
          <Logo />
        </div>
        <div className='col'>
          <Search />
        </div>
        <div className='col flex-right'>
          <User />
          <Cart />
        </div>
      </div>
    </nav>
  );
}