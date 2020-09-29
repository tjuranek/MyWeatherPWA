export const initialState = {
	currentLocation: {},
	isCurrentLocationEnabled: true,
	locations: []
};

export const APP_ACTIONS = {
	ADD_LOCATION: 'ADD_LOCATION',
	REMOVE_LOCATION: 'REMOVE_LOCATION',
	SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',
	SET_IS_CURRENT_LOCATION_ENABLED: 'SET_IS_CURRENT_LOCATION_ENABLED',
	SET_LOCATIONS: 'SET_LOCATIONS'
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case APP_ACTIONS.ADD_LOCATION: {
			return {
				...state,
				locations: state.locations.length
					? [...state.locations, action.payload]
					: [action.payload]
			};
		}
		case APP_ACTIONS.REMOVE_LOCATION: {
			return {
				...state,
				locations: state.locations.filter(
					location => location.id !== action.payload
				)
			};
		}
		case APP_ACTIONS.SET_CURRENT_LOCATION: {
			return { ...state, currentLocation: action.payload };
		}
		case APP_ACTIONS.SET_IS_CURRENT_LOCATION_ENABLED: {
			return { ...state, isCurrentLocationEnabled: action.payload };
		}
		case APP_ACTIONS.SET_LOCATIONS: {
			return { ...state, locations: action.payload };
		}
		default: {
			return {
				...state
			};
		}
	}
};
