export const cleanPlaces = (places) => {
  return places.map(place => {
    return {
      name: place.name,
      hours: place.opening_hours,
      rating: place.rating,
      location: place.vicinity,
      coords: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
    }
  })
}