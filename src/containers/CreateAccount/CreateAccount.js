import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAccount } from '../../actions';

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
            this.props.handleCreateAccount(this.state)}
          }
        >
          <input type="email" name="email" />
          <input type="text" name="name" />
          <input type="password" name="password" />
          <input type="text" name="dateOfBirth" />
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