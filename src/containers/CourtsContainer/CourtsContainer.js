import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CourtCard } from '../../components/CourtCard/CourtCard';
import { fetchCourts } from '../../actions';

export const CourtsContainer = ({closeCourts, handleSubmitCourts}) => {
  const makeMapKey = (name) => {
    const makeMapKey = closeCourts.map(court => {
      if(court.name === name) {
        return {...court, map: true};
      }
        return court;
    });
    handleSubmitCourts(makeMapKey);
  }
  if(closeCourts.length) {
    let key = 0;
    const courts = closeCourts.map(court => {
    return (
      <CourtCard
       name={court.name}
       location={court.location}
       makeMapKey={makeMapKey}
       key={key++}
      />
    )
  })
    return (
      <div className="courts-container">
        {courts}
      </div>
    )
  } else {
    return (
      <div className="courts-container">
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  closeCourts: state.closeCourts
})

export const mapDispatchToProps = (dispatch) => ({
  handleSubmitCourts: (courts) => dispatch(fetchCourts(courts))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourtsContainer)

CourtsContainer.propTypes = {
  closeCourts: PropTypes.array
}

