import { app, BrowserWindow } from 'electron';

let mainWindow;

const createWindow = () => {
	window = new BrowserWindow({ width: 800, height: 600 });
	window.load('http://localhost:3000');
	window.on('closed', () => {
		window = null;
	});
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
