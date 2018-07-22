import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MapContainer from '../googleMap/GoogleMap';
import CourtsContainer from '../CourtsContainer/CourtsContainer';
import PropTypes from 'prop-types';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Love-15</h1>
        <h3>It's time to rally!</h3>
        <MapContainer />
        <CourtsContainer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  closeCourts: state.closeCourts
})

export default connect(mapStateToProps, null)(App);

App.propTypes = {
  closeCourts: PropTypes.array
}