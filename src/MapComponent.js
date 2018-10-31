import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapComponent extends Component {
	constructor{
		super();
	}

	ComponentDidMount(){
		
	}

	render(){
		return(
			<Map google={this.props.google} initialCenter={{lat:39.7392, lng: -104.9903}}>
				
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: (AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg)
})(MapComponent)
