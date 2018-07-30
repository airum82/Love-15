import React from 'react';
import './UserCard.css';

export const UserCard = ({ username }) => {
  return (
    <div className="user-card">
      <h4>{username}</h4>
    </div>
  )
}