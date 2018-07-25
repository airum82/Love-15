import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CourtCard } from '../../components/CourtCard/CourtCard';
import { fetchCourts } from '../../actions';
import { toggleMapKey } from '../../Cleaner/cleaner';

export class CourtsContainer extends Component {

  makeCourts = () => {
    return this.props.closeCourts.map((court, index) => {
      return (
        <CourtCard
          name={court.name}
          location={court.location}
          key={index}
          id={index}
        />
      )
    })
  }

  render() {
    if(this.props.closeCourts.length) {
      return (
        <div className="courts-container">
          {this.makeCourts()}
        </div>
      )
    } else {
      return (
        <div className="courts-container">
        </div>
      )
    }
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
  closeCourts: PropTypes.array,
  handleSubmitCourts: PropTypes.func
}

