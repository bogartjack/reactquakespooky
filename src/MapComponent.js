import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapComponent extends Component {
	constructor(){
		super();
		this.state={

		}
	}

	ComponentDidMount(){
		
	}

	render(){
			const allQuakes = this.props.quakes.map((quake, i) =>{
				console.log(quake);
				return (<Marker key={i} title={quake.properties.title} 
					name={quake.properties.place}
					position={{lat: quake.geometry.coordinates[1],
							lng: quake.geometry.coordinates[0]
					}}
					/*icon={{
						url: 'images/earthquake.png'
					}}*/ />)
			});
			console.log(allQuakes)
		return(
			<Map google={this.props.google}
				initialCenter={{lat:39.7392, lng: -104.9903}}
				zoom={14}
				style={{width: '76%', height:'100%', position: 'relative' }}
			>
				{allQuakes}	
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapComponent)
