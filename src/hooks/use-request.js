import { useEffect, useReducer } from 'react';
import axios from 'axios';

const requestReducer = (state, action) => {
	switch (action.type) {
		case 'REQUEST_INIT':
			return { ...state, isLoading: true, isError: false };
		case 'REQUEST_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload
			};
		case 'REQUEST_FAILURE':
			return { ...state, isLoading: false, isError: true };
		default:
			return { ...state };
	}
};

export const useRequest = request => {
	const [state, dispatch] = useReducer(requestReducer, {
		data: null,
		isError: false,
		isLoading: true
	});

	useEffect(() => {
		let didComponentUnmount = false;

		if (typeof request == 'function') {
		}

		const requestData = async () => {
			dispatch({ type: 'REQUEST_INIT' });

			try {
				const response =
					typeof request === 'function'
						? await request()
						: await axios(request).data;

				if (!didComponentUnmount) {
					dispatch({
						type: 'REQUEST_SUCCESS',
						payload: response
					});
				}
			} catch (error) {
				if (!didComponentUnmount) {
					dispatch({ type: 'REQUEST_FAILURE' });
				}
			}
		};

		requestData();

		return () => {
			didComponentUnmount = true;
		};
	}, []);

	return {
		data: state.data,
		isError: state.isError,
		isLoading: state.isLoading
	};
};
