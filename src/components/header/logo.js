import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/home_logo.png';
import './logo.css';
import { DropdownContext } from '../../contexts/contexts';

export default (props) =>{
  const dropdownCateg = () =>{
    // return (<>
    //   <div className='dropdown-categ'>
    //     Categories
    //   </div>
    // </>);
  }

  return (
    <>
      <div className='shop-logo'>
        <div>
          <Link to='/'>
            <img className='logo-img' title='Go to home page' src={logoImg} alt='shop-logo'></img>
          </Link>
        </div>

        <div className='shop-name'>
          <h5>Home Comfort & Beyond </h5>
        </div>

        <div className='shop-slogan'>
          Where your 
          <DropdownContext.Consumer>
            {handleDropdown =>{
              return <strong className='dream-home' onMouseOver={handleDropdown}> dream home </strong>
            }}
          </DropdownContext.Consumer>
          awaits 💕
        </div>
      </div>
    </>
  );
}