import React, { useState, useEffect } from "react";
import CityInfo from "./CityInfo";

function App() {
	const api = {
		key: "fceafdc4bd62f2ac55a11cc91961173d",
		url: `https://api.openweathermap.org/data/2.5/`,
	};

	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState("");

	useEffect(() => {
		fetch(`${api.url}weather?q=minsk&units=metric&appid=${api.key}`)
			.then((res) => res.json())
			.then((result) => setWeather(result))
			.catch((e) => console.log(e));
		setQuery("");
	}, []);

	const search = async (e) => {
		if (e.key === "Enter") {
			await fetch(
				`${api.url}weather?q=${query}&units=metric&appid=${api.key}`
			)
				.then((res) => res.json())
				.then((result) => setWeather(result))
				.catch((e) => console.log(e));
			setQuery("");
		}
	};

	const dateBuilder = (d) => {
		let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};

	return (
		<div className={weather? (weather.main.temp > 10 ? 'app warm' : 'app') : 'app'}>
			<main className=''>
				<div className='search-box'>
					<input
						onKeyPress={search}
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						type='text'
						className='search-bar'
						placeholder='Search....'
					/>
				</div>
				{weather ? (
					<CityInfo
						name={weather.name}
						country={weather.sys.country}
						temp={weather.main.temp.toFixed(1)}
						dateBuilder={dateBuilder}
						description={weather.weather[0].main}
					/>
				) : (
					<h1 className='location'>Enter city</h1>
				)}
			</main>
		</div>
	);
}

export default App;
