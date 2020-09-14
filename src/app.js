import React, { createContext, useEffect, useReducer } from 'react';
import { APP_ACTIONS, appReducer, initialState } from './reducers/app';
import { Home } from './pages/home';
import { useLocalStorage } from './hooks/use-local-storage';

export const AppContext = createContext();

export const App = () => {
	const [locations, setLocations] = useLocalStorage('locations', []);
	const [state, dispatch] = useReducer(appReducer, initialState);

	useEffect(() => {
		dispatch({
			type: APP_ACTIONS.SET_LOCATIONS,
			payload: locations
		});
	}, []);

	useEffect(() => {
		setLocations(state.locations);
	}, [state.locations]);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<Home />
		</AppContext.Provider>
	);
};
