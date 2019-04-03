import React from 'react';
import './header.css';
import Logo from './logo';
import Search from './search';
import User from './user';
import Cart from './cart';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import { DropdownwhatContext, DropdownContext } from '../../contexts/contexts';

export default (props) =>{
  return (
    <nav className='header'>
      <div className='max-width'>
        <div className='col'>
          <Logo />
        </div>

        <div className='col srch-div'>
          <Search />
        </div>

        <div className='col flex-right'>
          <User />
          <Cart />
        </div>

      </div>
      <DropdownwhatContext.Consumer>
        {value => {
          if (value === 0) return null;
          if (value === 1) return <Dropdown1 />;
          if (value === 2) return <Dropdown2 />;
        }}
      </DropdownwhatContext.Consumer>
    </nav>
  );
}