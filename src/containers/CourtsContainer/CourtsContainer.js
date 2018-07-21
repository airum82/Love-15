import React from 'react';
import { connect } from 'react-redux';

export const CourtsContainer = (props) => {
  let courts;
  if(props.closeCourts) {
      courts = props.closeCourts.map(court => {
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

