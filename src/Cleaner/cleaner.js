export const cleanPlaces = (places) => {
  return places.map((place, index) => {
    return {
      id: index,
      name: place.name,
      hours: place.opening_hours,
      rating: place.rating,
      location: place.vicinity,
      coord: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
    }
  })
}