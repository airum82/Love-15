import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as API from '../../API/APIcall';

class App extends Component {

  async componentDidMount() {
    // API.fetchCoords('Denver CO')
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  closeCourts: state.closeCourts
})

export default connect(mapStateToProps, null)(App);
