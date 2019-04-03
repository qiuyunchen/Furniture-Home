import React from 'react';
import './user.css';
import { DropdownContext } from '../../contexts/contexts';

export default (props) =>{
    return (
        <DropdownContext.Consumer>
            {handleDropdown =>{
                return <div className='user-box'>
                    <div className='user' onMouseOver={handleDropdown}>user</div>
                </div>
            }}
        </DropdownContext.Consumer>
    );
}