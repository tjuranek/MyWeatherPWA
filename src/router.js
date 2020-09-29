import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainLayout } from './layouts/main-layout';
import { Home } from './pages/home';
import { Settings } from './pages/settings';

const RouterWrapper = props => {
	const { Layout, Page, path } = props;

	return (
		<Route path={path}>
			<Layout>
				<Page />
			</Layout>
		</Route>
	);
};

export const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<RouterWrapper
					Layout={MainLayout}
					Page={Settings}
					path="/settings"
				/>
				<RouterWrapper Layout={MainLayout} Page={Home} path="/" />
			</Switch>
		</BrowserRouter>
	);
};
