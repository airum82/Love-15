import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Love-15-logo.png';
import { logOut, clearUserList } from '../../actions';
import './Header.css';
import { connect } from 'react-redux';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';


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
          <button onClick={() => {
            auth.doSignOut()
              .then(signOut => props.handleLogOut())
              .then(signOut => props.clearUserList())
            }}>Log Out</button>
            <NavLink to='/UserList'>
              <button>View Users</button>
            </NavLink>
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
  handleLogOut: () => dispatch(logOut()),
  clearUserList: () => dispatch(clearUserList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  account: PropTypes.object,
  handleLogOut: PropTypes.func
}