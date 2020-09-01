import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		if (item) {
			try {
				return JSON.parse(item);
			} catch (error) {
				return item;
			}
		}
		return initialValue;
	});

	const setValue = value => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error(error);
		}
	};

	return [storedValue, setValue];
};
