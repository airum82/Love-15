import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { mapsKey } from '../../APIkey';
import React from 'react';
import PropTypes from 'prop-types';
import './CourtMap.css';

export const CourtMap = ({coord, google}) => {
  return (
    <Map
      google={google}
      zoom={14}
      initialCenter={coord}
      center={coord}
      style={{
        width: '60vw',
        height: '50vh',
        margin: '3% auto'
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