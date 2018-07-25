import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { mapsKey } from '../../APIkey';
import React from 'react';

export const CourtMap = ({coord, google}) => {
  return (
    <Map
      google={google}
      zoom={14}
      initialCenter={coord}
      center={coord}
      style={{
        width: '40vw',
        height: '40vh',
      }}
    >
      <Marker
        position={coord}
      />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: mapsKey
})(CourtMap);