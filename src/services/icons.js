import { WEATHER_TYPES } from '../constants/weather-types';
import cloudy from '../resources/icons/cloudy.png';
import rainy from '../resources/icons/rainy.png';
import snowy from '../resources/icons/snowy.png';
import stormy from '../resources/icons/stormy.png';
import sunny from '../resources/icons/sunny.png';

export const getIconFromWeatherType = weatherType => {
	switch (weatherType) {
		case WEATHER_TYPES.CLOUDY:
			return cloudy;
		case WEATHER_TYPES.RAINY:
			return rainy;
		case WEATHER_TYPES.SNOWY:
			return snowy;
		case WEATHER_TYPES.STORMY:
			return stormy;
		case WEATHER_TYPES.SUNNY:
			return sunny;
		default:
			return;
	}
};
