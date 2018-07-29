import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const addFavoriteCourt = (id, court) => {
  console.log(db.ref(`users/${id}/favorites`).on('value',
  function(snapshot) {
    console.log(snapshot.val())
  })
)
  return db.ref(`users/${id}/favorites`).push(court)

}