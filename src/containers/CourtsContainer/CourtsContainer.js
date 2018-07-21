import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const CourtsContainer = ({closeCourts}) => {
  let courts;
  if(closeCourts) {
      courts = closeCourts.map(court => {
      return <li>court: {court.name}, address: {court.location}</li>
    })
  }

  return (
    <div className="courts-container">
      <ul>
        {courts}
      </ul>
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

