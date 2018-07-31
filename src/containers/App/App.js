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
import { fetchAccount, makeUserList, makeFavoritesList } from '../../actions';

export class App extends Component {

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if(authUser) {
        const { email, uid } = authUser;
        this.props.fetchUser(email, uid);
        db.checkForFavorites(uid)
          .then(result => {
            if(result) {
              db.grabFavoriteCourtsList(uid)
                .then(snapshot => snapshot.val())
                .then(courts => Object.keys(courts).map(key =>
                  ({ key, ...courts[key] })))
                .then(courtList => this.props.fetchFavoriteCourtList(courtList))
              }
            });
        }
        db.onceGetUsers().then(snapshot => 
          Object.keys(snapshot.val())
          .map(user => snapshot.val()[user]))
          .then(userList => 
            this.props.fetchUserList(userList))
      }
    );
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
          <Route path = '/favorites' component={CourtsContainer} />
          <Route path='/court/:id' render={({ match, history }) => {
            const court = this.props.closeCourts.find( court => {
              return court.id === parseInt(match.params.id)
            }) || this.props.favorites.find( court => {
              return court.id === parseInt(match.params.id)
            })
            return (
              <div className="court-with-map">
                <CourtsContainer selectedCourt={[court]} />
                  <button className="back-button" onClick={this.props.history.goBack}>
                    back
                  </button>
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
  account: state.account,
  favorites: state.favorites
})

export const mapDispatchToProps = dispatch => ({
  fetchUser: (user, uid) => dispatch(fetchAccount(user, uid)),
  fetchUserList: userList => dispatch(makeUserList(userList)),
  fetchFavoriteCourtList: courtList => dispatch(makeFavoritesList(courtList))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  closeCourts: PropTypes.array,
  account: PropTypes.object,
  fetchUser: PropTypes.func
}