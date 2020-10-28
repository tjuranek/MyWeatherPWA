import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { App } from './app';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
