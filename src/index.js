import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './frontend/App/App';
import { AuthProvider } from './frontend/context/auth-context';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';

// Call make Server
makeServer();

// API for rendering in React 18
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Router>
	</React.StrictMode>
);
