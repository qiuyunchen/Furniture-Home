import React from 'react';
import './search.css';

export default (props)=>{
    return (
        <div className='srch-box'>
            <div className='full-width'><input className='srch-bar' type='text' placeholder='Search...'></input></div>
        </div>
    );
}