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
		container: {
			marginLeft: '25%',
			marginRight: '25%',
			padding: '1rem',
			width: '50%'
		},
		addLocationButton: {
			width: '100%'
		},
		form: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center'
		},
		formInput: {
			flexGrow: '2',
			margin: '.5rem',
			padding: '1rem'
		},
		formButton: {
			flexGrow: '1',
			margin: '.5rem',
			padding: '1rem'
		}
	};

	return (
		<div css={styles.container}>
			{state.displayState === DISPLAY_STATES.SHOW_BUTTON && (
				<button
					css={styles.addLocationButton}
					onClick={handleAddLocationButtonClick}
				>
					Add Location
				</button>
			)}

			{state.displayState === DISPLAY_STATES.SHOW_FORM && (
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
						css={styles.formButton}
						onClick={handleSaveNewLocationButtonClick}
					>
						Save
					</button>
				</div>
			)}
		</div>
	);
};
