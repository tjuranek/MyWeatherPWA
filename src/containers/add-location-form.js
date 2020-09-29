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
			fontSize: '1em',
			height: '2em',
			lineHeight: '2em',
			minWidth: '25%',
			outline: 'none'
		},
		addLocationButton: {
			margin: '1em 0'
		},
		form: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			margin: '1em 0'
		},
		formInput: {
			background: '#1E213A',
			border: '1px solid #E7E7EB',
			color: '#E7E7EB',
			flexGrow: '2',
			marginRight: '.5em',
			padding: '.5em .25em',
			'&::placeholder': {
				color: '#E7E7EB'
			}
		},
		formButton: {
			flexGrow: '1'
		}
	};

	if (state.displayState === DISPLAY_STATES.SHOW_BUTTON) {
		return (
			<button
				css={{ ...styles.button, ...styles.addLocationButton }}
				onClick={handleAddLocationButtonClick}
			>
				Add Location
			</button>
		);
	}

	if (state.displayState === DISPLAY_STATES.SHOW_FORM) {
		return (
			<div css={styles.form}>
				<input
					css={styles.formInput}
					placeholder={'City: Roseville'}
					type="text"
					onChange={handleCityChange}
				></input>
				<input
					css={styles.formInput}
					placeholder={'State: Minnesota'}
					type="text"
					onChange={handleStateChange}
				></input>
				<button
					css={{ ...styles.button, ...styles.formButton }}
					onClick={handleSaveNewLocationButtonClick}
				>
					Save
				</button>
			</div>
		);
	}
};
