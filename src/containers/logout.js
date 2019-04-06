import React from 'react';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';

export default class Logout extends React.Component {

  componentDidMount() {
    firebase.auth().signOut()
  }

  render() {
    const redirect = () =>{
        setTimeout(() => {
            return this.props.history.push('/');
        }, 2000);
    }
    return <>
    <h1 className='text-center'>Logging out...</h1>
    <h2 className='text-center'>
        Redirecting to home page in 2 seconds.
    </h2>
    {redirect()}
    </>
  }
}