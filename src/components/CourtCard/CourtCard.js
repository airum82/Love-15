import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './CourtCard.css';

export const CourtCard = ({name, location, id, addFavoriteCourt, account }) => {
  const court = {
    name,
    location
  }
  return (
    <div className="court-card">
      <h2>{name}</h2>
      <NavLink to={`/court/${id}`}>
        <p>{location}</p>
      </NavLink>
      <button onClick={() => addFavoriteCourt(account.id, court)}>
        add to favorites
      </button>
    </div>
  )
}