import React from 'react';
import {DropdownContext} from '../../contexts/contexts';
import './search.css';

export default class Search extends React.Component {
    state = {
        searchTerm: '',
    }

    handleChange = e =>{
        this.setState({
            searchTerm: e.target.value,
        })
    }

    handleEnter = e =>{
        if (e.key === 'Enter'){
            const {searchTerm} = this.state
            this.setState({searchTerm: ''}, () => {
                this.props.history.push('/search/' + searchTerm);
            });
        }
    }

    render(){
        return (
            <DropdownContext.Consumer>
                {handleDropdown =>{
                    return <div className='srch-box' onMouseOver={handleDropdown}>
                        <div className='full-width'>
                            <input className='srch-bar' 
                                onChange={this.handleChange}
                                onKeyDown={this.handleEnter}
                                type='text' 
                                value={this.state.searchTerm}
                                placeholder='Search...'>
                            </input>
                        </div>
                    </div>
                }}
            </DropdownContext.Consumer>
        );
    }
}