import React from 'react';
import cartImg from '../assets/cart.png';
import './cart.css';

export default (props) =>{
    return (
        <div className='cart-box'>
            <img className='cart-img' src={cartImg} alt='cart'></img>
        </div>
    );
}