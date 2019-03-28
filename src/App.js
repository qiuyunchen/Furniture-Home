import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
//import firebase from './firebase';

import AuthContext from './contexts/auth';
import Header from './components/header';
import './App.css';

class App extends Component {
  state = {user: null}

  render() {
    return (
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <Route path='/' component={Header} />
        </AuthContext.Provider>
      </HashRouter>
        

    );
  }
}

export default App;
