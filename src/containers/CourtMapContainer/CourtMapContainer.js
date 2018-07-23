import React from 'react';
import { connect } from 'react-redux';
import { CourtCard } from '../../components/CourtCard/CourtCard';
import { Route, NavLink } from 'react-router-dom';

export const CourtMapContainer = ({court}) => {
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
              <button>Back</button>
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
  court: state.closeCourts.find(court => court.map)
})

export default connect(mapStateToProps)(CourtMapContainer);