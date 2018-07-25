import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAccount } from '../../actions';
import { NavLink } from 'react-router-dom';
import './CreateAccount.css';

export class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      dateOfBirth: ''
    }
  }

  handleDataEntry = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <div className='create-account'>
        <form 
          onChange={this.handleDataEntry}
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleCreateAccount(this.state)
            this.setState({ 
              name: '',
              email: '',
              password: '',
              dateOfBirth: ''
            })
          }}
        >
          <p>Email: </p><input type="email" name="email" value={this.state.email} />
          <p>Name: </p><input type="text" name="name" value={this.state.name} />
          <p>Passworld: </p><input type="password" name="password" value={this.state.password} />
          <p>DOB: </p><input type="text" name="dateOfBirth" value={this.state.dateOfBirth} />
            <button>Create Account</button>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handleCreateAccount: (accountInfo) => dispatch(createAccount(accountInfo))
})

export default connect(null, mapDispatchToProps)(CreateAccount)