import React, {Component} from 'react';
import {List, Segment} from 'semantic-ui-react';
const moment = require('moment');

const QuakeList = (props) =>{
		const allQuakesList = props.quakes.map((quake, i) =>{
			const quakePlace = quake.properties.place;
			const now = moment();
			const quakeTime = moment(quake.properties.time);
			const elapsed = (quakeTime.fromNow());
			return(
				<Segment key={i}><List.Item>
					The quake occurred at: {quakePlace} <br/>
					with a center about {quake.properties.place} <br/>
					of magnitude {quake.properties.mag} <br/>
					on {quakeTime.format('MMMM Do YYYY, h:mm:ss a')}, about {elapsed}<br/>
				</List.Item></Segment>
			);
		});
		return(
			
			<div className='quakeList'>
				{allQuakesList}	
			</div>
		)
}

export default QuakeList;
