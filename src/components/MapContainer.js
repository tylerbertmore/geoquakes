import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import earthquakePic from '../images/earthquake.png';

const mapStyles = {
  width: '100%',
  height: '100vh',
  position: 'relative',
};

export class MapContainer extends Component {
  
  render() {
    console.log('stupidmarkers:', this.props.quakes)
    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={
          {
            lat: 36.11,
            lng: -115.17
          }
        }
        >
        

       {
    this.props.quakes.map((quake) => (
      <Marker icon={{ url: earthquakePic, scaledSize: new this.props.google.maps.Size(29,29)  }} key={quake.id} position={{lat: quake.geometry.coordinates[1], lng: quake.geometry.coordinates[0]}} />
     ))
  }
        
        
        </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);
