import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { Component } from 'react';
import { mapsKey } from '../../APIkey';

export class MapContainer extends Component {

  fetchPlaces(mapProps, map) {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: { lat: 39.7392, lng: -104.9903 },
      radius: 17000,
      keyword: ['tennis']
    }, (result) => {
      console.log(result);
    })

  }
  render() {
    return (
      <Map 
        google={this.props.google} 
        zoom={14} 
        onReady={this.fetchPlaces}/>
    )
  }
 }

export default GoogleApiWrapper({
  apiKey: mapsKey
})(MapContainer)