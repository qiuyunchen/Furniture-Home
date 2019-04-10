import React from 'react';
import {Redirect} from 'react-router-dom';
import {DropdownContext} from '../../contexts/contexts';
import './search.css';

export default class Search extends React.Component {
    state = {
        searchTerm: '',
        redirect: '',
    }

    handleSearch = e =>{
        this.setState({
            searchTerm: e.target.value,
            redirect: false,
        })
    }

    handleEnter = e =>{
        if (e.key === 'Enter'){
            this.setState({redirect: true});
        }
    }

    render(){
        const {searchTerm, redirect} = this.state;

        if (redirect){
            return <Redirect to={'/search/' + searchTerm}></Redirect>
        } else {
            return (
                <DropdownContext.Consumer>
                    {handleDropdown =>{
                        return <div className='srch-box' onMouseOver={handleDropdown}>
                            <div className='full-width'>
                                <input className='srch-bar' 
                                    onChange={this.handleSearch}
                                    onKeyDown={this.handleEnter}
                                    type='text' 
                                    placeholder='Search...'>
                                </input>
                            </div>
                        </div>
                    }}
                </DropdownContext.Consumer>
            );
        }
    }
}