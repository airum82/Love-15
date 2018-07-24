import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CourtCard } from '../../components/CourtCard/CourtCard';
import { fetchCourts } from '../../actions';

export class CourtsContainer extends Component {
  makeMapKey = (name) => {
    const makeMapKey = this.props.closeCourts.map(court => {
      if(court.name === name) {
        return {...court, map: true};
      }
        return court;
    });
    this.props.handleSubmitCourts(makeMapKey);
  }

  makeCourts = () => {
    let key = 0;
    return this.props.closeCourts.map(court => {
      return (
        <CourtCard
          name={court.name}
          location={court.location}
          makeMapKey={this.makeMapKey}
          key={key++}
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
  closeCourts: PropTypes.array
}

