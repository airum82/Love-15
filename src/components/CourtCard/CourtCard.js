import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './CourtCard.css';

export const CourtCard = ({name, location, id}) => {
  return (
    <div className="court-card">
      <h2>{name}</h2>
      <NavLink to={`/court/${id}`}>
        <p>{location}</p>
      </NavLink>
    </div>
  )
}