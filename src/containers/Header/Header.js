import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import logo from '../../images/love-15-logo2.png';
import { logOut } from '../../actions';
import './Header.css';
import { connect } from 'react-redux';


export const Header = (props) => {
  return (
    <div className="header">
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <img src={logo} className="logo"/>
        <h3>It's time to rally!</h3>
      </NavLink>
      <NavLink to='/logIn'>
        {!props.account.email ? 
          <Route exact path='/' render={
            () => <button>Log In</button>} /> : ''
        }
      </NavLink>
      {props.account.email ? 
        <div>
          <p>Welcome {props.account.email}</p>
          <button onClick={props.handleLogOut}>Log Out</button>
        </div> 
      : ''}
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