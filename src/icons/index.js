import { WEATHER_TYPES } from '../constants';
import cloudy from './cloudy.png';
import rainy from './rainy.png';
import snowy from './snowy.png';
import stormy from './stormy.png';
import sunny from './sunny.png';

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
	}
};
