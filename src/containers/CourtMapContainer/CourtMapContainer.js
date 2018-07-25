import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CourtCard } from '../../components/CourtCard/CourtCard';
import { Route, NavLink } from 'react-router-dom';
import { fetchCourts } from '../../actions';

export class CourtMapContainer extends Component {
  removeMapKey = (name) => {
    return this.props.closeCourts.map(court => {
      if(court.name === name) {
        return {...court, map: false}
      }
      return court
    })
  }
  render() {
    if(this.props.court) {
      const { name, location } = this.props.court;
      return (
        <Route exact path={`/${name}`} render={() => {
          return (
            <div>
              <CourtCard
              name={name}
              location={location}
              makeMapKey={() => {}}
              />
              <NavLink to='/' >
                <button onClick={() => {
                  const newCourts = this.removeMapKey(name)
                  this.props.handleRemoveMapKey(newCourts)
                }}>Back</button>
              </NavLink>
            </div>
          )
        }} />
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  //court: state.closeCourts.find(court => court.map),
  closeCourts: state.closeCourts
})

export const mapDispatchToProps = (dispatch) => ({
  handleRemoveMapKey: (courts) => dispatch(fetchCourts(courts))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourtMapContainer);