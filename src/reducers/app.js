export const initialState = {
	locations: []
};

export const APP_ACTIONS = {
	ADD_LOCATION: 'ADD_LOCATION',
	REMOVE_LOCATION: 'REMOVE_LOCATION',
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
		case APP_ACTIONS.SET_LOCATIONS: {
			return { ...state, locations: action.payload };
		}
	}
};
