import React, {Component} from 'react';
import {List, Segment} from 'semantic-ui-react';
const moment = require('moment');

const QuakeList = (props) =>{
	render(){
		const allQuakesList = props.quakes.map((quake, i) =>{
			const quakePlace = quake.place.slice(10);
			const now = moment();
			const quakeTime = moment(quake.time);
			const elapsed = (now.millisecond() - quakeTime.millisecond())/(1000*60*60);
			return(
				<Segment key={i}><List.Item>
					The quake occurred in {quakePlace} <br/>
					with a center about {quake.place} <br/>
					of magnitude {quake.magnitude} <br/>
					on {quakeTime}, about {elapsed} ago <br/>
				<List.Item></Segment>
			);
		});
		return(
			
			<div className='quakeList'>
				props.map(	
			</div>
		)
	}
}

export default QuakeList;
