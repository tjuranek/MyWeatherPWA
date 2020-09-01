import React, { useState } from 'react';
import { useLocalStorage } from '../hooks';

const DISPLAY_STATES = {
	SHOW_BUTTON: 'SHOW_BUTTON',
	SHOW_FORM: 'SHOW_FORM'
};

export const AddLocationForm = () => {
	const initalState = {
		displayState: DISPLAY_STATES.SHOW_BUTTON,
		city: '',
		state: ''
	};

	const [state, setState] = useState(initalState);
	const [locations, setLocations] = useLocalStorage('locations', []);

	const handleCityChange = event => {};

	const handleStateChange = event => {};

	const handleAddLocationButtonClick = () => {
		setState({ ...state, displayState: DISPLAY_STATES.SHOW_FORM });
	};

	const handleSaveNewLocationButtonClick = () => {
		setLocations([...locations, `${state.city},${state.state}`]);
		setState(initalState);
	};

	return (
		<>
			{state.displayState == DISPLAY_STATES.SHOW_BUTTON && (
				<button onClick={handleAddLocationButtonClick}>click me</button>
			)}

			{state.displayState == DISPLAY_STATES.SHOW_FORM && (
				<>
					<input type="text"></input>
					<input type="text"></input>
					<button onClick={handleSaveNewLocationButtonClick}>
						save
					</button>
				</>
			)}
		</>
	);
};
