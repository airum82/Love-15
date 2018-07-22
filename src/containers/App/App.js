import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MapContainer from '../googleMap/GoogleMap';
import CourtsContainer from '../CourtsContainer/CourtsContainer';
import PropTypes from 'prop-types';
import CreateAccount from '../CreateAccount/CreateAccount';
import LogIn from '../LogIn/LogIn';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <NavLink to='/'>
          <h1>Love-15</h1>
          <h3>It's time to rally!</h3>
        </NavLink>
        <Route exact path = '/' component={LogIn} />
        <Route exact path = '/' component={MapContainer} />
        <Route exact path = '/' component={CourtsContainer} />
        <Route path = '/createAccount' component={CreateAccount} />
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