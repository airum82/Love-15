import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './LogIn.css'

export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleAccountEntry = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="log-in">
        <form 
          onChange={this.handleAccountEntry}
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleLogIn(this.state);
            this.setState({
              email: '',
              password: ''
            })
          }}
        >
          <p>Email:</p> <input type="email" name="email" value={this.state.email}/>
          <p className="password">Password:</p> <input type="password" name="password" value={this.state.password}/>
          <button>Log In</button>
        </form>
        <NavLink to='/createAccount' style={{ textDecoration: 'none', color: '#3B3738' }}>
          Don't have an account? create one!
        </NavLink>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handleLogIn: (accountInfo) => dispatch(logIn(accountInfo))
})

export default connect(null, mapDispatchToProps)(LogIn);

LogIn.propTypes = {
  handleLogIn: PropTypes.func
}