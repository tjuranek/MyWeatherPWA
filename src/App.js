import React, { useState, useEffect } from "react";
import { WeatherCard } from "./containers";
import { useLocalStorage } from "./hooks";
import { getWeatherForLocation } from "./services";

export const App = () => {
	const [state, setState] = useState({
		weatherData: {},
		isLoading: true
	});

	const [name, setName] = useLocalStorage("name", "rich");

	const toggleName = () => {
		setName(name == "thomas" ? "rich" : "thomas");
	};

	useEffect(() => {
		const getWeather = async () => {
			const data = await getWeatherForLocation("Roseville", "Minnesota");
			setState({ ...state, weatherData: { ...data }, isLoading: false });
		};

		getWeather();
	}, [state]);

	return (
		<>
			{state.isLoading ? (
				<>loading</>
			) : (
				<>
					<WeatherCard weather={state.weatherData} />
				</>
			)}
		</>
	);
};
