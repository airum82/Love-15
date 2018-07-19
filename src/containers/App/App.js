import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  closeCourts: state.closeCourts
}

export default connect(mapStateToProps, null)(App);
