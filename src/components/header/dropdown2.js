import React from 'react';
import './dropdown2.css';

export default (props) =>{
    return <div className='dropdown-user-box'>
        <ul className='user-options'>
            <li className='user-list-item'>Login</li>
            <li className='user-list-item'>Logout</li>
            <li className='user-list-item'>Create Account</li>
        </ul>
    </div>;
}