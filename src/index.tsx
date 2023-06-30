import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import store from './store';
import MapComponent from './features/map/Map';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/map" element={<MapComponent />} />
			</Routes>
		</Provider>
	</BrowserRouter>
);
