import React from 'react';
import './signup.css';

export default class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        name: '',
        email: '',
    }

    render(){
        return <div className='signup-box'>
            <h1 className='center-text'>Create An Account</h1>

            <form className='signup-form'>
                <input type='text' className='input row' placeholder='Username'></input>
                <input type='password' className='input row' placeholder='Password'></input>
                <input type='password' className='input row' placeholder='Confirm Password'></input>

                <input type='text' className='input row name-input' placeholder='Name'></input>
                <input type='email' className='input row' placeholder='Email'></input>
                
                <button type="submit" className="submit-btn" onClick={this.handleSubmit}>Create Account</button>
            </form>
        </div>
    }
}