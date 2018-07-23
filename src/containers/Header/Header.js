import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/love-15-logo2.png';
import './Header.css';


export const Header = (props) => {
  return (
    <NavLink to='/' style={{ textDecoration: 'none' }}>
      <div className="header">
        <img src={logo} className="logo"/>
        <h3>It's time to rally!</h3>
      </div>
    </NavLink>
  )
}