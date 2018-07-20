import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MapContainer from '../googleMap/GoogleMap';
import * as API from '../../API/APIcall';
import GoogleMap from '../googleMap/GoogleMap';

class App extends Component {

  async componentDidMount() {
  }
  render() {
    return (
      <div className="App">
        <MapContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  closeCourts: state.closeCourts
})

export default connect(mapStateToProps, null)(App);
