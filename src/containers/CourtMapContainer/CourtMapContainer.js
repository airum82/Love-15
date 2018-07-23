import React from 'react';
import { connect } from 'react-redux';
import { CourtCard } from '../../components/CourtCard/CourtCard';
import { Route, NavLink } from 'react-router-dom';
import { fetchCourts } from '../../actions';

export const CourtMapContainer = ({court, closeCourts, handleRemoveMapKey}) => {
  const removeMapKey = (name) => {
    return closeCourts.map(court => {
      if(court.name === name) {
        return {...court, map: false}
      }
      return court
    })
  }
  if(court) {
    return (
      <Route exact path={`/${court.name}`} render={() => {
        return (
          <div>
            <CourtCard
             name={court.name}
             location={court.location}
             makeMapKey={() => {}}
            />
            <NavLink to='/' >
              <button onClick={() => {
                handleRemoveMapKey(removeMapKey(court.name))
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

export const mapStateToProps = (state) => ({
  court: state.closeCourts.find(court => court.map),
  closeCourts: state.closeCourts
})

export const mapDispatchToProps = (dispatch) => ({
  handleRemoveMapKey: (courts) => dispatch(fetchCourts(courts))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourtMapContainer);