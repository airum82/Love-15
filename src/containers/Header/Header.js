import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import logo from '../../images/love-15-logo2.png';
import './Header.css';


export const Header = (props) => {
  return (
    <div className="header">
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <img src={logo} className="logo"/>
        <h3>It's time to rally!</h3>
      </NavLink>
      <NavLink to='/logIn'>
        <Route exact path='/' render={() => <button>Log In</button>} />
      </NavLink>
      </div>
  )
}