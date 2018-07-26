import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import logo from '../../images/Love-15-logo.png';
import { logOut } from '../../actions';
import './Header.css';
import { connect } from 'react-redux';


export const Header = (props) => {
  return (
    <div className="header">
      <header>
      {props.account.email ? '' :
        <div className="log-in-button">
          <NavLink to='/logIn'>
            <button>Log In</button>
          </NavLink>
          <NavLink to='/createAccount' className="create">
            <button>Create Account</button>
          </NavLink>
        </div>
      }
      {props.account.email ? 
        <div className= "welcome">
          <p>Welcome {props.account.email}</p>
          <button onClick={props.handleLogOut}>Log Out</button>
        </div> 
      : ''}
      </header>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <img src={logo} className="logo"/>
        <h3>It's time to rally!</h3>
      </NavLink>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  account: state.account
})

export const mapDispatchToProps = (dispatch) => ({
  handleLogOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);