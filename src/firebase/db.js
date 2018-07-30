import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const addFavoriteCourt = (id, court) => {
  return db.ref(`users/${id}/favorites`).push(court)
}

export const grabFavoriteCourtsList = (id) => {
  return db.ref(`users/${id}/favorites`).once('value')
}