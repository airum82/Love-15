export const cleanPlaces = (places) => {
  return places.map((place, index) => {
    return {
      id: index,
      name: place.name,
      rating: place.rating,
      location: place.vicinity,
      coord: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
    };
  });
};