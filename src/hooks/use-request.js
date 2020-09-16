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
	}
};

export const useRequest = (request, initialData) => {
	const [state, dispatch] = useReducer(requestReducer, {
		isLoading: false,
		isError: false,
		data: initialData
	});

	useEffect(() => {
		let didComponentUnmount = false;

		const requestData = async () => {
			dispatch({ type: 'REQUEST_INIT' });

			try {
				const response = await axios(request);

				if (!didComponentUnmount) {
					dispatch({
						type: 'REQUEST_SUCCESS',
						payload: response.data
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
		isLoading: state.isLoading,
		isError: state.isError,
		data: state.data
	};
};
