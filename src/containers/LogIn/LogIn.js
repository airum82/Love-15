import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, makeUserList, makeFavoritesList } from '../../actions';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { auth, db } from '../../firebase';
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

  signIn = () => {
    return auth.doSignInWithEmailAndPassword(
      this.state.email, this.state.password)
      .then(userAuth => this.props.handleLogIn(this.state.email, userAuth.user.uid))
  }

  grabFavoriteCourts = (id) => {
    db.grabFavoriteCourtsList(id)
      .then(snapshot => snapshot.val())
      .then(courts => Object.keys(courts).map(key =>
        ({ key, ...courts[key] })))
      .then(courtList => this.props.fetchFavoritesList(courtList))
  }

  retrieveUsers = () => {
    db.onceGetUsers().then(snapshot =>
      Object.keys(snapshot.val())
        .map(user => snapshot.val()[user]))
      .then(userList =>
        this.props.fetchUserList(userList))
  }

  render() {
    return (
      <div className="log-in">
        <form 
          onChange={this.handleAccountEntry}
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await this.signIn()
              .then(user => this.grabFavoriteCourts(user.id));
              await this.retrieveUsers();
              this.setState({
                  email: '',
                  password: ''
                })
            }
            catch(error) {
              this.setState({ error: error.message });
            }
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
  handleLogIn: (accountInfo, id) => dispatch(logIn(accountInfo, id)),
  fetchUserList: (userList) => dispatch(makeUserList(userList)),
  fetchFavoritesList: (courtList) => dispatch(makeFavoritesList(courtList))
})

export default connect(null, mapDispatchToProps)(LogIn);

LogIn.propTypes = {
  handleLogIn: PropTypes.func,
  fetchUserList: PropTypes.func,
  fetchFavoritesList: PropTypes.func
}