import React from 'react';
import './dropdown2.css';
import { AuthContext } from '../../contexts/contexts';

export default (props) =>{
    const loggedIn = <>
        {['Profile', 'Orders', 'Store'].map( (e,i) =>{
            return <li className='user-list-item' key={i}>{e}</li>
        })}
        <button type='button' className='logout-btn'>Log Out</button>
    </>

    const notLoggedIn = <>
        <li className='user-list-item'>Login</li>
        <li className='user-list-item new-text'>New?</li>
        <button type='button' className='signup-btn'>Create Account</button>
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