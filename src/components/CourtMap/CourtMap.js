import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { mapsKey } from '../../APIkey';
import React from 'react';

export const CourtMap = ({coords, google}) => {
  return (
    <Map
      google={google}
      zoom={14}
      initialCenter={coords}
      style={{
        width: '20vw',
        height: '20vh'
      }}
    >
      <Marker
        position={coords}
      />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: mapsKey
})(CourtMap);