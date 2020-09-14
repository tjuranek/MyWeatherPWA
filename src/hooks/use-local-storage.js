import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		const savedValue = window.localStorage.getItem(key);
		if (savedValue) {
			try {
				return JSON.parse(savedValue);
			} catch (error) {
				return defaultValue;
			}
		}
		return defaultValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
};
