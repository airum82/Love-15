import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    <div className="court-card">
      <NavLink to={`/court/${id}`} activeClassName="show-p" className="map-link">
        <h2>{name}</h2>
        <p>{location}</p>
      </NavLink>
      <button onClick={() => {
        const favorite = isFavorite(name);
        favorite ? removeFromFavorites(account.id, favorite.key) :
          addFavoriteCourt(account.id, court);
        db.grabFavoriteCourtsList(account.id)
          .then(courtsList => courtsList.val())
          .then(courtsList => {
            if(courtsList) {
              return Object.keys(courtsList).map(key => (
                { key, ...courtsList[key] }));
            }
          })
          .then(favoritesList => handleFavorite(favoritesList));
      }}>{
          isFavorite(name) ? 'remove from favorites' :
            'add to favorites'
        }
      </button>
    </div>
  );
};

CourtCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  location: PropTypes.string,
  court: PropTypes.object,
  addFavoriteCourt: PropTypes.func,
  account: PropTypes.object,
  removeFromFavorites: PropTypes.func,
  isFavorite: PropTypes.func,
  handleFavorite: PropTypes.func,
  db: PropTypes.object
};