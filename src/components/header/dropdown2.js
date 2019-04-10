import React from 'react';
import './dropdown2.css';
import { AuthContext } from '../../contexts/contexts';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';

export default (props) =>{
    const loggedIn = <AuthContext.Consumer>
        {user =>{
            return <>
                <Link className='link user-list-item' to={`/${user.name}/profile`}>
                    <li>Profile</li>
                </Link>

                <Link className='link user-list-item' to={`/${user.name}/orders`}>
                    <li>Orders</li>
                </Link>

                <Link className='link user-list-item' to={`/${user.name}/store`}>
                    <li>Store</li>
                </Link>

                <Link className='link' to='/logout'>
                    <button type='button' className='logout-btn'>Log Out</button>
                </Link>
            </>
        }}
    </AuthContext.Consumer>


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