import React from 'react';
import firebase from '../firebase';
import './signup.css';

export default class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        confirmedPw: '',
        name: '',
        email: '',
        error: '',
        userInfo: {},
    }

    handleChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e =>{
        e.preventDefault();
        const {username, password, confirmedPw, name, email} = this.state;

        if(!username || !password || !confirmedPw || !name){
            this.setState({error: 'Please fill out all the missing information.'})
        } else if(password !== confirmedPw){
            this.setState({error: 'Your password confirmation is not the same as your password.'});
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res =>{
                const {username, password, name} = this.state;
                res.username = username;
                res.password = password;
                res.name = name;
                // {username, password, name, email, uid: res.uid},
                this.setState({
                    username: '',
                    password: '',
                    confirmedPw: '',
                    name: '',
                    email: '',
                    error: '',
                    userInfo: res,
                }, () =>{
                    console.log(this.state.userInfo);
                });
            })
            .catch(e => {
                this.setState({error: e.message+'.'});
            });
        }
    }
    
    componentDidMount(){
        this.unsubscribe = firebase.auth().onAuthStateChanged( user =>{
            if (user){
                // console.log(this.state.userInfo.username);
                // console.log(this.props);
                // this.props.history.push(`/profile/${this.state.userInfo.username}`);
            } else {
                console.log('user not logged in');
            }
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render(){
        const {username, password, confirmedPw, name, email, error} = this.state;
        const displayError = error ? <div className="alert alert-danger signup-err-alert" role="alert">{error}</div> : '';
        
        return <div className='signup-box'>
            <h1 className='center-text'>Create An Account</h1>

            {displayError}
            <form className='signup-form'>
                <input type='text' className='input row' onChange={this.handleChange} name='username' placeholder='Username' value={username}></input>
                <input type='password' className='input row' onChange={this.handleChange} name='password' placeholder='Password' value={password}></input>
                <input type='password' className='input row' onChange={this.handleChange} name='confirmedPw' placeholder='Confirm Password' value={confirmedPw}></input>

                <input type='text' className='input row name-input' onChange={this.handleChange} name='name' placeholder='Name' value={name}></input>
                <input type='email' className='input row' onChange={this.handleChange} name='email' placeholder='Email' value={email}></input>
                
                <button type="submit" className="submit-btn" onClick={this.handleSubmit}>Create Account</button>
            </form>
        </div>
    }
}