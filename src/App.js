import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
//import firebase from './firebase';

import {AuthContext, SearchContext, DropdownContext, DropdownwhatContext, MouseoutContext} from './contexts/contexts';
import Header from './components/header/header';
import Home from './containers/home';
import SearchResult from './containers/searchresult';
import './App.css';

class App extends Component {
  state = {
    user: null,
    search: '',
    dropdown: 0,
  }

  handleSearch = (e) =>{
    this.setState({search: e.target.value})
  }

  handleDropdown = e =>{
    console.log(e.target.classList);
    if (e.target.classList[0] === 'srch-box'){
      this.setState({dropdown: 0});
    }
    if (e.target.classList[0] === 'dream-home'){
      this.setState({dropdown: 1});
    }
    if (e.target.classList[0] === 'user'){
      this.setState({dropdown: 2});
    }
  }

  handleMouseOut = e =>{
    console.log(e.target);
    this.setState({dropdown: 0});
  }

  render() {
    return (
      <HashRouter>
        <MouseoutContext.Provider value={this.handleMouseOut}>
        <DropdownwhatContext.Provider value={this.state.dropdown}>
        <DropdownContext.Provider value={this.handleDropdown}>
        <SearchContext.Provider value={this.handleSearch}>
        <AuthContext.Provider value={this.state.user}>
          <Route path='/' component={Header} />
        </AuthContext.Provider>
        </SearchContext.Provider>
        </DropdownContext.Provider>
        </DropdownwhatContext.Provider>
        </MouseoutContext.Provider>

        <Route path='/home' exact component={Home} />
        <Route path='/search/:srch' exact component={SearchResult} />
      </HashRouter>
        
    );
  }
}

export default App;
