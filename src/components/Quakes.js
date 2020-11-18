import React from 'react'
import QuakeP from './QuakeP';



class Quakes extends React.Component {
  state = {
    quakes: [],
    loading: true,
  }
 
  // {lat: 36.11, lng: -115.17}
  
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


  render() {

      return(
        <div id="info">
            <QuakeP quakes={this.state.quakes} />
        </div>
      )
  }
}

export default Quakes;