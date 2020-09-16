import React, { createContext, useEffect, useReducer } from 'react';
import { APP_ACTIONS, appReducer, initialState } from './reducers/app';
import { useLocalStorage } from './hooks/use-local-storage';
import { Router } from './router';
import { getCurrentLocation } from './services/weather';

export const AppContext = createContext();

export const App = () => {
	const [
		isCurrentLocationEnabled,
		setIsCurrentLocationEnabled
	] = useLocalStorage('isLocalStorageEnabled', true);
	const [locations, setLocations] = useLocalStorage('locations', []);
	const [state, dispatch] = useReducer(appReducer, initialState);

	// hydrate app reducer locations with local storage locations on initial render
	useEffect(() => {
		const getAndSetCurrentLocation = async () => {
			const currentLocation = await getCurrentLocation();
			dispatch({
				type: APP_ACTIONS.SET_CURRENT_LOCATION,
				payload: currentLocation
			});
		};

		getAndSetCurrentLocation();

		dispatch({
			type: APP_ACTIONS.SET_LOCATIONS,
			payload: locations
		});

		dispatch({
			type: APP_ACTIONS.SET_IS_CURRENT_LOCATION_ENABLED,
			payload: isCurrentLocationEnabled
		});
	}, []);

	// keep local storage locations congruent with the reducer locations
	useEffect(() => {
		setLocations(state.locations);
		setIsCurrentLocationEnabled(state.isCurrentLocationEnabled);
	}, [state.locations, state.isCurrentLocationEnabled]);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<Router />
		</AppContext.Provider>
	);
};
