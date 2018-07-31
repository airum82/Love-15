import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './CourtCard.css';

export const CourtCard = (
  {name, 
   location,
   id,
   court,
   addFavoriteCourt,
   account,
   removeFromFavorites,
   isFavorite,
   handleFavorite,
   db }
) => {

  return (
    <NavLink to={`/court/${id}`} className="map-link">
      <div className="court-card">
        <h2>{name}</h2>
        <p>{location}</p>
        <button onClick={() => {
          const favorite = isFavorite(name);
          favorite ? removeFromFavorites(account.id, favorite.key) :
            addFavoriteCourt(account.id, court);
          db.grabFavoriteCourtsList(account.id)
            .then(courtsList => courtsList.val())
            .then(courtsList => Object.keys(courtsList)
              .map(key => ({ key, ...courtsList[key] })))
            .then(favoritesList => handleFavorite(favoritesList))
        }}>{
            isFavorite(name) ? 'remove from favorites' :
              'add to favorites'
          }
        </button>
      </div>
    </NavLink>
  )
}