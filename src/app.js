import React, { createContext, useEffect, useReducer } from 'react';
import { APP_ACTIONS, appReducer, initialState } from './reducers/app';
import { useLocalStorage } from './hooks/use-local-storage';
import { Router } from './router';

export const AppContext = createContext();

export const App = () => {
	const [locations, setLocations] = useLocalStorage('locations', []);
	const [state, dispatch] = useReducer(appReducer, initialState);

	// hydrate app reducer locations with local storage locations on initial render
	useEffect(() => {
		dispatch({
			type: APP_ACTIONS.SET_LOCATIONS,
			payload: locations
		});
	}, []);

	// keep local storage locations congruent with the reducer locations
	useEffect(() => {
		setLocations(state.locations);
	}, [state.locations]);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<Router />
		</AppContext.Provider>
	);
};
