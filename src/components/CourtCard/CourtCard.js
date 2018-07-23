import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export const CourtCard = (props) => {
  return (
    <div className="court-card">
      <h2>{props.name}</h2>
        <p onClick={() => console.log('fire')}>{props.location}</p>
    </div>
  )
}