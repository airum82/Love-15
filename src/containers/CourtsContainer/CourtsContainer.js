import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { CourtCard } from '../../components/CourtCard/CourtCard';

export const CourtsContainer = ({closeCourts}) => {
  let courts;
  if(closeCourts) {
      courts = closeCourts.map(court => {
      return (
        <CourtCard
         name={court.name}
         location={court.location}
        />
      )
    })
  }

  return (
    <div className="courts-container">
      {courts}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  closeCourts: state.closeCourts
})

export default connect(mapStateToProps)(CourtsContainer)

CourtsContainer.propTypes = {
  closeCourts: PropTypes.array
}

