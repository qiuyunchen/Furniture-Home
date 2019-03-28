import React from 'react';
import AuthContext from '../contexts/auth';
import logo from '../assets/home_logo.png';
import './header.css';

export default (props) => {
  // const loggedOut = <><li className="nav-item">
  //     <Link className="nav-link" to="/signup">Sign Up</Link>
  //   </li>
  //   <li className="nav-item">
  //     <Link className="nav-link" to="/login">Login</Link>
  //   </li></>

  // const loggedIn = <><li className="nav-item">
  //     <Link className="nav-link" to="/logout">Logout</Link>
  //   </li></>

  // return(
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //     <Link className="navbar-brand" to="/">Authentication</Link>
  //     <ul className="navbar-nav">
  //       <li className="nav-item">
  //         <Link className="nav-link" to="/">Home</Link>
  //       </li>
  //       <AuthContext.Consumer>
  //         {
  //           user => {
  //             if (user) return loggedIn
  //             else return loggedOut
  //           }
  //         }
  //       </AuthContext.Consumer>
  //     </ul>
  //   </nav>
  // )

  return (
    <nav className='header'>
      <div className='left-box'>
        <div>
          <img className='logo' src={logo} alt='home-logo'></img>
        </div>

        <div className='shop-name-box'>
          <h4>Home Comfort & Beyond</h4>
          <h16 className='brand'>Where your home dreams come true</h16>
        </div>

        <div className='srch-box'>
          <input className='srch-bar' type='text' placeholder='Search...'></input>
        </div>
      </div>
      
      <div className='right-box'>
        <div className='user-access-box'>
          <div className='circle'>
            user
          </div>
        </div>

        <div className='cart-box'>
          cart img
        </div>
      </div>

    </nav>
  );
}