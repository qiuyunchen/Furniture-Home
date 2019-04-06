import React from 'react';
import firebase from '../firebase';
import './signin.css';

export default class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res =>{
                this.setState({email: '', password: '', error: ''});
            })
            .catch(e =>{
                this.setState({error: e.message});
            })
    }

    render(){
        const {email, password, error} = this.state;
        const displayError = error ? <div className="alert alert-danger signin-err-alert" role="alert">{error}</div> : '';

        return <div className='signin-box'>
        <h1 className='center-text'>Account Login</h1>

        {displayError}
        <form className='signin-form'>
            <input type='text' className='input row' onChange={this.handleChange} name='email' placeholder='Email' value={email}></input>
            <input type='password' className='input row' onChange={this.handleChange} name='password' placeholder='Password' value={password}></input>
            
            <button type="submit" className="submit-btn" onClick={this.handleSubmit}>Log In</button>
        </form>
    </div>
    }
}