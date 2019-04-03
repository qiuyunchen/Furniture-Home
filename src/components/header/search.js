import React from 'react';
import './search.css';
import {SearchContext, handleDropdown, DropdownContext} from '../../contexts/contexts';

export default (props)=>{

    return (
        <DropdownContext.Consumer>
            {handleDropdown =>{
                return <div className='srch-box' onMouseOver={handleDropdown}>
                    <div className='full-width'>
                    <SearchContext.Consumer>
                        {handleSearch =>{
                            return <input className='srch-bar' 
                                onChange={handleSearch}
                                type='text' 
                                placeholder='Search...'>
                            </input>
                        }}
                    </SearchContext.Consumer>
                    </div>
                </div>
            }}
        </DropdownContext.Consumer>
    );
}