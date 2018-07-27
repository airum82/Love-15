import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAccount } from '../../actions';
import { withRouter } from 'react-router-dom';
import './CreateAccount.css';
import { auth } from '../../firebase';

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

  resetState = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
      dateOfBirth: ''
    })
  }

  render() {
    return (
      <div className='create-account'>
        <form 
          onChange={this.handleDataEntry}
          onSubmit={(e) => {
            auth.doCreateUserWithEmailAndPassword(
              this.state.email,this.state.password)
              .then(authUser => this.props.handleCreateAccount(this.state))
              .catch(error => this.setState({ error: error.message }))
            this.resetState();
            e.preventDefault();
            this.props.history.push('/');
            console.log(this.state)
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

export default withRouter(connect(null, mapDispatchToProps)(CreateAccount));