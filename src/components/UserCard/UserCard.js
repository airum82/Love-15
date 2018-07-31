import React from 'react';
import './UserCard.css';
import PropTypes from 'prop-types';

export const UserCard = ({ username }) => {
  return (
    <div className="user-card">
      <h4>{username}</h4>
    </div>
  )
}

UserCard.propTypes = {
  username: PropTypes.string
}