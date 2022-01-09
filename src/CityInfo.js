import React from "react";
function CityInfo({dateBuilder, ...props}) {
	return (
		<>
			<div className='location-box'>
				<div className='location'>{props.name + ', ' + props.country}</div>
				<div className='date'>{dateBuilder(new Date())}</div>
			</div>

			<div className='weather-box'>
				<div className='temp'>{props.temp}&nbsp;&deg;C</div>
				<div className='weather'>{props.description}</div>
			</div>
		</>
	);
}

export default CityInfo;
