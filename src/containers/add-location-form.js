/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

const DISPLAY_STATES = {
	SHOW_BUTTON: 'SHOW_BUTTON',
	SHOW_FORM: 'SHOW_FORM'
};

export const AddLocationForm = props => {
	const { addLocation } = props;

	const initalState = {
		displayState: DISPLAY_STATES.SHOW_BUTTON,
		city: '',
		state: ''
	};

	const [state, setState] = useState(initalState);

	const handleCityChange = event => {
		setState({ ...state, city: event.target.value });
	};

	const handleStateChange = event => {
		setState({ ...state, state: event.target.value });
	};

	const handleAddLocationButtonClick = () => {
		setState({ ...state, displayState: DISPLAY_STATES.SHOW_FORM });
	};

	const handleSaveNewLocationButtonClick = () => {
		if (state.city && state.state) {
			addLocation(state.city, state.state);
		}

		setState(initalState);
	};

	const styles = {
		button: {
			background: '#3C47E9',
			border: '1px solid #E7E7EB',
			color: '#E7E7EB',
			height: '2em',
			lineHeight: '2em',
			margin: '1em 0',
			outline: 'none'
		},
		input: {
			background: '#1E213A',
			border: '1px solid #E7E7EB',
			color: '#E7E7EB',
			display: 'block',
			height: '2em',
			lineHeight: '2em',
			marginTop: '1em',
			'&::placeholder': {
				color: '#E7E7EB'
			}
		}
	};

	if (state.displayState === DISPLAY_STATES.SHOW_BUTTON) {
		return (
			<button
				css={{ ...styles.button }}
				onClick={handleAddLocationButtonClick}
			>
				Add Location
			</button>
		);
	}

	if (state.displayState === DISPLAY_STATES.SHOW_FORM) {
		return (
			<div>
				<input
					css={styles.input}
					placeholder={'City: Roseville'}
					type="text"
					onChange={handleCityChange}
				/>

				<input
					css={styles.input}
					placeholder={'State: Minnesota'}
					type="text"
					onChange={handleStateChange}
				/>

				<button
					css={{ ...styles.button }}
					onClick={handleSaveNewLocationButtonClick}
				>
					Save
				</button>
			</div>
		);
	}
};
