import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export const CourtCard = ({name, location, makeMapKey}) => {
  return (
    <div className="court-card">
      <h2>{name}</h2>
      <NavLink to={`/${name}`}>
        <p onClick={() => makeMapKey(name)}>{location}</p>
      </NavLink>
    </div>
  )
}