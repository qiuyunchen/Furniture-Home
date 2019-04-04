import React from 'react';
import './dropdown2.css';
import { AuthContext } from '../../contexts/contexts';
import {Link} from 'react-router-dom';

export default (props) =>{
    const loggedIn = <>
        {['Profile', 'Orders', 'Store'].map( (e,i) =>{
            return <li className='user-list-item' key={i}>{e}</li>
        })}
        <button type='button' className='logout-btn'>Log Out</button>
    </>

    const notLoggedIn = <>
        <Link  className='link' to='/login'>
            <li className='user-list-item'>Login</li>
        </Link>
        <li className='user-list-item new-text'>New?</li>
        <Link to='/signup'>
            <button type='button' className='signup-btn'>Create Account</button>
        </Link>
    </>

    return <div className='dropdown-user-box'>
        <ul className='user-options'>
            <AuthContext.Consumer>
                {user =>{
                    return user ? loggedIn : notLoggedIn;
                }}
            </AuthContext.Consumer>
        </ul>
    </div>;
}