import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MapContainer from '../googleMap/GoogleMap';
import CourtsContainer from '../CourtsContainer/CourtsContainer';
import PropTypes from 'prop-types';
import CreateAccount from '../CreateAccount/CreateAccount';
import LogIn from '../LogIn/LogIn';
import { Header } from '../Header/Header';
import CourtMapContainer from '../CourtMapContainer/CourtMapContainer';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header-styling">
          <Header />
          <Route exact path = '/logIn' component={LogIn} />
          <Route exact path = '/' render={() => {
            return (
              <div>
                <MapContainer />
                <CourtsContainer />
              </div>
            )} }/>
          <Route path = '/createAccount' component={CreateAccount} />
          <CourtMapContainer />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  closeCourts: state.closeCourts
})

export default withRouter(connect(mapStateToProps, null)(App));

App.propTypes = {
  closeCourts: PropTypes.array
}