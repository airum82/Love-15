import React from 'react';
import { NavLink } from 'react-router-dom';

export const CourtCard = (props) => {
  return (
    <div className="court-card">
      <h2>{props.name}</h2>
      <NavLink to={`/${props.name}`}>
        <p>{props.location}</p>
      </NavLink>
    </div>
  )
}