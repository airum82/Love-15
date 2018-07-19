import { geoKey, placesKey } from '../APIkey';

export const fetchCoords = async (location) => {
  const splitLocation = location.split(' ');
  console.log(splitLocation);
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
  + splitLocation[0] + ',+' + splitLocation[1] + '&key=' + geoKey;
  const response = await fetch(url);
  const result = await response.json();
  return result.results[0].geometry.location
}

export const fetchCourts = async (lat, lon) => {
  const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
  lat + ',' + lon + '&radius=17000&keyword=tennis&key=' + placesKey;
  const response = await fetch(realUrl, {
    method: 'GET'
  });
  console.log(response)
  // const result = await response.json();
  // console.log({
  //   name: result.name,
  //   hours: result.openinghours.open_now,
  //   rating: result.rating,
  //   location: result.vicinity
  // })
}