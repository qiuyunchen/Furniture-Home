import React from 'react';
import './user.css';
import { DropdownContext, AuthContext } from '../../contexts/contexts';

export default (props) =>{
    const loggedIn = (user) =>{
        return <>
            <span className='wb-greet'>Welcome back!</span>
            <h6 className='header-username'>{user.name}</h6>
        </>
    }

    const loggedOut = 'User';

    return (
        <DropdownContext.Consumer>
            {handleDropdown =>{
                return <div className='user-box'>
                    <div className='user' onMouseOver={handleDropdown}>
                        <AuthContext.Consumer>
                            {user =>{
                                return user? loggedIn(user) : loggedOut;
                            }}
                        </AuthContext.Consumer>
                    </div>
                </div>
            }}
        </DropdownContext.Consumer>
    );
}