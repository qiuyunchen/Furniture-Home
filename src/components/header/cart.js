import React from 'react';
import cartImg from '../../assets/cart.png';
import {Link} from 'react-router-dom';
import './cart.css';

export default (props) =>{
    return (
        <div className='cart-box'>
            <Link to='/:username/cart'>
                <img className='cart-img' src={cartImg} alt='cart'></img>
            </Link>
        </div>
    );
}