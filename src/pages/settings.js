/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { AppContext } from '../app';
import { AddLocationForm, WeatherCard } from '../containers';
import { APP_ACTIONS } from '../reducers/app';
import { generateGuid } from '../services/guid';

export const Settings = () => {
	const { state, dispatch } = useContext(AppContext);

	return (

	);
};
