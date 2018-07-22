import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import PropTypes from 'prop-types';

export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
          }}
        >
          <input type="email" name="email" />
          <input type="password" name="password" />
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handleLogIn: (accountInfo) => dispatch(logIn(accountInfo))
})

export default connect(null, mapDispatchToProps)(LogIn);