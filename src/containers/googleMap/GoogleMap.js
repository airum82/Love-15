import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { Component } from 'react';
import { mapsKey } from '../../APIkey';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} />
    )
  }
 }

export default GoogleApiWrapper({
  apiKey: mapsKey
})(MapContainer)