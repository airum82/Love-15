import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MapContainer from '../googleMap/GoogleMap';
import CourtsContainer from '../CourtsContainer/CourtsContainer';
import PropTypes from 'prop-types';
import CreateAccount from '../CreateAccount/CreateAccount';
import LogIn from '../LogIn/LogIn';
import Header from '../Header/Header';
import { CourtCard } from '../../components/CourtCard/CourtCard';
import CourtMap from '../../components/CourtMap/CourtMap';
import UserList from '../UserList/UserList';
import { firebase, db } from '../../firebase';
import { fetchAccount, makeUserList } from '../../actions';

export class App extends Component {

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if(authUser) {
        const { email } = authUser;
        this.props.fetchUser(email);
        db.onceGetUsers().then(snapshot => 
          Object.keys(snapshot.val())
          .map(user => snapshot.val()[user]))
          .then(userList => 
            this.props.fetchUserList(userList))
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header-styling">
          <Header />
          <Route exact path = '/logIn' component={LogIn} />
          <Route exact path = '/UserList' component={UserList} />
          <Route exact path = '/' render={() => {
            return (
              <div>
                <MapContainer />
                <CourtsContainer />
              </div>
            )} }/>
          <Route path = '/createAccount' component={CreateAccount} />
          <Route path='/court/:id' render={({ match }) => {
            const court = this.props.closeCourts.find( court => {
              return court.id === parseInt(match.params.id)
            })
            return (
              <div className="court-with-map">
                <CourtCard
                  name={court.name}
                  location={court.location}
                  id={court.id}
                />
                <NavLink to='/' >
                  <button className="back-button">back</button>
                </NavLink>
                <CourtMap
                  coord={court.coord}
                />
              </div>
            )}}
          />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  closeCourts: state.closeCourts,
  account: state.account
})

export const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(fetchAccount(user)),
  fetchUserList: userList => dispatch(makeUserList(userList))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  closeCourts: PropTypes.array,
  account: PropTypes.object,
  fetchUser: PropTypes.func
}