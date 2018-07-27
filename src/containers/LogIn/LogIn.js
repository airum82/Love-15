import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase';
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
            auth.doSignInWithEmailAndPassword(
              this.state.email, this.state.password)
              .then(userAuth => this.props.handleLogIn(this.state))
              .then(userData => this.setState({
                email: '',
                password: ''
              }))
              .catch(error => this.setState({ error : error.message }))
            e.preventDefault();
          }}
        >
          <p>Email:</p><input type="email" name="email" value={this.state.email}/>
          <p>Password:</p><input type="password" name="password" value={this.state.password}/>
          <button>Log In</button>
        </form>
        <NavLink className="create-link" to='/createAccount'>
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