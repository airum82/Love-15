import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { Component } from 'react';
import { mapsKey, geoKey } from '../../APIkey';
import { cleanPlaces } from '../../Cleaner/cleaner';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      coords: {},
      location: '',
      map: ''
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
    console.log(service);
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

  renderMap = () => {
    this.setState({
      map: ''
    })
    this.setState({
      map: <Map
        className="map"
        onReady={this.fetchPlaces}
        google={this.props.google}
        zoom={14}
        style={{
          width: '50%',
          height: '50vh'
        }}
        initialCenter={this.state.coords}
        center={this.state.coords}
      />
    })
  }

  render() {
    return (
      <div className="map-container">
        <form onSubmit={async (e) => {
          e.preventDefault();
          await this.fetchCoords(this.state.location);
          this.renderMap();
        }}>
          <input type='text' onChange={this.handleLocationEntry}/>
        </form>
        {this.state.map}
        {this.state.places.map(place => <p>{place.name}</p>)}
      </div>
    )
  }
 }

export default GoogleApiWrapper({
  apiKey: mapsKey
})(MapContainer)