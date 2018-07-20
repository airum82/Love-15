import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { Component } from 'react';
import { mapsKey, geoKey } from '../../APIkey';
import { cleanPlaces } from '../../Cleaner/cleaner';

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      places: [],
      coords: {},
      location: ''
    }
  }

  fetchCoords = async (location) => {
    const splitLocation = location.split(' ');
    console.log(splitLocation);
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
      + splitLocation[0] + ',+' + splitLocation[1] + '&key=' + geoKey;
    const response = await fetch(url);
    const result = await response.json();
    this.setState({
      coords: result.results[0].geometry.location
    })
  }

  fetchPlaces = (mapProps, map) => {
    const coords = this.state.coords;
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: { lat: coords.lat, lng: coords.lng },
      radius: 17000,
      keyword: ['tennis']
    }, (result) => {
      console.log(result)
      this.setState({
        places: cleanPlaces(result)
      });
    })
  };

  handleLocationEntry = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.fetchCoords(this.state.location);
        }}>
          <input type='text' onChange={this.handleLocationEntry}/>
          <Map
            onClick={this.fetchPlaces}
            google={this.props.google} 
            zoom={14}
            style={{
              width: '50%',
              height: '50vh'
            }}
          />
        </form>
      </div>
    )
  }
 }

export default GoogleApiWrapper({
  apiKey: mapsKey
})(MapContainer)