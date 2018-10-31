import React, { Component } from 'react';

class App extends Component {
	constructor(){
		super();
		this.state={
			quakes: []
		}
	}
	componentDidMount(){
		getQuakes().then((data) =>{
			this.setState(quakes: data);
		}).catch((err)=>{console.log(err));
	}
	getQuakes = () =>{
		try{
			const allQuakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson').features;
			const allQuakesJson = allQuakes.json();
			return allQuakesJson
		}
		catch(err){
			console.log(err)
		}
	}

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapComponent quakes ={this.state.quakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <QuakeList quakes ={this.state.quakes}/>
        </div>
      </div>
    );
  }
}

export default App;
