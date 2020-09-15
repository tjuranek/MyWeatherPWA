import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Settings } from './pages/settings';

export const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/settings">
					<Settings />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
