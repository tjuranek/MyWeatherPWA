import axios from 'axios';
import { WEATHER_TYPES } from '../constants/weather-types';
import { WWO_CODES } from '../constants/wwo-codes';
import { generateGuid } from '../services/guid';

export const getCurrentLocation = async () => {
	try {
		const cityUrl = `https://wttr.in?format=3`;
		const cityResponse = await axios.get(cityUrl);

		if (cityResponse.status !== 200) {
			throw new Error('Failed to get current city.');
		}

		const cityStartIndex = 0;
		const cityEndIndex = cityResponse.data.indexOf(', ');
		const city = cityResponse.data.substring(cityStartIndex, cityEndIndex);
		const regionStartIndex = cityEndIndex + 2;
		const regionEndIndex = cityResponse.data.indexOf(':');
		const region = cityResponse.data.substring(
			regionStartIndex,
			regionEndIndex
		);

		const stateUrl = `https://wttr.in/~${city}+${region}?format=j1`;
		const stateResponse = await axios.get(stateUrl);

		if (stateResponse.status !== 200) {
			throw new Error('Failed to get current state.');
		}

		const state = stateResponse.data.nearest_area[0].region[0].value;

		return {
			id: generateGuid(),
			city: city,
			state: state
		};
	} catch (error) {
		console.error(error);
		return undefined;
	}
};

export const getWeatherForLocation = async (city, state) => {
	try {
		const url = `https://wttr.in/~${city}+${state}?format=j1`;
		const response = await axios.get(url);

		if (response.status !== 200)
			throw new Error('Failed to get weather data.');

		const data = response.data;

		const currentConditions = {
			tempCurrent: data.current_condition[0].temp_F,
			feelsLike: data.current_condition[0].FeelsLikeF,
			chanceOfRain: Math.max(
				...data.weather[0].hourly.map(hourly => hourly.chanceofrain)
			),
			weatherDescription: getDailyForecast(data.weather[0].hourly)
				.weatherDescription,
			weatherType: WEATHER_TYPES.CLOUDY
		};

		const forecast = data.weather.map(data =>
			getDailyForecast(data.hourly)
		);

		return {
			currentConditions: currentConditions,
			forecast: forecast
		};
	} catch (error) {
		console.error(error);
		return undefined;
	}
};

const getDailyForecast = dailyWeather => {
	const hourlyTemps = dailyWeather.map(hourly => hourly.tempF);
	const tempHigh = Math.max(...hourlyTemps);
	const tempLow = Math.min(...hourlyTemps);
	const weatherDescription = getDailyWeatherType(dailyWeather);

	return {
		tempHigh: tempHigh,
		tempLow: tempLow,
		weatherDescription: weatherDescription
	};
};

const mapWeatherCodeToWeatherType = weatherCode => {
	let weatherType = null;

	Object.keys(WWO_CODES).forEach(key => {
		if (WWO_CODES[key].includes(weatherCode)) {
			weatherType = WEATHER_TYPES[key];
		}
	});

	return weatherType;
};

const getDailyWeatherType = dailyWeather => {
	// convert all the codes to weather types, create empty object to store their total occurrence count
	const weatherCodes = dailyWeather.map(
		hourlyWeather => hourlyWeather.weatherCode
	);
	const weatherTypes = weatherCodes.map(code =>
		mapWeatherCodeToWeatherType(code)
	);
	let weatherTypeOccurrences = {};

	// get the occurrence count for each unique weather type,
	weatherTypes.forEach(weatherType => {
		if (Object.keys(weatherTypeOccurrences).includes(weatherType)) return;

		let count = 0;
		weatherTypes.forEach(element => {
			if (weatherType === element) count++;
		});
		weatherTypeOccurrences.weatherType = count;
	});

	// if there isn't a most frequent weather type, return the weather at mid-day
	const occurrences = Object.keys(weatherTypeOccurrences);
	const uniqueOccurrences = new Set(occurrences);
	if (occurrences.length !== uniqueOccurrences.length) {
		const orderedDailyWeather = dailyWeather.sort((a, b) =>
			a.time > b.time ? 1 : -1
		);
		const midDayWeatherCode =
			orderedDailyWeather[Math.round(orderedDailyWeather.length / 2)]
				.weatherCode;
		return mapWeatherCodeToWeatherType(midDayWeatherCode);
	}

	// return the most frequent weather type
	const largestOccurrenceValue = Math.max(
		...Object.values(weatherTypeOccurrences)
	);
	const weatherType = Object.keys(weatherTypeOccurrences).find(
		key => weatherTypeOccurrences[key] === largestOccurrenceValue
	);
	return weatherType;
};
