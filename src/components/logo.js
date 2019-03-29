import React from 'react';
import logoImg from '../assets/home_logo.png';
import './logo.css';

export default (props) =>{
  return (
    <div className='shop-logo'>
      <div>
        <img className='logo-img' src={logoImg} alt='shop-logo'></img>
      </div>
      <div className='shop-name'>
        <h5>Home Comfort & Beyond </h5>
      </div>
      <div className='shop-slogan'>
        Where your 
        <strong className='dream-home'> dream home </strong> 
        awaits 💕
      </div>
    </div>
  );
}