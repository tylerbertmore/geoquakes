import React from 'react';

import Quakes from './components/Quakes';
import Map from './components/MapContainer';
import './App.css';

class App extends React.Component {
  state = {
    quakes: [],
    loading: true,
  }

  componentDidMount(){
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
      .then(response => response.json())
      .then((data) => {
        console.log(data.features);
        this.setState({
          quakes: data.features,
          loading: false,
        })
      })
      .catch((error) => console.log(error));

  }
  render(){

    return (
      <div className="app">
        <div className="mapContainer">
          <Map quakes={this.state.quakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week:</h1>
          <Quakes />
        </div>
      </div>
    );
  }
}

export default App;
