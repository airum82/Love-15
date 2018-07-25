import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { mapsKey } from '../../APIkey';
import React from 'react';
import PropTypes from 'prop-types';

export const CourtMap = ({coord, google}) => {
  return (
    <Map
      google={google}
      zoom={14}
      initialCenter={coord}
      center={coord}
      style={{
        width: '50vw',
        height: '50vh',
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

CourtMap.propTypes = {
  google: PropTypes.object,
  coords: PropTypes.object
}