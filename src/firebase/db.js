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

export const removeFavoriteFromList = (userId, courtId) => {
  db.ref(`users/${userId}/favorites/${courtId}`).remove()
}