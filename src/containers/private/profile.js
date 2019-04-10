import React from 'react';
import firebase from '../../firebase';
import './profile.css';

export default class Profile extends React.Component {
    state = {
        user: null,
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { user } = this.state;

        if (user) {
            return <>
                <div className='profile-box'>
                    <h1 className='text-center'>{user.email} Profile</h1>
                    <h4>Login Credentials</h4>
                    <form>
                        <div className='form-group form-row'>
                            <label for='staticEmail' className='col-sm-2 col-form-label'>Username</label>
                            <div className='col-sm-10'>
                                <input type='text' readonly className='form-control-plaintext' value={user.email} />
                            </div>
                        </div>
                        <div className='form-group form-row'>
                            <label for='staticEmail' className='col-sm-2 col-form-label'>Email</label>
                            <div className='col-sm-10'>
                                <input type='text' readonly className='form-control-plaintext' value={user.email} />
                            </div>
                        </div>
                        <div className='form-group form-row'>
                            <label for='inputPassword' className='col-sm-2 col-form-label'>Password</label>
                            <div className='col-sm-10'>
                                <input type='password' className='form-control' placeholder='Password' />
                            </div>
                        </div>
                    </form>

                    <h4>Update your information to make checkout faster!</h4>
                    <form>
                        <input type='text' className='input row' placeholder='Name' />
                        <input type='text' className='input row' placeholder='Phone #' />
                    </form>

                    <h4>Ship to:</h4>
                    <form>
                        <div className='form-row'>
                            <div className='col'>
                                <input type='text' className='form-control' placeholder='Address' />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-7'>
                                <input type='text' className='form-control' placeholder='City' />
                            </div>
                            <div className='col'>
                                <input type='text' className='form-control' placeholder='State' />
                            </div>
                            <div className='col'>
                                <input type='text' className='form-control' placeholder='Zip' />
                            </div>
                        </div>
                    </form>

                    <h4>Payment Method</h4>
                    <form>
                        <div className='form-row'>
                            <input type='text' className='form-control' pattern='\w+ \w+.*' title='First and last name' required='' placeHolder="Card Holder's Name" />
                        </div>
                      
                        <div className='form-row'>
                            <div className='col'>
                                <input type='text' className='form-control' autocomplete='off' maxlength='4' pattern='\d{4}' title='First four digits' required='' placeHolder='####' />
                            </div>
                            <div className='col'>
                                <input type='text' className='form-control' autocomplete='off' maxlength='4' pattern='\d{4}' title='Second four digits' required='' placeHolder='####' />
                            </div>
                            <div className='col'>
                                <input type='text' className='form-control' autocomplete='off' maxlength='4' pattern='\d{4}' title='Third four digits' required='' placeHolder='####' />
                            </div>
                            <div className='col'>
                                <input type='text' className='form-control' autocomplete='off' maxlength='4' pattern='\d{4}' title='Fourth four digits' required='' placeHolder='####' />
                            </div>
                        </div>

                        <div className='form-row'>
                            <div className='col-md-5'>
                                <input type='text' className='form-control' autocomplete='off' maxlength='3' pattern='\d{3}' title='Three digits at back of your card' placeHolder='security code' required='' />
                            </div>
                            
                            <div className='col-md-4'>
                                <select className='form-control' name='cc_exp_mo'>
                                    <option value='01'>January</option>
                                    <option value='02'>February</option>
                                    <option value='03'>March</option>
                                    <option value='04'>April</option>
                                    <option value='05'>May</option>
                                    <option value='06'>June</option>
                                    <option value='07'>July</option>
                                    <option value='08'>August</option>
                                    <option value='09'>September</option>
                                    <option value='10'>October</option>
                                    <option value='11'>November</option>
                                    <option value='12'>December</option>
                                </select>
                            </div>
                            <div className='col-md-3'>
                                <select className='form-control' name='cc_exp_yr'>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                </select>
                            </div>
                        </div>

                        <div className='form-row'>
                            <button type='submit' className='btn btn-danger'>Edit</button>
                            <button type='button' className='btn btn-primary'>Save</button>
                        </div>

                    </form>
                </div>
            </>
        } else {
            return <>
                <h1 classNameName='text-center'>You are not logged in.</h1>
            </>
        }
    }
}